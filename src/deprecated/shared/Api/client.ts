import { storage } from '@/deprecated/shared/Storage';

/**
 * `IApiErrorData<T>`
 *
 * A utility type for representing potential validation errors for a form defined by the structure `T`.
 *
 * The type mirrors the structure of `T`. However, every leaf node (final field) is an array of strings,
 * where each string represents a distinct error message for that field.
 *
 * @template T The type that represents the structure of the form data.
 *
 * @example
 * ```typescript
 * interface User {
 *     firstName: string;
 *     profile: {
 *         city: string;
 *     };
 * }
 *
 * const errors: IApiErrorData<User> = {
 *     firstName: [{message: "First name is required", code: 'invalid'}],
 *     profile: {
 *         city: [{message: "City is required", code: 'invalid'}],
 *     }
 * };
 * ```
 */
export type IApiErrorData<T> = {
  [P in keyof T]: T[P] extends object
    ? IApiErrorData<T[P]>
    : { errors: string[] } | { code: string; message: string }[];
};

export class ApiError<T> extends Error {
  constructor(
    public message: string,
    public errorObject: T | Record<string, IApiErrorData<T>>
  ) {
    super(message);
    // This line is necessary for the error stack trace to work correctly
    Object.setPrototypeOf(this, new.target.prototype);
  }
}
interface RequestConfig {
  params?: any;
  public?: boolean;
}
const getUrlEncodedParams = (configParams: any = {}): string => {
  const params: string[] = [];
  if (!params) {
    return '';
  }
  for (const p in configParams) {
    const key = p;
    if (Array.isArray(configParams[p])) {
      configParams[p].forEach((element: any) => {
        params.push(`${key}=${encodeURIComponent(element)}`);
      });
    } else {
      params.push(`${key}=${encodeURIComponent(configParams[p])}`);
    }
  }
  if (params.length) {
    return `?${params.join('&')}`;
  }
  return '';
};
class ApiClient {
  // This is for API Calls which need to send json data.
  // Authorised is the variable which will add authorization header to the request
  private getHeaders(authorised: boolean): HeadersInit {
    const _headers: HeadersInit = {
      'Content-Type': 'application/json',
    };
    if (storage.get('TOKEN') && authorised) {
      _headers['Authorization'] = `Bearer ${storage.get('TOKEN')}`;
    }
    return _headers;
  }
  /**
   * Makes an asynchronous GET request to a given URL path.
   *
   * @template T - The expected type of the response payload.
   * @template TError - The expected type of the error response.
   *
   * @param urlPath - The endpoint path to make the GET request to.
   * @param config - Configuration for the request, including parameters and other settings.
   *
   * @returns Promise<T> - Returns a promise that resolves with the response payload of type T.
   *
   * @throws ApiError<TError> - Throws an API error with details if the request fails.
   */
  async get<T, TError>(urlPath: string, config: RequestConfig): Promise<T> {
    // Construct the full URL using base URL, provided path, and encoded parameters.
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}${urlPath}${getUrlEncodedParams(
        config.params
      )}`,
      {
        method: 'GET',
        // Conditionally set headers based on whether the request is public or not.
        headers: this.getHeaders(!config.public),
      }
    );

    // Check if the response was successful.
    if (!response.ok) {
      // If there's a body in the response, extract error details and throw them.
      if (response.body) {
        const d = await response.json();
        throw new ApiError<TError>('Request failed with status', d?.errors);
      } else {
        // If there's no body, throw a generic error with the response status.
        throw new ApiError(`Request failed with status ${response.status}`, {});
      }
    }

    // Parse and return the JSON response.
    return response.json();
  }

  /**
   * This method sends a POST request.
   * @template T The expected return type of the request.
   * @template TError The expected error structure if the request fails.
   *
   * @returns {Promise<T>} A promise that resolves with the parsed JSON response.
   *
   * @throws {ApiError<TError>} If the response is not ok (status code is not in the 200-299 range), an `ApiError` will be thrown.
   * If the response has a body, the `errors` field of the response will be attached to the `ApiError`.
   * Otherwise, a generic message with the status code will be included in the `ApiError`.
   **/
  async post<T, TError>(
    urlPath: string,
    body: object,
    config: RequestConfig = {}
  ): Promise<T> {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}${urlPath}`,
      {
        method: 'POST',
        headers: this.getHeaders(!config.public),
        body: JSON.stringify(body),
      }
    );
    if (!response.ok) {
      if (response.body) {
        const d = await response.json();
        throw new ApiError<TError>('Request failed with status', d?.errors);
      } else {
        throw new ApiError(`Request failed with status ${response.status}`, {});
      }
    }
    return response.json();
  }

  /**
   * This method sends a PATCH request.
   * @template T The expected return type of the request.
   * @template TError The expected error structure if the request fails.
   *
   * @returns {Promise<T>} A promise that resolves with the parsed JSON response.
   *
   * @throws {ApiError<TError>} If the response is not ok (status code is not in the 200-299 range), an `ApiError` will be thrown.
   * If the response has a body, the `errors` field of the response will be attached to the `ApiError`.
   * Otherwise, a generic message with the status code will be included in the `ApiError`.
   **/
  async patch<T, TError>(
    urlPath: string,
    body: object,
    config: RequestConfig = {}
  ): Promise<T> {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}${urlPath}`,
      {
        method: 'PATCH',
        headers: this.getHeaders(!config.public),
        body: JSON.stringify(body),
      }
    );
    if (!response.ok) {
      if (response.body) {
        const d = await response.json();
        throw new ApiError<TError>('Request failed with status', d?.errors);
      } else {
        throw new ApiError(`Request failed with status ${response.status}`, {});
      }
    }
    return response.json();
  }
}

export default ApiClient;

export interface ICMSErrorResponse {
    statusCode: number;
    message: string;
    fieldErrors: string[];
    error: boolean;
}

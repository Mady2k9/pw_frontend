enum EventPlatforms {
  GA,
  MoE,
}
interface IEventPlatformConfig {
  [EventPlatforms.GA]?: boolean;
  [EventPlatforms.MoE]?: boolean;
}

interface IEventActions {
  USER_LOGGED_IN: IEventPlatformConfig;
}
const EventActions: IEventActions = {
  USER_LOGGED_IN: {
    [EventPlatforms.MoE]: true,
    [EventPlatforms.GA]: false,
  },
};
const DefaultParams = {
  platform: 'WEB',
};
class EventLoggerService {
  // Method to log events
  logEvent(action: keyof IEventActions, data: any = {}) {
    // Decide where to publish the event
    const platforms = this.decidePlatform(action);

    // Publish the event
    this.publishEvent(action, platforms, { ...DefaultParams, ...data });
  }

  // Method to decide where to publish the event
  private decidePlatform(action: keyof IEventActions): EventPlatforms[] {
    // Logic to decide the platform
    const platforms: EventPlatforms[] = [];
    Object.keys(EventActions[action]).forEach((platform) => {
      if (EventActions[action][platform as unknown as EventPlatforms]) {
        platforms.push(platform as unknown as EventPlatforms);
      }
    });
    return platforms;
  }

  // Method to publish the event
  private publishEvent(
    action: keyof IEventActions,
    platforms: EventPlatforms[],
    data: any
  ) {
    // console.log(data);
    if (platforms.indexOf(EventPlatforms.GA)) {
      // Send GA Event
    }
    if (platforms.indexOf(EventPlatforms.MoE)) {
      // Send MoEngage
    }
  }
}

// Example usage:

export const eventLogger = new EventLoggerService();

import { Injectable } from '@nestjs/common';
import { Hook0Client, Event } from 'hook0-client';

@Injectable()
export class WebhooksService {
  private hook0Client: Hook0Client;

  constructor() {
    this.hook0Client = new Hook0Client(
      'https://app.hook0.com/api/v1/event',
      '25ec08ea-e71c-4413-9649-5991f346869c',
      'fdd4345d-7974-4a2d-8fd5-d2982db49f11',
      true, // Enable debug mode
    );
  }

  async trackEvent(eventType: string, tenant: string, payload: Record<string, any>) {
    try {
      const eventId = await this.hook0Client.sendEvent(
        new Event(eventType, JSON.stringify(payload), 'application/json', {
          //source: 'nestjs-playground',
          tenant: tenant
        }),
      );
      console.log(`Event sent successfully with ID: ${eventId}`);
    } catch (error) {
      console.error('Error sending event:', error);
    }
  }
}

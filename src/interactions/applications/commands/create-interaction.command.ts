import { Command } from "@nestjs/cqrs";

export class CreateInteractionCommand extends Command<{
    interactionId: string // This type represents the command execution result
}> {
    constructor(
        public readonly externalId: string,
    ) {
        super();
    }
}

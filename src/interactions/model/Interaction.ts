import { AggregateRoot } from "@nestjs/cqrs";

export class Interaction extends AggregateRoot {
    constructor(
        private readonly id: string,
        private readonly externalId: string,
    ) {
        super();
    }

    getId() {
        return this.id;
    }

    getExternalId() {
        return this.externalId;
    }
}
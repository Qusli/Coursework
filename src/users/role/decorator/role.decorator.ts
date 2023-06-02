import { SetMetadata } from "@nestjs/common/decorators/core/set-metadata.decorator"

export function Role (...role: string[]) { return SetMetadata("role", [role]) }
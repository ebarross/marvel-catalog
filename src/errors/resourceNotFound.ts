export class ResourceNotFoundError extends Error {
  constructor(resourceName: string) {
    super(`${resourceName} was not found.`);
    this.name = 'ResourceNotFound';
  }
}

import { ResourceLoader } from './ResourceLoader'

export class ResourcePool {
    private resourceLoaders: Map<string, ResourceLoader>

    private resources: Map<string, any>

    constructor () {
        this.resourceLoaders = new Map<string, ResourceLoader>()
        this.resources = new Map<string, any>()
    }

    registerResourceLoader <T extends ResourceLoader> (resourceLoaderClass: (new () => T)) {
        if (!this.resourceLoaders.has(resourceLoaderClass.name)) {
            this.resourceLoaders.set(resourceLoaderClass.name, new resourceLoaderClass())
        } else {
            // TODO: Handle case when resource loader is already registered
        }
    }

    async loadResource (url: string) {
        const extension: string = url.split('.').pop()

        // TODO: Allow for prioritization handling if multiple resourceLoaders handle the same file extension
        const selectedResourceLoaders: ResourceLoader = Array
            .from(this.resourceLoaders.values())
            .filter((resourceLoader: ResourceLoader) => resourceLoader.Extensions.indexOf(extension) > -1)
            [0]

        if (selectedResourceLoaders) {
            const resource: any = await selectedResourceLoaders.load(url)

            this.resources.set(url, resource)
        }
    }

    async getResource (url: string): Promise<any> {
        if (this.resources.has(url)) {
            return this.resources.get(url)
        } else {
            // TODO: Handle case where resource has not been loaded yet (autoload?)
        }
    }
}
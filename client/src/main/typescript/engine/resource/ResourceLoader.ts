export abstract class ResourceLoader{
    protected extensions: Array<string>

    protected constructor(extensions: Array<string>) {
        this.extensions = extensions
    }

    get Extensions (): Array<string> {
        return this.extensions
    }

    async abstract load(url: string): Promise<any>
}
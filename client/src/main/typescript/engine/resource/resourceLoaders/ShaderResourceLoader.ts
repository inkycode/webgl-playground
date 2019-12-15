import { ResourceLoader } from '../ResourceLoader'

export class ShaderResourceLoader extends ResourceLoader {

    constructor () {
        super([
            'vert',
            'frag'
        ])
    }

    async load (url: string): Promise<string> {
        console.log('Loading resource ', url)
        return await this.loadTextFile(url)
    }

    private loadTextFile = (request: RequestInfo): Promise<any> => {
        return new Promise(resolve => {
            fetch(request)
                .then(response => response.text())
                .then(body => {
                    resolve(body);
                });
        })
    }
}
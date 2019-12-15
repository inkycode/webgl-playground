import {
    Game,
    
    Renderer,
    
    FixedTimestepTimer,

    ResourcePool,
    ResourceLoader,
    ShaderResourceLoader
} from '../engine/Engine'

export class MyGame extends Game {
    private resourcePool: ResourcePool

    async run () {
        super.run()
    }

    async startup () {
        const canvas: HTMLCanvasElement = this.Document.createElement('canvas')
        canvas.width = 100
        canvas.height = 100

        this.Renderer = new Renderer(canvas)
        this.Renderer.initialize()

        this.FrameTimer = new FixedTimestepTimer(60)

        this.resourcePool = new ResourcePool()
        this.resourcePool.registerResourceLoader(ShaderResourceLoader)
        await this.resourcePool.loadResource('/content/resources/shaders/basic/main.vert')
        console.log(await this.resourcePool.getResource('/content/resources/shaders/basic/main.vert'))

        this.Document.body.appendChild(canvas)
    }

    async shutdown () {

    }

    update (timestep: number) {

    }

    render () {
        this.Renderer.clear()
    }
}
import { Renderer } from '../graphics/Renderer'
import { FixedTimestepTimer } from '../utility/FixedTimestepTimer'

export abstract class Game {
    private renderer: Renderer

    private frameTimer: FixedTimestepTimer

    private title: string

    private document: Document

    constructor (document: Document) {
        this.document = document
    }

    abstract startup (): any

    abstract shutdown (): any

    abstract update (timestep: number): any

    abstract render (): any

    async run () {
        await this.startup()

        this.frameTimer.start()
    }

    set Title (title: string) {
        this.title = title
    }

    get Title (): string {
        return this.title
    }

    set FrameTimer (frameTimer: FixedTimestepTimer) {
        this.frameTimer = frameTimer

        this.frameTimer.onStep = this.update.bind(this)
        this.frameTimer.onTick = this.render.bind(this)
    }

    get FrameTimer (): FixedTimestepTimer {
        return this.frameTimer
    }

    set Renderer (renderer: Renderer) {
        this.renderer = renderer
    }

    get Renderer (): Renderer {
        return this.renderer
    }

    get Document (): Document {
        return this.document
    }
}
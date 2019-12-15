export class FixedTimestepTimer {
    private timestep: number
    private lastFrameTimeInMS: number
    private deltaTime: number

    onStep: (timestepInMS: number) => void 
    onTick: (timestamp: number) => void

    constructor (desiredFPS: number) {
        this.timestep = 1000 / desiredFPS
        this.lastFrameTimeInMS = 0
        this.deltaTime = 0

        this.onStep = null
        this.onTick = null
    }

    start () {
        this.lastFrameTimeInMS = 0
        this.deltaTime = 0

        this.tick(0)
    }

    tick (timestamp: number) {
        this.deltaTime += timestamp - this.lastFrameTimeInMS
        this.lastFrameTimeInMS = timestamp

        while (this.deltaTime >= this.timestep) {
            if (this.onStep !== null) this.onStep(this.timestep)
            this.deltaTime -= this.timestep
        }
        
        if (this.onTick !== null) this.onTick(timestamp)

        requestAnimationFrame(this.tick.bind(this))
    }
}
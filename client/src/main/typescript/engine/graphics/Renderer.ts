export class Renderer {
    private canvas: HTMLCanvasElement
    private gl: WebGL2RenderingContext | null

    constructor (canvas: HTMLCanvasElement) {
        this.canvas = canvas
    }

    initialize () {
        this.gl = this.canvas.getContext('webgl2', { antialias: false })

        if (this.gl === null)  {
            // TODO: error handling
        }

        this.gl.clearColor(0.7, 0.1, 0.2, 1.0)
    }

    clear () {
        this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT)
    }

    get Canvas (): HTMLCanvasElement {
        return this.canvas
    }
}
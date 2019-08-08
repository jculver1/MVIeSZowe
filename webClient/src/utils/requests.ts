import axios from 'axios';

export class PeriodicRequest {
    private currentRequest: any;
    private stopped: boolean;
    private url: string;
    private params: any;
    private callback: any;
    private delay: number;

    constructor(url: string, params: any, delay: number, callback: any) {
        this.stop.bind(this);
        this._runner.bind(this);

        this.currentRequest = null;
        this.stopped = true;

        this.url = url;
        this.params = params;
        this.delay = delay;
        this.callback = callback;
    }

    public start() {
        if (this.stopped) {
            this.stopped = false;
            setInterval(() => this._runner(), this.delay);
        }
    }

    public stop() {
        if (!this.stopped) {
            this.stopped = true;
            clearTimeout(this.currentRequest);
            this.currentRequest = null;
        }
    }

    private _runner() {
        axios
            .get(this.url, this.params)
            .then((response) => {
                const shouldStop = this.callback(response);
                if (shouldStop) {
                    this.stop();
                }
            })
            .catch((error) => {
                console.log(error);
                this.stop();
            });
    }
}

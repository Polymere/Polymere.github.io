import { WebViewer } from '@rerun-io/web-viewer';

export class RerunViewerComponent {
    constructor() {
        this.viewer = new WebViewer();
        this.viewer.start();
    }
    }
// Type definitions for react-native-background-downloader 2.3
// Project: https://github.com/EkoLabs/react-native-background-downloader#readme
// Definitions by: avidmouse <https://github.com/avidmouse>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module 'react-native-background-downloader' {
  export enum Network {
    ALL,
    WIFI_ONLY,
  }
  export enum Priority {
    LOW = -1,
    NORMAL,
    HIGH,
  }

  export interface DownloadOptions {
    id: string;
    url: string;
    destination: string;
    headers?: { [key: string]: string };
    network?: Network;
    priority?: Priority;
  }

  export interface DownloadTask {
    id: string;
    state: 'PENDING' | 'DOWNLOADING' | 'DONE' | 'FAILED' | 'PAUSED' | 'STOPPED';
    percent: number;
    bytesWritten: number;
    totalBytes: number;
    begin(handler?: (expectedBytes: number) => void): DownloadTask;
    progress(
      handler: (
        percent: number,
        bytesWritten: number,
        totalBytes: number,
      ) => void,
    ): DownloadTask;
    done(handler: () => void): DownloadTask;
    error(handler: (error: string, errorCode: string) => void): DownloadTask;
    pause(): void;
    resume(): void;
    stop(): void;
  }

  export function download(options: DownloadOptions): DownloadTask;

  export const directories: {
    documents: string;
  };

  export function checkForExistingDownloads(): Promise<DownloadTask[]>;

  export function setHeaders(headers: { [key: string]: string }): void;
}


interface Config {
    token?: string;
    debug?: boolean;

    modules?: {
        ClientTracker?: ClientTrackerConfig;
    };
}

interface ClientTrackerConfig {
    channel: string;
}
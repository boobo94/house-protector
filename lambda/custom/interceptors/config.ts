
export interface Config {
    version: string;
    dynamoDbTableName: string;
}

export enum EnvironmentTypes {
    Development = "dev",
    Production = "prod",
}

function Config(): Config {
    const env = process.env.ENV as EnvironmentTypes;
    if (env) {
        switch (env) {
            case EnvironmentTypes.Production:
                return {
                    version: "0.11",
                    dynamoDbTableName: "house-protector",
                };
            default:
                return {
                    version: "0.11",
                    dynamoDbTableName: "house-protector-dev",
                };
        }
    }
    throw new Error("ENV environment variable not set");
}

export const config = Config()

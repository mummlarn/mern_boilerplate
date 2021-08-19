import { MikroOrm } from "@mikro-orm/core";

const main = async () => {
    const orm = await MikroOrm.init({
        entities: [],
        dbName: "test",
        type: "postgresql",

    });
};

main();
import { Container } from "inversify";
import { Ninja } from "./service/ninja.ts";
import { Katana } from "./service/katana.ts";

const getAppModule = (): Container => {
    const container: Container = new Container();

    container.bind(Ninja).toSelf();
    container.bind(Katana).toSelf();

    return container;
}

export { getAppModule }
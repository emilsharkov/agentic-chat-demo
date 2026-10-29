import { Container } from "inversify";
import { Ninja } from "./service/ninja.ts";
import { Katana } from "./service/katana.ts";
import { TestController } from "./controller/test-controller.ts";

const getAppModule = (): Container => {
    const container: Container = new Container();

    container.bind(Ninja).toSelf();
    container.bind(Katana).toSelf();
    container.bind(TestController).toSelf();

    return container;
}

export { getAppModule }
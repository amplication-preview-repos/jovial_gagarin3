import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { ParsedContentList } from "./parsedContent/ParsedContentList";
import { ParsedContentCreate } from "./parsedContent/ParsedContentCreate";
import { ParsedContentEdit } from "./parsedContent/ParsedContentEdit";
import { ParsedContentShow } from "./parsedContent/ParsedContentShow";
import { ProjectList } from "./project/ProjectList";
import { ProjectCreate } from "./project/ProjectCreate";
import { ProjectEdit } from "./project/ProjectEdit";
import { ProjectShow } from "./project/ProjectShow";
import { LinkList } from "./link/LinkList";
import { LinkCreate } from "./link/LinkCreate";
import { LinkEdit } from "./link/LinkEdit";
import { LinkShow } from "./link/LinkShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"PageParserService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="ParsedContent"
          list={ParsedContentList}
          edit={ParsedContentEdit}
          create={ParsedContentCreate}
          show={ParsedContentShow}
        />
        <Resource
          name="Project"
          list={ProjectList}
          edit={ProjectEdit}
          create={ProjectCreate}
          show={ProjectShow}
        />
        <Resource
          name="Link"
          list={LinkList}
          edit={LinkEdit}
          create={LinkCreate}
          show={LinkShow}
        />
      </Admin>
    </div>
  );
};

export default App;

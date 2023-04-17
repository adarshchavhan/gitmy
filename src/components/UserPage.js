import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Info from "./Info";
import Repo from "./Repo";
import Error from "./Error";

export default function UserPage() {
  const { param } = useParams();
  const [Found, setFound] = useState(false);
  const [NotFound, setNotFound] = useState(false);
  const [data, setData] = useState();

  useEffect(() => {
    document.title = `Gitmy - ${param}`;

    axios(`https://api.github.com/users/${param}`)
      .then((response) => {
        setFound(true);
        setData(response.data);
      })
      .catch((err) => {
        setNotFound(true);
        console.clear();
      });
  }, [param]);

  return (
    <div>
      {Found && (
        <>
          <Info data={data} />
          <Repo data={data} />
        </>
      )}

      {NotFound && <Error />}
    </div>
  );
}

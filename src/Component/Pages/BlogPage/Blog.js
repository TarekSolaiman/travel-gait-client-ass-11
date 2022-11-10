import React from "react";
import useTitle from "../../../hooks/useTitle";

const Blog = () => {
  useTitle("Blog");
  return (
    <div>
      <h1 className="text-3xl lg:text-5xl font-bold my-20">
        Some Questions and Answer
      </h1>
      <div className="text-start w-4/5 mx-auto my-10">
        <div className="my-10 bg-gray-100 rounded-xl p-3">
          <h1 className="text-2xl font-semibold my-10">
            Difference between SQL and NoSQL
          </h1>
          <p className="text-lg font-semibold my-5">
            SQL is the programming language used to interface with relational
            databases. Relational databases model data as records in rows and
            tables with logical links between them. NoSQL is a class of DBMs
            that are non-relational and generally do not use SQL.
          </p>
        </div>
        <div className="my-10 bg-gray-100 rounded-xl p-3">
          <h1 className="text-2xl font-semibold my-10">
            What is JWT, and how does it work?
          </h1>
          <p className="text-lg font-semibold my-5">
            JWT, or JSON Web Token, is an open standard used to share security
            information between two parties — a client and a server. Each JWT
            contains encoded JSON objects, including a set of claims. JWTs are
            signed using a cryptographic algorithm to ensure that the claims
            cannot be altered after the token is issued
          </p>
          <p className="text-lg font-semibold my-5">
            JWTs differ from other web tokens in that they contain a set of
            claims. Claims are used to transmit information between two parties.
            What these claims are depends on the use case at hand. For example,
            a claim may assert who issued the token, how long it is valid for,
            or what permissions the client has been granted.
          </p>
        </div>
        <div className="my-10 bg-gray-100 rounded-xl p-3">
          <h1 className="text-2xl font-semibold my-10">
            What is the difference between javascript and NodeJS?
          </h1>
          <p className="text-lg font-semibold my-5">
            Javascript is a Scripting language. It is mostly abbreviated as JS.
            It can be said that Javascript is the updated version of the ECMA
            script. Javascript is a high-level programming language that uses
            the concept of Oops but it is based on prototype inheritance.{" "}
          </p>
          <p className="text-lg font-semibold my-5">
            NodeJS is a cross-platform and opensource Javascript runtime
            environment that allows the javascript to be run on the server-side.
            Nodejs allows Javascript code to run outside the browser. Nodejs
            comes with a lot of modules and mostly used in web development.
          </p>
        </div>
        <div className="my-10 bg-gray-100 rounded-xl p-3">
          <h1 className="text-2xl font-semibold my-10">
            How does NodeJS handle multiple requests at the same time?
          </h1>
          <p className="text-lg font-semibold my-5">
            How NodeJS handle multiple client requests? NodeJS receives multiple
            client requests and places them into EventQueue. NodeJS is built
            with the concept of event-driven architecture. NodeJS has its own
            EventLoop which is an infinite loop that receives requests and
            processes them
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;

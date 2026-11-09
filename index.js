var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// src/index.ts
var index_default = {
  async fetch(request) {
    async function MethodNotAllowed(request2) {
      return new Response(`Method ${request2.method} not allowed.`, {
        status: 405,
        headers: {
          Allow: "GET"
        }
      });
    }
    __name(MethodNotAllowed, "MethodNotAllowed");
    if (request.method !== "GET") return MethodNotAllowed(request);
    return fetch(`https://google.com`);
  }
};
export {
  index_default as default
};
//# sourceMappingURL=index.js.map

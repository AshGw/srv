import { scopesSetter } from "./scopes";

export class setScopes {
    public static forServer = class Server {
      public static setAccess = class Access {
        public static toAdmin = class Admin {
          static makeObject() {
            return scopesSetter('server', { access: 'admin' });
          }
        };
        public static toNonAdmin = class NonAdmin {
          static makeObject() {
            return scopesSetter('server', { access: 'non-admin' });
          }
        };
      };
    };
  
    public static forClient = class Client {
      public static setPlan = class Plan {
        public static toFree = class Free {
          static makeObject() {
            return scopesSetter('client', { plan: 'free' });
          }
        };
        public static toHobby = class Hobby {
          static makeObject() {
            return scopesSetter('client', { plan: 'hobby' });
          }
        };
        public static toPro = class Pro {
          static makeObject() {
            return scopesSetter('client', { plan: 'pro' });
          }
        };
      };
    };
  }

/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model ContactInquiry
 * 
 */
export type ContactInquiry = $Result.DefaultSelection<Prisma.$ContactInquiryPayload>
/**
 * Model AuditRequest
 * 
 */
export type AuditRequest = $Result.DefaultSelection<Prisma.$AuditRequestPayload>
/**
 * Model PageContent
 * 
 */
export type PageContent = $Result.DefaultSelection<Prisma.$PageContentPayload>
/**
 * Model Project
 * 
 */
export type Project = $Result.DefaultSelection<Prisma.$ProjectPayload>
/**
 * Model Service
 * 
 */
export type Service = $Result.DefaultSelection<Prisma.$ServicePayload>
/**
 * Model SliderContent
 * 
 */
export type SliderContent = $Result.DefaultSelection<Prisma.$SliderContentPayload>
/**
 * Model Admin
 * 
 */
export type Admin = $Result.DefaultSelection<Prisma.$AdminPayload>
/**
 * Model SiteVisit
 * 
 */
export type SiteVisit = $Result.DefaultSelection<Prisma.$SiteVisitPayload>
/**
 * Model BlogCategory
 * 
 */
export type BlogCategory = $Result.DefaultSelection<Prisma.$BlogCategoryPayload>
/**
 * Model BlogSubCategory
 * 
 */
export type BlogSubCategory = $Result.DefaultSelection<Prisma.$BlogSubCategoryPayload>
/**
 * Model Blog
 * 
 */
export type Blog = $Result.DefaultSelection<Prisma.$BlogPayload>
/**
 * Model BlogContentBlock
 * 
 */
export type BlogContentBlock = $Result.DefaultSelection<Prisma.$BlogContentBlockPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more ContactInquiries
 * const contactInquiries = await prisma.contactInquiry.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more ContactInquiries
   * const contactInquiries = await prisma.contactInquiry.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.contactInquiry`: Exposes CRUD operations for the **ContactInquiry** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ContactInquiries
    * const contactInquiries = await prisma.contactInquiry.findMany()
    * ```
    */
  get contactInquiry(): Prisma.ContactInquiryDelegate<ExtArgs>;

  /**
   * `prisma.auditRequest`: Exposes CRUD operations for the **AuditRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuditRequests
    * const auditRequests = await prisma.auditRequest.findMany()
    * ```
    */
  get auditRequest(): Prisma.AuditRequestDelegate<ExtArgs>;

  /**
   * `prisma.pageContent`: Exposes CRUD operations for the **PageContent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PageContents
    * const pageContents = await prisma.pageContent.findMany()
    * ```
    */
  get pageContent(): Prisma.PageContentDelegate<ExtArgs>;

  /**
   * `prisma.project`: Exposes CRUD operations for the **Project** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.project.findMany()
    * ```
    */
  get project(): Prisma.ProjectDelegate<ExtArgs>;

  /**
   * `prisma.service`: Exposes CRUD operations for the **Service** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Services
    * const services = await prisma.service.findMany()
    * ```
    */
  get service(): Prisma.ServiceDelegate<ExtArgs>;

  /**
   * `prisma.sliderContent`: Exposes CRUD operations for the **SliderContent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SliderContents
    * const sliderContents = await prisma.sliderContent.findMany()
    * ```
    */
  get sliderContent(): Prisma.SliderContentDelegate<ExtArgs>;

  /**
   * `prisma.admin`: Exposes CRUD operations for the **Admin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admin.findMany()
    * ```
    */
  get admin(): Prisma.AdminDelegate<ExtArgs>;

  /**
   * `prisma.siteVisit`: Exposes CRUD operations for the **SiteVisit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SiteVisits
    * const siteVisits = await prisma.siteVisit.findMany()
    * ```
    */
  get siteVisit(): Prisma.SiteVisitDelegate<ExtArgs>;

  /**
   * `prisma.blogCategory`: Exposes CRUD operations for the **BlogCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BlogCategories
    * const blogCategories = await prisma.blogCategory.findMany()
    * ```
    */
  get blogCategory(): Prisma.BlogCategoryDelegate<ExtArgs>;

  /**
   * `prisma.blogSubCategory`: Exposes CRUD operations for the **BlogSubCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BlogSubCategories
    * const blogSubCategories = await prisma.blogSubCategory.findMany()
    * ```
    */
  get blogSubCategory(): Prisma.BlogSubCategoryDelegate<ExtArgs>;

  /**
   * `prisma.blog`: Exposes CRUD operations for the **Blog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Blogs
    * const blogs = await prisma.blog.findMany()
    * ```
    */
  get blog(): Prisma.BlogDelegate<ExtArgs>;

  /**
   * `prisma.blogContentBlock`: Exposes CRUD operations for the **BlogContentBlock** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BlogContentBlocks
    * const blogContentBlocks = await prisma.blogContentBlock.findMany()
    * ```
    */
  get blogContentBlock(): Prisma.BlogContentBlockDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    ContactInquiry: 'ContactInquiry',
    AuditRequest: 'AuditRequest',
    PageContent: 'PageContent',
    Project: 'Project',
    Service: 'Service',
    SliderContent: 'SliderContent',
    Admin: 'Admin',
    SiteVisit: 'SiteVisit',
    BlogCategory: 'BlogCategory',
    BlogSubCategory: 'BlogSubCategory',
    Blog: 'Blog',
    BlogContentBlock: 'BlogContentBlock'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "contactInquiry" | "auditRequest" | "pageContent" | "project" | "service" | "sliderContent" | "admin" | "siteVisit" | "blogCategory" | "blogSubCategory" | "blog" | "blogContentBlock"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      ContactInquiry: {
        payload: Prisma.$ContactInquiryPayload<ExtArgs>
        fields: Prisma.ContactInquiryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContactInquiryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactInquiryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContactInquiryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactInquiryPayload>
          }
          findFirst: {
            args: Prisma.ContactInquiryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactInquiryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContactInquiryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactInquiryPayload>
          }
          findMany: {
            args: Prisma.ContactInquiryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactInquiryPayload>[]
          }
          create: {
            args: Prisma.ContactInquiryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactInquiryPayload>
          }
          createMany: {
            args: Prisma.ContactInquiryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContactInquiryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactInquiryPayload>[]
          }
          delete: {
            args: Prisma.ContactInquiryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactInquiryPayload>
          }
          update: {
            args: Prisma.ContactInquiryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactInquiryPayload>
          }
          deleteMany: {
            args: Prisma.ContactInquiryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContactInquiryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ContactInquiryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactInquiryPayload>
          }
          aggregate: {
            args: Prisma.ContactInquiryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContactInquiry>
          }
          groupBy: {
            args: Prisma.ContactInquiryGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContactInquiryGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContactInquiryCountArgs<ExtArgs>
            result: $Utils.Optional<ContactInquiryCountAggregateOutputType> | number
          }
        }
      }
      AuditRequest: {
        payload: Prisma.$AuditRequestPayload<ExtArgs>
        fields: Prisma.AuditRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuditRequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuditRequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditRequestPayload>
          }
          findFirst: {
            args: Prisma.AuditRequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuditRequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditRequestPayload>
          }
          findMany: {
            args: Prisma.AuditRequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditRequestPayload>[]
          }
          create: {
            args: Prisma.AuditRequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditRequestPayload>
          }
          createMany: {
            args: Prisma.AuditRequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuditRequestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditRequestPayload>[]
          }
          delete: {
            args: Prisma.AuditRequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditRequestPayload>
          }
          update: {
            args: Prisma.AuditRequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditRequestPayload>
          }
          deleteMany: {
            args: Prisma.AuditRequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuditRequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AuditRequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditRequestPayload>
          }
          aggregate: {
            args: Prisma.AuditRequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuditRequest>
          }
          groupBy: {
            args: Prisma.AuditRequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuditRequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuditRequestCountArgs<ExtArgs>
            result: $Utils.Optional<AuditRequestCountAggregateOutputType> | number
          }
        }
      }
      PageContent: {
        payload: Prisma.$PageContentPayload<ExtArgs>
        fields: Prisma.PageContentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PageContentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageContentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PageContentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageContentPayload>
          }
          findFirst: {
            args: Prisma.PageContentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageContentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PageContentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageContentPayload>
          }
          findMany: {
            args: Prisma.PageContentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageContentPayload>[]
          }
          create: {
            args: Prisma.PageContentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageContentPayload>
          }
          createMany: {
            args: Prisma.PageContentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PageContentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageContentPayload>[]
          }
          delete: {
            args: Prisma.PageContentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageContentPayload>
          }
          update: {
            args: Prisma.PageContentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageContentPayload>
          }
          deleteMany: {
            args: Prisma.PageContentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PageContentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PageContentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageContentPayload>
          }
          aggregate: {
            args: Prisma.PageContentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePageContent>
          }
          groupBy: {
            args: Prisma.PageContentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PageContentGroupByOutputType>[]
          }
          count: {
            args: Prisma.PageContentCountArgs<ExtArgs>
            result: $Utils.Optional<PageContentCountAggregateOutputType> | number
          }
        }
      }
      Project: {
        payload: Prisma.$ProjectPayload<ExtArgs>
        fields: Prisma.ProjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findFirst: {
            args: Prisma.ProjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findMany: {
            args: Prisma.ProjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          create: {
            args: Prisma.ProjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          createMany: {
            args: Prisma.ProjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          delete: {
            args: Prisma.ProjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          update: {
            args: Prisma.ProjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          deleteMany: {
            args: Prisma.ProjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          aggregate: {
            args: Prisma.ProjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProject>
          }
          groupBy: {
            args: Prisma.ProjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectCountAggregateOutputType> | number
          }
        }
      }
      Service: {
        payload: Prisma.$ServicePayload<ExtArgs>
        fields: Prisma.ServiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServiceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServiceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          findFirst: {
            args: Prisma.ServiceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServiceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          findMany: {
            args: Prisma.ServiceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>[]
          }
          create: {
            args: Prisma.ServiceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          createMany: {
            args: Prisma.ServiceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ServiceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>[]
          }
          delete: {
            args: Prisma.ServiceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          update: {
            args: Prisma.ServiceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          deleteMany: {
            args: Prisma.ServiceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ServiceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ServiceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          aggregate: {
            args: Prisma.ServiceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateService>
          }
          groupBy: {
            args: Prisma.ServiceGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServiceGroupByOutputType>[]
          }
          count: {
            args: Prisma.ServiceCountArgs<ExtArgs>
            result: $Utils.Optional<ServiceCountAggregateOutputType> | number
          }
        }
      }
      SliderContent: {
        payload: Prisma.$SliderContentPayload<ExtArgs>
        fields: Prisma.SliderContentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SliderContentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SliderContentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SliderContentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SliderContentPayload>
          }
          findFirst: {
            args: Prisma.SliderContentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SliderContentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SliderContentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SliderContentPayload>
          }
          findMany: {
            args: Prisma.SliderContentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SliderContentPayload>[]
          }
          create: {
            args: Prisma.SliderContentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SliderContentPayload>
          }
          createMany: {
            args: Prisma.SliderContentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SliderContentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SliderContentPayload>[]
          }
          delete: {
            args: Prisma.SliderContentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SliderContentPayload>
          }
          update: {
            args: Prisma.SliderContentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SliderContentPayload>
          }
          deleteMany: {
            args: Prisma.SliderContentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SliderContentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SliderContentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SliderContentPayload>
          }
          aggregate: {
            args: Prisma.SliderContentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSliderContent>
          }
          groupBy: {
            args: Prisma.SliderContentGroupByArgs<ExtArgs>
            result: $Utils.Optional<SliderContentGroupByOutputType>[]
          }
          count: {
            args: Prisma.SliderContentCountArgs<ExtArgs>
            result: $Utils.Optional<SliderContentCountAggregateOutputType> | number
          }
        }
      }
      Admin: {
        payload: Prisma.$AdminPayload<ExtArgs>
        fields: Prisma.AdminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findFirst: {
            args: Prisma.AdminFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findMany: {
            args: Prisma.AdminFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          create: {
            args: Prisma.AdminCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          createMany: {
            args: Prisma.AdminCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdminCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          delete: {
            args: Prisma.AdminDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          update: {
            args: Prisma.AdminUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          deleteMany: {
            args: Prisma.AdminDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AdminUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          aggregate: {
            args: Prisma.AdminAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdmin>
          }
          groupBy: {
            args: Prisma.AdminGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminCountArgs<ExtArgs>
            result: $Utils.Optional<AdminCountAggregateOutputType> | number
          }
        }
      }
      SiteVisit: {
        payload: Prisma.$SiteVisitPayload<ExtArgs>
        fields: Prisma.SiteVisitFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SiteVisitFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteVisitPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SiteVisitFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteVisitPayload>
          }
          findFirst: {
            args: Prisma.SiteVisitFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteVisitPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SiteVisitFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteVisitPayload>
          }
          findMany: {
            args: Prisma.SiteVisitFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteVisitPayload>[]
          }
          create: {
            args: Prisma.SiteVisitCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteVisitPayload>
          }
          createMany: {
            args: Prisma.SiteVisitCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SiteVisitCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteVisitPayload>[]
          }
          delete: {
            args: Prisma.SiteVisitDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteVisitPayload>
          }
          update: {
            args: Prisma.SiteVisitUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteVisitPayload>
          }
          deleteMany: {
            args: Prisma.SiteVisitDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SiteVisitUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SiteVisitUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteVisitPayload>
          }
          aggregate: {
            args: Prisma.SiteVisitAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSiteVisit>
          }
          groupBy: {
            args: Prisma.SiteVisitGroupByArgs<ExtArgs>
            result: $Utils.Optional<SiteVisitGroupByOutputType>[]
          }
          count: {
            args: Prisma.SiteVisitCountArgs<ExtArgs>
            result: $Utils.Optional<SiteVisitCountAggregateOutputType> | number
          }
        }
      }
      BlogCategory: {
        payload: Prisma.$BlogCategoryPayload<ExtArgs>
        fields: Prisma.BlogCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BlogCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BlogCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogCategoryPayload>
          }
          findFirst: {
            args: Prisma.BlogCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BlogCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogCategoryPayload>
          }
          findMany: {
            args: Prisma.BlogCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogCategoryPayload>[]
          }
          create: {
            args: Prisma.BlogCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogCategoryPayload>
          }
          createMany: {
            args: Prisma.BlogCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BlogCategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogCategoryPayload>[]
          }
          delete: {
            args: Prisma.BlogCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogCategoryPayload>
          }
          update: {
            args: Prisma.BlogCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogCategoryPayload>
          }
          deleteMany: {
            args: Prisma.BlogCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BlogCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BlogCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogCategoryPayload>
          }
          aggregate: {
            args: Prisma.BlogCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBlogCategory>
          }
          groupBy: {
            args: Prisma.BlogCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<BlogCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.BlogCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<BlogCategoryCountAggregateOutputType> | number
          }
        }
      }
      BlogSubCategory: {
        payload: Prisma.$BlogSubCategoryPayload<ExtArgs>
        fields: Prisma.BlogSubCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BlogSubCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogSubCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BlogSubCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogSubCategoryPayload>
          }
          findFirst: {
            args: Prisma.BlogSubCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogSubCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BlogSubCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogSubCategoryPayload>
          }
          findMany: {
            args: Prisma.BlogSubCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogSubCategoryPayload>[]
          }
          create: {
            args: Prisma.BlogSubCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogSubCategoryPayload>
          }
          createMany: {
            args: Prisma.BlogSubCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BlogSubCategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogSubCategoryPayload>[]
          }
          delete: {
            args: Prisma.BlogSubCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogSubCategoryPayload>
          }
          update: {
            args: Prisma.BlogSubCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogSubCategoryPayload>
          }
          deleteMany: {
            args: Prisma.BlogSubCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BlogSubCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BlogSubCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogSubCategoryPayload>
          }
          aggregate: {
            args: Prisma.BlogSubCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBlogSubCategory>
          }
          groupBy: {
            args: Prisma.BlogSubCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<BlogSubCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.BlogSubCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<BlogSubCategoryCountAggregateOutputType> | number
          }
        }
      }
      Blog: {
        payload: Prisma.$BlogPayload<ExtArgs>
        fields: Prisma.BlogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BlogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BlogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>
          }
          findFirst: {
            args: Prisma.BlogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BlogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>
          }
          findMany: {
            args: Prisma.BlogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>[]
          }
          create: {
            args: Prisma.BlogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>
          }
          createMany: {
            args: Prisma.BlogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BlogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>[]
          }
          delete: {
            args: Prisma.BlogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>
          }
          update: {
            args: Prisma.BlogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>
          }
          deleteMany: {
            args: Prisma.BlogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BlogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BlogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>
          }
          aggregate: {
            args: Prisma.BlogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBlog>
          }
          groupBy: {
            args: Prisma.BlogGroupByArgs<ExtArgs>
            result: $Utils.Optional<BlogGroupByOutputType>[]
          }
          count: {
            args: Prisma.BlogCountArgs<ExtArgs>
            result: $Utils.Optional<BlogCountAggregateOutputType> | number
          }
        }
      }
      BlogContentBlock: {
        payload: Prisma.$BlogContentBlockPayload<ExtArgs>
        fields: Prisma.BlogContentBlockFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BlogContentBlockFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogContentBlockPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BlogContentBlockFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogContentBlockPayload>
          }
          findFirst: {
            args: Prisma.BlogContentBlockFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogContentBlockPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BlogContentBlockFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogContentBlockPayload>
          }
          findMany: {
            args: Prisma.BlogContentBlockFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogContentBlockPayload>[]
          }
          create: {
            args: Prisma.BlogContentBlockCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogContentBlockPayload>
          }
          createMany: {
            args: Prisma.BlogContentBlockCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BlogContentBlockCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogContentBlockPayload>[]
          }
          delete: {
            args: Prisma.BlogContentBlockDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogContentBlockPayload>
          }
          update: {
            args: Prisma.BlogContentBlockUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogContentBlockPayload>
          }
          deleteMany: {
            args: Prisma.BlogContentBlockDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BlogContentBlockUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BlogContentBlockUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogContentBlockPayload>
          }
          aggregate: {
            args: Prisma.BlogContentBlockAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBlogContentBlock>
          }
          groupBy: {
            args: Prisma.BlogContentBlockGroupByArgs<ExtArgs>
            result: $Utils.Optional<BlogContentBlockGroupByOutputType>[]
          }
          count: {
            args: Prisma.BlogContentBlockCountArgs<ExtArgs>
            result: $Utils.Optional<BlogContentBlockCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ServiceCountOutputType
   */

  export type ServiceCountOutputType = {
    projects: number
  }

  export type ServiceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projects?: boolean | ServiceCountOutputTypeCountProjectsArgs
  }

  // Custom InputTypes
  /**
   * ServiceCountOutputType without action
   */
  export type ServiceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceCountOutputType
     */
    select?: ServiceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ServiceCountOutputType without action
   */
  export type ServiceCountOutputTypeCountProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
  }


  /**
   * Count Type BlogCategoryCountOutputType
   */

  export type BlogCategoryCountOutputType = {
    subcategories: number
    blogs: number
  }

  export type BlogCategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subcategories?: boolean | BlogCategoryCountOutputTypeCountSubcategoriesArgs
    blogs?: boolean | BlogCategoryCountOutputTypeCountBlogsArgs
  }

  // Custom InputTypes
  /**
   * BlogCategoryCountOutputType without action
   */
  export type BlogCategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogCategoryCountOutputType
     */
    select?: BlogCategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BlogCategoryCountOutputType without action
   */
  export type BlogCategoryCountOutputTypeCountSubcategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlogSubCategoryWhereInput
  }

  /**
   * BlogCategoryCountOutputType without action
   */
  export type BlogCategoryCountOutputTypeCountBlogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlogWhereInput
  }


  /**
   * Count Type BlogSubCategoryCountOutputType
   */

  export type BlogSubCategoryCountOutputType = {
    blogs: number
  }

  export type BlogSubCategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    blogs?: boolean | BlogSubCategoryCountOutputTypeCountBlogsArgs
  }

  // Custom InputTypes
  /**
   * BlogSubCategoryCountOutputType without action
   */
  export type BlogSubCategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogSubCategoryCountOutputType
     */
    select?: BlogSubCategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BlogSubCategoryCountOutputType without action
   */
  export type BlogSubCategoryCountOutputTypeCountBlogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlogWhereInput
  }


  /**
   * Count Type BlogCountOutputType
   */

  export type BlogCountOutputType = {
    contentBlocks: number
  }

  export type BlogCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contentBlocks?: boolean | BlogCountOutputTypeCountContentBlocksArgs
  }

  // Custom InputTypes
  /**
   * BlogCountOutputType without action
   */
  export type BlogCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogCountOutputType
     */
    select?: BlogCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BlogCountOutputType without action
   */
  export type BlogCountOutputTypeCountContentBlocksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlogContentBlockWhereInput
  }


  /**
   * Models
   */

  /**
   * Model ContactInquiry
   */

  export type AggregateContactInquiry = {
    _count: ContactInquiryCountAggregateOutputType | null
    _min: ContactInquiryMinAggregateOutputType | null
    _max: ContactInquiryMaxAggregateOutputType | null
  }

  export type ContactInquiryMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    company: string | null
    message: string | null
    status: string | null
    createdAt: Date | null
  }

  export type ContactInquiryMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    company: string | null
    message: string | null
    status: string | null
    createdAt: Date | null
  }

  export type ContactInquiryCountAggregateOutputType = {
    id: number
    name: number
    email: number
    company: number
    message: number
    status: number
    createdAt: number
    _all: number
  }


  export type ContactInquiryMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    company?: true
    message?: true
    status?: true
    createdAt?: true
  }

  export type ContactInquiryMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    company?: true
    message?: true
    status?: true
    createdAt?: true
  }

  export type ContactInquiryCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    company?: true
    message?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type ContactInquiryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContactInquiry to aggregate.
     */
    where?: ContactInquiryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactInquiries to fetch.
     */
    orderBy?: ContactInquiryOrderByWithRelationInput | ContactInquiryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContactInquiryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactInquiries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactInquiries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ContactInquiries
    **/
    _count?: true | ContactInquiryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContactInquiryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContactInquiryMaxAggregateInputType
  }

  export type GetContactInquiryAggregateType<T extends ContactInquiryAggregateArgs> = {
        [P in keyof T & keyof AggregateContactInquiry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContactInquiry[P]>
      : GetScalarType<T[P], AggregateContactInquiry[P]>
  }




  export type ContactInquiryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContactInquiryWhereInput
    orderBy?: ContactInquiryOrderByWithAggregationInput | ContactInquiryOrderByWithAggregationInput[]
    by: ContactInquiryScalarFieldEnum[] | ContactInquiryScalarFieldEnum
    having?: ContactInquiryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContactInquiryCountAggregateInputType | true
    _min?: ContactInquiryMinAggregateInputType
    _max?: ContactInquiryMaxAggregateInputType
  }

  export type ContactInquiryGroupByOutputType = {
    id: string
    name: string
    email: string
    company: string | null
    message: string
    status: string
    createdAt: Date
    _count: ContactInquiryCountAggregateOutputType | null
    _min: ContactInquiryMinAggregateOutputType | null
    _max: ContactInquiryMaxAggregateOutputType | null
  }

  type GetContactInquiryGroupByPayload<T extends ContactInquiryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContactInquiryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContactInquiryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContactInquiryGroupByOutputType[P]>
            : GetScalarType<T[P], ContactInquiryGroupByOutputType[P]>
        }
      >
    >


  export type ContactInquirySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    company?: boolean
    message?: boolean
    status?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["contactInquiry"]>

  export type ContactInquirySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    company?: boolean
    message?: boolean
    status?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["contactInquiry"]>

  export type ContactInquirySelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    company?: boolean
    message?: boolean
    status?: boolean
    createdAt?: boolean
  }


  export type $ContactInquiryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ContactInquiry"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      company: string | null
      message: string
      status: string
      createdAt: Date
    }, ExtArgs["result"]["contactInquiry"]>
    composites: {}
  }

  type ContactInquiryGetPayload<S extends boolean | null | undefined | ContactInquiryDefaultArgs> = $Result.GetResult<Prisma.$ContactInquiryPayload, S>

  type ContactInquiryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ContactInquiryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ContactInquiryCountAggregateInputType | true
    }

  export interface ContactInquiryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ContactInquiry'], meta: { name: 'ContactInquiry' } }
    /**
     * Find zero or one ContactInquiry that matches the filter.
     * @param {ContactInquiryFindUniqueArgs} args - Arguments to find a ContactInquiry
     * @example
     * // Get one ContactInquiry
     * const contactInquiry = await prisma.contactInquiry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContactInquiryFindUniqueArgs>(args: SelectSubset<T, ContactInquiryFindUniqueArgs<ExtArgs>>): Prisma__ContactInquiryClient<$Result.GetResult<Prisma.$ContactInquiryPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ContactInquiry that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ContactInquiryFindUniqueOrThrowArgs} args - Arguments to find a ContactInquiry
     * @example
     * // Get one ContactInquiry
     * const contactInquiry = await prisma.contactInquiry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContactInquiryFindUniqueOrThrowArgs>(args: SelectSubset<T, ContactInquiryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContactInquiryClient<$Result.GetResult<Prisma.$ContactInquiryPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ContactInquiry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactInquiryFindFirstArgs} args - Arguments to find a ContactInquiry
     * @example
     * // Get one ContactInquiry
     * const contactInquiry = await prisma.contactInquiry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContactInquiryFindFirstArgs>(args?: SelectSubset<T, ContactInquiryFindFirstArgs<ExtArgs>>): Prisma__ContactInquiryClient<$Result.GetResult<Prisma.$ContactInquiryPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ContactInquiry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactInquiryFindFirstOrThrowArgs} args - Arguments to find a ContactInquiry
     * @example
     * // Get one ContactInquiry
     * const contactInquiry = await prisma.contactInquiry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContactInquiryFindFirstOrThrowArgs>(args?: SelectSubset<T, ContactInquiryFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContactInquiryClient<$Result.GetResult<Prisma.$ContactInquiryPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ContactInquiries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactInquiryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ContactInquiries
     * const contactInquiries = await prisma.contactInquiry.findMany()
     * 
     * // Get first 10 ContactInquiries
     * const contactInquiries = await prisma.contactInquiry.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contactInquiryWithIdOnly = await prisma.contactInquiry.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContactInquiryFindManyArgs>(args?: SelectSubset<T, ContactInquiryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactInquiryPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ContactInquiry.
     * @param {ContactInquiryCreateArgs} args - Arguments to create a ContactInquiry.
     * @example
     * // Create one ContactInquiry
     * const ContactInquiry = await prisma.contactInquiry.create({
     *   data: {
     *     // ... data to create a ContactInquiry
     *   }
     * })
     * 
     */
    create<T extends ContactInquiryCreateArgs>(args: SelectSubset<T, ContactInquiryCreateArgs<ExtArgs>>): Prisma__ContactInquiryClient<$Result.GetResult<Prisma.$ContactInquiryPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ContactInquiries.
     * @param {ContactInquiryCreateManyArgs} args - Arguments to create many ContactInquiries.
     * @example
     * // Create many ContactInquiries
     * const contactInquiry = await prisma.contactInquiry.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContactInquiryCreateManyArgs>(args?: SelectSubset<T, ContactInquiryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ContactInquiries and returns the data saved in the database.
     * @param {ContactInquiryCreateManyAndReturnArgs} args - Arguments to create many ContactInquiries.
     * @example
     * // Create many ContactInquiries
     * const contactInquiry = await prisma.contactInquiry.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ContactInquiries and only return the `id`
     * const contactInquiryWithIdOnly = await prisma.contactInquiry.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContactInquiryCreateManyAndReturnArgs>(args?: SelectSubset<T, ContactInquiryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactInquiryPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ContactInquiry.
     * @param {ContactInquiryDeleteArgs} args - Arguments to delete one ContactInquiry.
     * @example
     * // Delete one ContactInquiry
     * const ContactInquiry = await prisma.contactInquiry.delete({
     *   where: {
     *     // ... filter to delete one ContactInquiry
     *   }
     * })
     * 
     */
    delete<T extends ContactInquiryDeleteArgs>(args: SelectSubset<T, ContactInquiryDeleteArgs<ExtArgs>>): Prisma__ContactInquiryClient<$Result.GetResult<Prisma.$ContactInquiryPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ContactInquiry.
     * @param {ContactInquiryUpdateArgs} args - Arguments to update one ContactInquiry.
     * @example
     * // Update one ContactInquiry
     * const contactInquiry = await prisma.contactInquiry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContactInquiryUpdateArgs>(args: SelectSubset<T, ContactInquiryUpdateArgs<ExtArgs>>): Prisma__ContactInquiryClient<$Result.GetResult<Prisma.$ContactInquiryPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ContactInquiries.
     * @param {ContactInquiryDeleteManyArgs} args - Arguments to filter ContactInquiries to delete.
     * @example
     * // Delete a few ContactInquiries
     * const { count } = await prisma.contactInquiry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContactInquiryDeleteManyArgs>(args?: SelectSubset<T, ContactInquiryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContactInquiries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactInquiryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ContactInquiries
     * const contactInquiry = await prisma.contactInquiry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContactInquiryUpdateManyArgs>(args: SelectSubset<T, ContactInquiryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ContactInquiry.
     * @param {ContactInquiryUpsertArgs} args - Arguments to update or create a ContactInquiry.
     * @example
     * // Update or create a ContactInquiry
     * const contactInquiry = await prisma.contactInquiry.upsert({
     *   create: {
     *     // ... data to create a ContactInquiry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ContactInquiry we want to update
     *   }
     * })
     */
    upsert<T extends ContactInquiryUpsertArgs>(args: SelectSubset<T, ContactInquiryUpsertArgs<ExtArgs>>): Prisma__ContactInquiryClient<$Result.GetResult<Prisma.$ContactInquiryPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ContactInquiries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactInquiryCountArgs} args - Arguments to filter ContactInquiries to count.
     * @example
     * // Count the number of ContactInquiries
     * const count = await prisma.contactInquiry.count({
     *   where: {
     *     // ... the filter for the ContactInquiries we want to count
     *   }
     * })
    **/
    count<T extends ContactInquiryCountArgs>(
      args?: Subset<T, ContactInquiryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContactInquiryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ContactInquiry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactInquiryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ContactInquiryAggregateArgs>(args: Subset<T, ContactInquiryAggregateArgs>): Prisma.PrismaPromise<GetContactInquiryAggregateType<T>>

    /**
     * Group by ContactInquiry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactInquiryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ContactInquiryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContactInquiryGroupByArgs['orderBy'] }
        : { orderBy?: ContactInquiryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ContactInquiryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContactInquiryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ContactInquiry model
   */
  readonly fields: ContactInquiryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ContactInquiry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContactInquiryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ContactInquiry model
   */ 
  interface ContactInquiryFieldRefs {
    readonly id: FieldRef<"ContactInquiry", 'String'>
    readonly name: FieldRef<"ContactInquiry", 'String'>
    readonly email: FieldRef<"ContactInquiry", 'String'>
    readonly company: FieldRef<"ContactInquiry", 'String'>
    readonly message: FieldRef<"ContactInquiry", 'String'>
    readonly status: FieldRef<"ContactInquiry", 'String'>
    readonly createdAt: FieldRef<"ContactInquiry", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ContactInquiry findUnique
   */
  export type ContactInquiryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactInquiry
     */
    select?: ContactInquirySelect<ExtArgs> | null
    /**
     * Filter, which ContactInquiry to fetch.
     */
    where: ContactInquiryWhereUniqueInput
  }

  /**
   * ContactInquiry findUniqueOrThrow
   */
  export type ContactInquiryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactInquiry
     */
    select?: ContactInquirySelect<ExtArgs> | null
    /**
     * Filter, which ContactInquiry to fetch.
     */
    where: ContactInquiryWhereUniqueInput
  }

  /**
   * ContactInquiry findFirst
   */
  export type ContactInquiryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactInquiry
     */
    select?: ContactInquirySelect<ExtArgs> | null
    /**
     * Filter, which ContactInquiry to fetch.
     */
    where?: ContactInquiryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactInquiries to fetch.
     */
    orderBy?: ContactInquiryOrderByWithRelationInput | ContactInquiryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContactInquiries.
     */
    cursor?: ContactInquiryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactInquiries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactInquiries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContactInquiries.
     */
    distinct?: ContactInquiryScalarFieldEnum | ContactInquiryScalarFieldEnum[]
  }

  /**
   * ContactInquiry findFirstOrThrow
   */
  export type ContactInquiryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactInquiry
     */
    select?: ContactInquirySelect<ExtArgs> | null
    /**
     * Filter, which ContactInquiry to fetch.
     */
    where?: ContactInquiryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactInquiries to fetch.
     */
    orderBy?: ContactInquiryOrderByWithRelationInput | ContactInquiryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContactInquiries.
     */
    cursor?: ContactInquiryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactInquiries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactInquiries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContactInquiries.
     */
    distinct?: ContactInquiryScalarFieldEnum | ContactInquiryScalarFieldEnum[]
  }

  /**
   * ContactInquiry findMany
   */
  export type ContactInquiryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactInquiry
     */
    select?: ContactInquirySelect<ExtArgs> | null
    /**
     * Filter, which ContactInquiries to fetch.
     */
    where?: ContactInquiryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactInquiries to fetch.
     */
    orderBy?: ContactInquiryOrderByWithRelationInput | ContactInquiryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ContactInquiries.
     */
    cursor?: ContactInquiryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactInquiries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactInquiries.
     */
    skip?: number
    distinct?: ContactInquiryScalarFieldEnum | ContactInquiryScalarFieldEnum[]
  }

  /**
   * ContactInquiry create
   */
  export type ContactInquiryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactInquiry
     */
    select?: ContactInquirySelect<ExtArgs> | null
    /**
     * The data needed to create a ContactInquiry.
     */
    data: XOR<ContactInquiryCreateInput, ContactInquiryUncheckedCreateInput>
  }

  /**
   * ContactInquiry createMany
   */
  export type ContactInquiryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ContactInquiries.
     */
    data: ContactInquiryCreateManyInput | ContactInquiryCreateManyInput[]
  }

  /**
   * ContactInquiry createManyAndReturn
   */
  export type ContactInquiryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactInquiry
     */
    select?: ContactInquirySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ContactInquiries.
     */
    data: ContactInquiryCreateManyInput | ContactInquiryCreateManyInput[]
  }

  /**
   * ContactInquiry update
   */
  export type ContactInquiryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactInquiry
     */
    select?: ContactInquirySelect<ExtArgs> | null
    /**
     * The data needed to update a ContactInquiry.
     */
    data: XOR<ContactInquiryUpdateInput, ContactInquiryUncheckedUpdateInput>
    /**
     * Choose, which ContactInquiry to update.
     */
    where: ContactInquiryWhereUniqueInput
  }

  /**
   * ContactInquiry updateMany
   */
  export type ContactInquiryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ContactInquiries.
     */
    data: XOR<ContactInquiryUpdateManyMutationInput, ContactInquiryUncheckedUpdateManyInput>
    /**
     * Filter which ContactInquiries to update
     */
    where?: ContactInquiryWhereInput
  }

  /**
   * ContactInquiry upsert
   */
  export type ContactInquiryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactInquiry
     */
    select?: ContactInquirySelect<ExtArgs> | null
    /**
     * The filter to search for the ContactInquiry to update in case it exists.
     */
    where: ContactInquiryWhereUniqueInput
    /**
     * In case the ContactInquiry found by the `where` argument doesn't exist, create a new ContactInquiry with this data.
     */
    create: XOR<ContactInquiryCreateInput, ContactInquiryUncheckedCreateInput>
    /**
     * In case the ContactInquiry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContactInquiryUpdateInput, ContactInquiryUncheckedUpdateInput>
  }

  /**
   * ContactInquiry delete
   */
  export type ContactInquiryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactInquiry
     */
    select?: ContactInquirySelect<ExtArgs> | null
    /**
     * Filter which ContactInquiry to delete.
     */
    where: ContactInquiryWhereUniqueInput
  }

  /**
   * ContactInquiry deleteMany
   */
  export type ContactInquiryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContactInquiries to delete
     */
    where?: ContactInquiryWhereInput
  }

  /**
   * ContactInquiry without action
   */
  export type ContactInquiryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactInquiry
     */
    select?: ContactInquirySelect<ExtArgs> | null
  }


  /**
   * Model AuditRequest
   */

  export type AggregateAuditRequest = {
    _count: AuditRequestCountAggregateOutputType | null
    _min: AuditRequestMinAggregateOutputType | null
    _max: AuditRequestMaxAggregateOutputType | null
  }

  export type AuditRequestMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    website: string | null
    report: string | null
    status: string | null
    scheduledDate: Date | null
    createdAt: Date | null
  }

  export type AuditRequestMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    website: string | null
    report: string | null
    status: string | null
    scheduledDate: Date | null
    createdAt: Date | null
  }

  export type AuditRequestCountAggregateOutputType = {
    id: number
    name: number
    email: number
    website: number
    report: number
    status: number
    scheduledDate: number
    createdAt: number
    _all: number
  }


  export type AuditRequestMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    website?: true
    report?: true
    status?: true
    scheduledDate?: true
    createdAt?: true
  }

  export type AuditRequestMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    website?: true
    report?: true
    status?: true
    scheduledDate?: true
    createdAt?: true
  }

  export type AuditRequestCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    website?: true
    report?: true
    status?: true
    scheduledDate?: true
    createdAt?: true
    _all?: true
  }

  export type AuditRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditRequest to aggregate.
     */
    where?: AuditRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditRequests to fetch.
     */
    orderBy?: AuditRequestOrderByWithRelationInput | AuditRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuditRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AuditRequests
    **/
    _count?: true | AuditRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuditRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuditRequestMaxAggregateInputType
  }

  export type GetAuditRequestAggregateType<T extends AuditRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateAuditRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuditRequest[P]>
      : GetScalarType<T[P], AggregateAuditRequest[P]>
  }




  export type AuditRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditRequestWhereInput
    orderBy?: AuditRequestOrderByWithAggregationInput | AuditRequestOrderByWithAggregationInput[]
    by: AuditRequestScalarFieldEnum[] | AuditRequestScalarFieldEnum
    having?: AuditRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuditRequestCountAggregateInputType | true
    _min?: AuditRequestMinAggregateInputType
    _max?: AuditRequestMaxAggregateInputType
  }

  export type AuditRequestGroupByOutputType = {
    id: string
    name: string
    email: string
    website: string
    report: string
    status: string
    scheduledDate: Date | null
    createdAt: Date
    _count: AuditRequestCountAggregateOutputType | null
    _min: AuditRequestMinAggregateOutputType | null
    _max: AuditRequestMaxAggregateOutputType | null
  }

  type GetAuditRequestGroupByPayload<T extends AuditRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuditRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuditRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuditRequestGroupByOutputType[P]>
            : GetScalarType<T[P], AuditRequestGroupByOutputType[P]>
        }
      >
    >


  export type AuditRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    website?: boolean
    report?: boolean
    status?: boolean
    scheduledDate?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["auditRequest"]>

  export type AuditRequestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    website?: boolean
    report?: boolean
    status?: boolean
    scheduledDate?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["auditRequest"]>

  export type AuditRequestSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    website?: boolean
    report?: boolean
    status?: boolean
    scheduledDate?: boolean
    createdAt?: boolean
  }


  export type $AuditRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AuditRequest"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      website: string
      report: string
      status: string
      scheduledDate: Date | null
      createdAt: Date
    }, ExtArgs["result"]["auditRequest"]>
    composites: {}
  }

  type AuditRequestGetPayload<S extends boolean | null | undefined | AuditRequestDefaultArgs> = $Result.GetResult<Prisma.$AuditRequestPayload, S>

  type AuditRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AuditRequestFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AuditRequestCountAggregateInputType | true
    }

  export interface AuditRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AuditRequest'], meta: { name: 'AuditRequest' } }
    /**
     * Find zero or one AuditRequest that matches the filter.
     * @param {AuditRequestFindUniqueArgs} args - Arguments to find a AuditRequest
     * @example
     * // Get one AuditRequest
     * const auditRequest = await prisma.auditRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuditRequestFindUniqueArgs>(args: SelectSubset<T, AuditRequestFindUniqueArgs<ExtArgs>>): Prisma__AuditRequestClient<$Result.GetResult<Prisma.$AuditRequestPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one AuditRequest that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AuditRequestFindUniqueOrThrowArgs} args - Arguments to find a AuditRequest
     * @example
     * // Get one AuditRequest
     * const auditRequest = await prisma.auditRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuditRequestFindUniqueOrThrowArgs>(args: SelectSubset<T, AuditRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuditRequestClient<$Result.GetResult<Prisma.$AuditRequestPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first AuditRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditRequestFindFirstArgs} args - Arguments to find a AuditRequest
     * @example
     * // Get one AuditRequest
     * const auditRequest = await prisma.auditRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuditRequestFindFirstArgs>(args?: SelectSubset<T, AuditRequestFindFirstArgs<ExtArgs>>): Prisma__AuditRequestClient<$Result.GetResult<Prisma.$AuditRequestPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first AuditRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditRequestFindFirstOrThrowArgs} args - Arguments to find a AuditRequest
     * @example
     * // Get one AuditRequest
     * const auditRequest = await prisma.auditRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuditRequestFindFirstOrThrowArgs>(args?: SelectSubset<T, AuditRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuditRequestClient<$Result.GetResult<Prisma.$AuditRequestPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more AuditRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuditRequests
     * const auditRequests = await prisma.auditRequest.findMany()
     * 
     * // Get first 10 AuditRequests
     * const auditRequests = await prisma.auditRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const auditRequestWithIdOnly = await prisma.auditRequest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuditRequestFindManyArgs>(args?: SelectSubset<T, AuditRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditRequestPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a AuditRequest.
     * @param {AuditRequestCreateArgs} args - Arguments to create a AuditRequest.
     * @example
     * // Create one AuditRequest
     * const AuditRequest = await prisma.auditRequest.create({
     *   data: {
     *     // ... data to create a AuditRequest
     *   }
     * })
     * 
     */
    create<T extends AuditRequestCreateArgs>(args: SelectSubset<T, AuditRequestCreateArgs<ExtArgs>>): Prisma__AuditRequestClient<$Result.GetResult<Prisma.$AuditRequestPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many AuditRequests.
     * @param {AuditRequestCreateManyArgs} args - Arguments to create many AuditRequests.
     * @example
     * // Create many AuditRequests
     * const auditRequest = await prisma.auditRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuditRequestCreateManyArgs>(args?: SelectSubset<T, AuditRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AuditRequests and returns the data saved in the database.
     * @param {AuditRequestCreateManyAndReturnArgs} args - Arguments to create many AuditRequests.
     * @example
     * // Create many AuditRequests
     * const auditRequest = await prisma.auditRequest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AuditRequests and only return the `id`
     * const auditRequestWithIdOnly = await prisma.auditRequest.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuditRequestCreateManyAndReturnArgs>(args?: SelectSubset<T, AuditRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditRequestPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a AuditRequest.
     * @param {AuditRequestDeleteArgs} args - Arguments to delete one AuditRequest.
     * @example
     * // Delete one AuditRequest
     * const AuditRequest = await prisma.auditRequest.delete({
     *   where: {
     *     // ... filter to delete one AuditRequest
     *   }
     * })
     * 
     */
    delete<T extends AuditRequestDeleteArgs>(args: SelectSubset<T, AuditRequestDeleteArgs<ExtArgs>>): Prisma__AuditRequestClient<$Result.GetResult<Prisma.$AuditRequestPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one AuditRequest.
     * @param {AuditRequestUpdateArgs} args - Arguments to update one AuditRequest.
     * @example
     * // Update one AuditRequest
     * const auditRequest = await prisma.auditRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuditRequestUpdateArgs>(args: SelectSubset<T, AuditRequestUpdateArgs<ExtArgs>>): Prisma__AuditRequestClient<$Result.GetResult<Prisma.$AuditRequestPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more AuditRequests.
     * @param {AuditRequestDeleteManyArgs} args - Arguments to filter AuditRequests to delete.
     * @example
     * // Delete a few AuditRequests
     * const { count } = await prisma.auditRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuditRequestDeleteManyArgs>(args?: SelectSubset<T, AuditRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuditRequests
     * const auditRequest = await prisma.auditRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuditRequestUpdateManyArgs>(args: SelectSubset<T, AuditRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AuditRequest.
     * @param {AuditRequestUpsertArgs} args - Arguments to update or create a AuditRequest.
     * @example
     * // Update or create a AuditRequest
     * const auditRequest = await prisma.auditRequest.upsert({
     *   create: {
     *     // ... data to create a AuditRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuditRequest we want to update
     *   }
     * })
     */
    upsert<T extends AuditRequestUpsertArgs>(args: SelectSubset<T, AuditRequestUpsertArgs<ExtArgs>>): Prisma__AuditRequestClient<$Result.GetResult<Prisma.$AuditRequestPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of AuditRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditRequestCountArgs} args - Arguments to filter AuditRequests to count.
     * @example
     * // Count the number of AuditRequests
     * const count = await prisma.auditRequest.count({
     *   where: {
     *     // ... the filter for the AuditRequests we want to count
     *   }
     * })
    **/
    count<T extends AuditRequestCountArgs>(
      args?: Subset<T, AuditRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuditRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AuditRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AuditRequestAggregateArgs>(args: Subset<T, AuditRequestAggregateArgs>): Prisma.PrismaPromise<GetAuditRequestAggregateType<T>>

    /**
     * Group by AuditRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditRequestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AuditRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuditRequestGroupByArgs['orderBy'] }
        : { orderBy?: AuditRequestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AuditRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuditRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AuditRequest model
   */
  readonly fields: AuditRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AuditRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuditRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AuditRequest model
   */ 
  interface AuditRequestFieldRefs {
    readonly id: FieldRef<"AuditRequest", 'String'>
    readonly name: FieldRef<"AuditRequest", 'String'>
    readonly email: FieldRef<"AuditRequest", 'String'>
    readonly website: FieldRef<"AuditRequest", 'String'>
    readonly report: FieldRef<"AuditRequest", 'String'>
    readonly status: FieldRef<"AuditRequest", 'String'>
    readonly scheduledDate: FieldRef<"AuditRequest", 'DateTime'>
    readonly createdAt: FieldRef<"AuditRequest", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AuditRequest findUnique
   */
  export type AuditRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditRequest
     */
    select?: AuditRequestSelect<ExtArgs> | null
    /**
     * Filter, which AuditRequest to fetch.
     */
    where: AuditRequestWhereUniqueInput
  }

  /**
   * AuditRequest findUniqueOrThrow
   */
  export type AuditRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditRequest
     */
    select?: AuditRequestSelect<ExtArgs> | null
    /**
     * Filter, which AuditRequest to fetch.
     */
    where: AuditRequestWhereUniqueInput
  }

  /**
   * AuditRequest findFirst
   */
  export type AuditRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditRequest
     */
    select?: AuditRequestSelect<ExtArgs> | null
    /**
     * Filter, which AuditRequest to fetch.
     */
    where?: AuditRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditRequests to fetch.
     */
    orderBy?: AuditRequestOrderByWithRelationInput | AuditRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditRequests.
     */
    cursor?: AuditRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditRequests.
     */
    distinct?: AuditRequestScalarFieldEnum | AuditRequestScalarFieldEnum[]
  }

  /**
   * AuditRequest findFirstOrThrow
   */
  export type AuditRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditRequest
     */
    select?: AuditRequestSelect<ExtArgs> | null
    /**
     * Filter, which AuditRequest to fetch.
     */
    where?: AuditRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditRequests to fetch.
     */
    orderBy?: AuditRequestOrderByWithRelationInput | AuditRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditRequests.
     */
    cursor?: AuditRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditRequests.
     */
    distinct?: AuditRequestScalarFieldEnum | AuditRequestScalarFieldEnum[]
  }

  /**
   * AuditRequest findMany
   */
  export type AuditRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditRequest
     */
    select?: AuditRequestSelect<ExtArgs> | null
    /**
     * Filter, which AuditRequests to fetch.
     */
    where?: AuditRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditRequests to fetch.
     */
    orderBy?: AuditRequestOrderByWithRelationInput | AuditRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AuditRequests.
     */
    cursor?: AuditRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditRequests.
     */
    skip?: number
    distinct?: AuditRequestScalarFieldEnum | AuditRequestScalarFieldEnum[]
  }

  /**
   * AuditRequest create
   */
  export type AuditRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditRequest
     */
    select?: AuditRequestSelect<ExtArgs> | null
    /**
     * The data needed to create a AuditRequest.
     */
    data: XOR<AuditRequestCreateInput, AuditRequestUncheckedCreateInput>
  }

  /**
   * AuditRequest createMany
   */
  export type AuditRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AuditRequests.
     */
    data: AuditRequestCreateManyInput | AuditRequestCreateManyInput[]
  }

  /**
   * AuditRequest createManyAndReturn
   */
  export type AuditRequestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditRequest
     */
    select?: AuditRequestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many AuditRequests.
     */
    data: AuditRequestCreateManyInput | AuditRequestCreateManyInput[]
  }

  /**
   * AuditRequest update
   */
  export type AuditRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditRequest
     */
    select?: AuditRequestSelect<ExtArgs> | null
    /**
     * The data needed to update a AuditRequest.
     */
    data: XOR<AuditRequestUpdateInput, AuditRequestUncheckedUpdateInput>
    /**
     * Choose, which AuditRequest to update.
     */
    where: AuditRequestWhereUniqueInput
  }

  /**
   * AuditRequest updateMany
   */
  export type AuditRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AuditRequests.
     */
    data: XOR<AuditRequestUpdateManyMutationInput, AuditRequestUncheckedUpdateManyInput>
    /**
     * Filter which AuditRequests to update
     */
    where?: AuditRequestWhereInput
  }

  /**
   * AuditRequest upsert
   */
  export type AuditRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditRequest
     */
    select?: AuditRequestSelect<ExtArgs> | null
    /**
     * The filter to search for the AuditRequest to update in case it exists.
     */
    where: AuditRequestWhereUniqueInput
    /**
     * In case the AuditRequest found by the `where` argument doesn't exist, create a new AuditRequest with this data.
     */
    create: XOR<AuditRequestCreateInput, AuditRequestUncheckedCreateInput>
    /**
     * In case the AuditRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuditRequestUpdateInput, AuditRequestUncheckedUpdateInput>
  }

  /**
   * AuditRequest delete
   */
  export type AuditRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditRequest
     */
    select?: AuditRequestSelect<ExtArgs> | null
    /**
     * Filter which AuditRequest to delete.
     */
    where: AuditRequestWhereUniqueInput
  }

  /**
   * AuditRequest deleteMany
   */
  export type AuditRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditRequests to delete
     */
    where?: AuditRequestWhereInput
  }

  /**
   * AuditRequest without action
   */
  export type AuditRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditRequest
     */
    select?: AuditRequestSelect<ExtArgs> | null
  }


  /**
   * Model PageContent
   */

  export type AggregatePageContent = {
    _count: PageContentCountAggregateOutputType | null
    _min: PageContentMinAggregateOutputType | null
    _max: PageContentMaxAggregateOutputType | null
  }

  export type PageContentMinAggregateOutputType = {
    id: string | null
    section: string | null
    key: string | null
    value: string | null
    updatedAt: Date | null
  }

  export type PageContentMaxAggregateOutputType = {
    id: string | null
    section: string | null
    key: string | null
    value: string | null
    updatedAt: Date | null
  }

  export type PageContentCountAggregateOutputType = {
    id: number
    section: number
    key: number
    value: number
    updatedAt: number
    _all: number
  }


  export type PageContentMinAggregateInputType = {
    id?: true
    section?: true
    key?: true
    value?: true
    updatedAt?: true
  }

  export type PageContentMaxAggregateInputType = {
    id?: true
    section?: true
    key?: true
    value?: true
    updatedAt?: true
  }

  export type PageContentCountAggregateInputType = {
    id?: true
    section?: true
    key?: true
    value?: true
    updatedAt?: true
    _all?: true
  }

  export type PageContentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PageContent to aggregate.
     */
    where?: PageContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PageContents to fetch.
     */
    orderBy?: PageContentOrderByWithRelationInput | PageContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PageContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PageContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PageContents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PageContents
    **/
    _count?: true | PageContentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PageContentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PageContentMaxAggregateInputType
  }

  export type GetPageContentAggregateType<T extends PageContentAggregateArgs> = {
        [P in keyof T & keyof AggregatePageContent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePageContent[P]>
      : GetScalarType<T[P], AggregatePageContent[P]>
  }




  export type PageContentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PageContentWhereInput
    orderBy?: PageContentOrderByWithAggregationInput | PageContentOrderByWithAggregationInput[]
    by: PageContentScalarFieldEnum[] | PageContentScalarFieldEnum
    having?: PageContentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PageContentCountAggregateInputType | true
    _min?: PageContentMinAggregateInputType
    _max?: PageContentMaxAggregateInputType
  }

  export type PageContentGroupByOutputType = {
    id: string
    section: string
    key: string
    value: string
    updatedAt: Date
    _count: PageContentCountAggregateOutputType | null
    _min: PageContentMinAggregateOutputType | null
    _max: PageContentMaxAggregateOutputType | null
  }

  type GetPageContentGroupByPayload<T extends PageContentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PageContentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PageContentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PageContentGroupByOutputType[P]>
            : GetScalarType<T[P], PageContentGroupByOutputType[P]>
        }
      >
    >


  export type PageContentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    section?: boolean
    key?: boolean
    value?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["pageContent"]>

  export type PageContentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    section?: boolean
    key?: boolean
    value?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["pageContent"]>

  export type PageContentSelectScalar = {
    id?: boolean
    section?: boolean
    key?: boolean
    value?: boolean
    updatedAt?: boolean
  }


  export type $PageContentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PageContent"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      section: string
      key: string
      value: string
      updatedAt: Date
    }, ExtArgs["result"]["pageContent"]>
    composites: {}
  }

  type PageContentGetPayload<S extends boolean | null | undefined | PageContentDefaultArgs> = $Result.GetResult<Prisma.$PageContentPayload, S>

  type PageContentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PageContentFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PageContentCountAggregateInputType | true
    }

  export interface PageContentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PageContent'], meta: { name: 'PageContent' } }
    /**
     * Find zero or one PageContent that matches the filter.
     * @param {PageContentFindUniqueArgs} args - Arguments to find a PageContent
     * @example
     * // Get one PageContent
     * const pageContent = await prisma.pageContent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PageContentFindUniqueArgs>(args: SelectSubset<T, PageContentFindUniqueArgs<ExtArgs>>): Prisma__PageContentClient<$Result.GetResult<Prisma.$PageContentPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one PageContent that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PageContentFindUniqueOrThrowArgs} args - Arguments to find a PageContent
     * @example
     * // Get one PageContent
     * const pageContent = await prisma.pageContent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PageContentFindUniqueOrThrowArgs>(args: SelectSubset<T, PageContentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PageContentClient<$Result.GetResult<Prisma.$PageContentPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first PageContent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageContentFindFirstArgs} args - Arguments to find a PageContent
     * @example
     * // Get one PageContent
     * const pageContent = await prisma.pageContent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PageContentFindFirstArgs>(args?: SelectSubset<T, PageContentFindFirstArgs<ExtArgs>>): Prisma__PageContentClient<$Result.GetResult<Prisma.$PageContentPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first PageContent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageContentFindFirstOrThrowArgs} args - Arguments to find a PageContent
     * @example
     * // Get one PageContent
     * const pageContent = await prisma.pageContent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PageContentFindFirstOrThrowArgs>(args?: SelectSubset<T, PageContentFindFirstOrThrowArgs<ExtArgs>>): Prisma__PageContentClient<$Result.GetResult<Prisma.$PageContentPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more PageContents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageContentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PageContents
     * const pageContents = await prisma.pageContent.findMany()
     * 
     * // Get first 10 PageContents
     * const pageContents = await prisma.pageContent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pageContentWithIdOnly = await prisma.pageContent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PageContentFindManyArgs>(args?: SelectSubset<T, PageContentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PageContentPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a PageContent.
     * @param {PageContentCreateArgs} args - Arguments to create a PageContent.
     * @example
     * // Create one PageContent
     * const PageContent = await prisma.pageContent.create({
     *   data: {
     *     // ... data to create a PageContent
     *   }
     * })
     * 
     */
    create<T extends PageContentCreateArgs>(args: SelectSubset<T, PageContentCreateArgs<ExtArgs>>): Prisma__PageContentClient<$Result.GetResult<Prisma.$PageContentPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many PageContents.
     * @param {PageContentCreateManyArgs} args - Arguments to create many PageContents.
     * @example
     * // Create many PageContents
     * const pageContent = await prisma.pageContent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PageContentCreateManyArgs>(args?: SelectSubset<T, PageContentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PageContents and returns the data saved in the database.
     * @param {PageContentCreateManyAndReturnArgs} args - Arguments to create many PageContents.
     * @example
     * // Create many PageContents
     * const pageContent = await prisma.pageContent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PageContents and only return the `id`
     * const pageContentWithIdOnly = await prisma.pageContent.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PageContentCreateManyAndReturnArgs>(args?: SelectSubset<T, PageContentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PageContentPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a PageContent.
     * @param {PageContentDeleteArgs} args - Arguments to delete one PageContent.
     * @example
     * // Delete one PageContent
     * const PageContent = await prisma.pageContent.delete({
     *   where: {
     *     // ... filter to delete one PageContent
     *   }
     * })
     * 
     */
    delete<T extends PageContentDeleteArgs>(args: SelectSubset<T, PageContentDeleteArgs<ExtArgs>>): Prisma__PageContentClient<$Result.GetResult<Prisma.$PageContentPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one PageContent.
     * @param {PageContentUpdateArgs} args - Arguments to update one PageContent.
     * @example
     * // Update one PageContent
     * const pageContent = await prisma.pageContent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PageContentUpdateArgs>(args: SelectSubset<T, PageContentUpdateArgs<ExtArgs>>): Prisma__PageContentClient<$Result.GetResult<Prisma.$PageContentPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more PageContents.
     * @param {PageContentDeleteManyArgs} args - Arguments to filter PageContents to delete.
     * @example
     * // Delete a few PageContents
     * const { count } = await prisma.pageContent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PageContentDeleteManyArgs>(args?: SelectSubset<T, PageContentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PageContents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageContentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PageContents
     * const pageContent = await prisma.pageContent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PageContentUpdateManyArgs>(args: SelectSubset<T, PageContentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PageContent.
     * @param {PageContentUpsertArgs} args - Arguments to update or create a PageContent.
     * @example
     * // Update or create a PageContent
     * const pageContent = await prisma.pageContent.upsert({
     *   create: {
     *     // ... data to create a PageContent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PageContent we want to update
     *   }
     * })
     */
    upsert<T extends PageContentUpsertArgs>(args: SelectSubset<T, PageContentUpsertArgs<ExtArgs>>): Prisma__PageContentClient<$Result.GetResult<Prisma.$PageContentPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of PageContents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageContentCountArgs} args - Arguments to filter PageContents to count.
     * @example
     * // Count the number of PageContents
     * const count = await prisma.pageContent.count({
     *   where: {
     *     // ... the filter for the PageContents we want to count
     *   }
     * })
    **/
    count<T extends PageContentCountArgs>(
      args?: Subset<T, PageContentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PageContentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PageContent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageContentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PageContentAggregateArgs>(args: Subset<T, PageContentAggregateArgs>): Prisma.PrismaPromise<GetPageContentAggregateType<T>>

    /**
     * Group by PageContent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageContentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PageContentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PageContentGroupByArgs['orderBy'] }
        : { orderBy?: PageContentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PageContentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPageContentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PageContent model
   */
  readonly fields: PageContentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PageContent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PageContentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PageContent model
   */ 
  interface PageContentFieldRefs {
    readonly id: FieldRef<"PageContent", 'String'>
    readonly section: FieldRef<"PageContent", 'String'>
    readonly key: FieldRef<"PageContent", 'String'>
    readonly value: FieldRef<"PageContent", 'String'>
    readonly updatedAt: FieldRef<"PageContent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PageContent findUnique
   */
  export type PageContentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageContent
     */
    select?: PageContentSelect<ExtArgs> | null
    /**
     * Filter, which PageContent to fetch.
     */
    where: PageContentWhereUniqueInput
  }

  /**
   * PageContent findUniqueOrThrow
   */
  export type PageContentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageContent
     */
    select?: PageContentSelect<ExtArgs> | null
    /**
     * Filter, which PageContent to fetch.
     */
    where: PageContentWhereUniqueInput
  }

  /**
   * PageContent findFirst
   */
  export type PageContentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageContent
     */
    select?: PageContentSelect<ExtArgs> | null
    /**
     * Filter, which PageContent to fetch.
     */
    where?: PageContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PageContents to fetch.
     */
    orderBy?: PageContentOrderByWithRelationInput | PageContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PageContents.
     */
    cursor?: PageContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PageContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PageContents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PageContents.
     */
    distinct?: PageContentScalarFieldEnum | PageContentScalarFieldEnum[]
  }

  /**
   * PageContent findFirstOrThrow
   */
  export type PageContentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageContent
     */
    select?: PageContentSelect<ExtArgs> | null
    /**
     * Filter, which PageContent to fetch.
     */
    where?: PageContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PageContents to fetch.
     */
    orderBy?: PageContentOrderByWithRelationInput | PageContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PageContents.
     */
    cursor?: PageContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PageContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PageContents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PageContents.
     */
    distinct?: PageContentScalarFieldEnum | PageContentScalarFieldEnum[]
  }

  /**
   * PageContent findMany
   */
  export type PageContentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageContent
     */
    select?: PageContentSelect<ExtArgs> | null
    /**
     * Filter, which PageContents to fetch.
     */
    where?: PageContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PageContents to fetch.
     */
    orderBy?: PageContentOrderByWithRelationInput | PageContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PageContents.
     */
    cursor?: PageContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PageContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PageContents.
     */
    skip?: number
    distinct?: PageContentScalarFieldEnum | PageContentScalarFieldEnum[]
  }

  /**
   * PageContent create
   */
  export type PageContentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageContent
     */
    select?: PageContentSelect<ExtArgs> | null
    /**
     * The data needed to create a PageContent.
     */
    data: XOR<PageContentCreateInput, PageContentUncheckedCreateInput>
  }

  /**
   * PageContent createMany
   */
  export type PageContentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PageContents.
     */
    data: PageContentCreateManyInput | PageContentCreateManyInput[]
  }

  /**
   * PageContent createManyAndReturn
   */
  export type PageContentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageContent
     */
    select?: PageContentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many PageContents.
     */
    data: PageContentCreateManyInput | PageContentCreateManyInput[]
  }

  /**
   * PageContent update
   */
  export type PageContentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageContent
     */
    select?: PageContentSelect<ExtArgs> | null
    /**
     * The data needed to update a PageContent.
     */
    data: XOR<PageContentUpdateInput, PageContentUncheckedUpdateInput>
    /**
     * Choose, which PageContent to update.
     */
    where: PageContentWhereUniqueInput
  }

  /**
   * PageContent updateMany
   */
  export type PageContentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PageContents.
     */
    data: XOR<PageContentUpdateManyMutationInput, PageContentUncheckedUpdateManyInput>
    /**
     * Filter which PageContents to update
     */
    where?: PageContentWhereInput
  }

  /**
   * PageContent upsert
   */
  export type PageContentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageContent
     */
    select?: PageContentSelect<ExtArgs> | null
    /**
     * The filter to search for the PageContent to update in case it exists.
     */
    where: PageContentWhereUniqueInput
    /**
     * In case the PageContent found by the `where` argument doesn't exist, create a new PageContent with this data.
     */
    create: XOR<PageContentCreateInput, PageContentUncheckedCreateInput>
    /**
     * In case the PageContent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PageContentUpdateInput, PageContentUncheckedUpdateInput>
  }

  /**
   * PageContent delete
   */
  export type PageContentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageContent
     */
    select?: PageContentSelect<ExtArgs> | null
    /**
     * Filter which PageContent to delete.
     */
    where: PageContentWhereUniqueInput
  }

  /**
   * PageContent deleteMany
   */
  export type PageContentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PageContents to delete
     */
    where?: PageContentWhereInput
  }

  /**
   * PageContent without action
   */
  export type PageContentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageContent
     */
    select?: PageContentSelect<ExtArgs> | null
  }


  /**
   * Model Project
   */

  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  export type ProjectAvgAggregateOutputType = {
    sorting: number | null
  }

  export type ProjectSumAggregateOutputType = {
    sorting: number | null
  }

  export type ProjectMinAggregateOutputType = {
    id: string | null
    title: string | null
    shortDescription: string | null
    description: string | null
    imageUrl: string | null
    tags: string | null
    liveLink: string | null
    githubLink: string | null
    sorting: number | null
    serviceId: string | null
    status: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectMaxAggregateOutputType = {
    id: string | null
    title: string | null
    shortDescription: string | null
    description: string | null
    imageUrl: string | null
    tags: string | null
    liveLink: string | null
    githubLink: string | null
    sorting: number | null
    serviceId: string | null
    status: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectCountAggregateOutputType = {
    id: number
    title: number
    shortDescription: number
    description: number
    imageUrl: number
    tags: number
    liveLink: number
    githubLink: number
    sorting: number
    serviceId: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProjectAvgAggregateInputType = {
    sorting?: true
  }

  export type ProjectSumAggregateInputType = {
    sorting?: true
  }

  export type ProjectMinAggregateInputType = {
    id?: true
    title?: true
    shortDescription?: true
    description?: true
    imageUrl?: true
    tags?: true
    liveLink?: true
    githubLink?: true
    sorting?: true
    serviceId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectMaxAggregateInputType = {
    id?: true
    title?: true
    shortDescription?: true
    description?: true
    imageUrl?: true
    tags?: true
    liveLink?: true
    githubLink?: true
    sorting?: true
    serviceId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectCountAggregateInputType = {
    id?: true
    title?: true
    shortDescription?: true
    description?: true
    imageUrl?: true
    tags?: true
    liveLink?: true
    githubLink?: true
    sorting?: true
    serviceId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Project to aggregate.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Projects
    **/
    _count?: true | ProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjectAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectMaxAggregateInputType
  }

  export type GetProjectAggregateType<T extends ProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject[P]>
      : GetScalarType<T[P], AggregateProject[P]>
  }




  export type ProjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithAggregationInput | ProjectOrderByWithAggregationInput[]
    by: ProjectScalarFieldEnum[] | ProjectScalarFieldEnum
    having?: ProjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectCountAggregateInputType | true
    _avg?: ProjectAvgAggregateInputType
    _sum?: ProjectSumAggregateInputType
    _min?: ProjectMinAggregateInputType
    _max?: ProjectMaxAggregateInputType
  }

  export type ProjectGroupByOutputType = {
    id: string
    title: string
    shortDescription: string | null
    description: string
    imageUrl: string | null
    tags: string | null
    liveLink: string | null
    githubLink: string | null
    sorting: number
    serviceId: string | null
    status: boolean
    createdAt: Date
    updatedAt: Date
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  type GetProjectGroupByPayload<T extends ProjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectGroupByOutputType[P]>
        }
      >
    >


  export type ProjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    shortDescription?: boolean
    description?: boolean
    imageUrl?: boolean
    tags?: boolean
    liveLink?: boolean
    githubLink?: boolean
    sorting?: boolean
    serviceId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    service?: boolean | Project$serviceArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    shortDescription?: boolean
    description?: boolean
    imageUrl?: boolean
    tags?: boolean
    liveLink?: boolean
    githubLink?: boolean
    sorting?: boolean
    serviceId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    service?: boolean | Project$serviceArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectScalar = {
    id?: boolean
    title?: boolean
    shortDescription?: boolean
    description?: boolean
    imageUrl?: boolean
    tags?: boolean
    liveLink?: boolean
    githubLink?: boolean
    sorting?: boolean
    serviceId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    service?: boolean | Project$serviceArgs<ExtArgs>
  }
  export type ProjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    service?: boolean | Project$serviceArgs<ExtArgs>
  }

  export type $ProjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Project"
    objects: {
      service: Prisma.$ServicePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      shortDescription: string | null
      description: string
      imageUrl: string | null
      tags: string | null
      liveLink: string | null
      githubLink: string | null
      sorting: number
      serviceId: string | null
      status: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["project"]>
    composites: {}
  }

  type ProjectGetPayload<S extends boolean | null | undefined | ProjectDefaultArgs> = $Result.GetResult<Prisma.$ProjectPayload, S>

  type ProjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProjectFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProjectCountAggregateInputType | true
    }

  export interface ProjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Project'], meta: { name: 'Project' } }
    /**
     * Find zero or one Project that matches the filter.
     * @param {ProjectFindUniqueArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectFindUniqueArgs>(args: SelectSubset<T, ProjectFindUniqueArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Project that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ProjectFindUniqueOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Project that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectFindFirstArgs>(args?: SelectSubset<T, ProjectFindFirstArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Project that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.project.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.project.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectWithIdOnly = await prisma.project.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectFindManyArgs>(args?: SelectSubset<T, ProjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Project.
     * @param {ProjectCreateArgs} args - Arguments to create a Project.
     * @example
     * // Create one Project
     * const Project = await prisma.project.create({
     *   data: {
     *     // ... data to create a Project
     *   }
     * })
     * 
     */
    create<T extends ProjectCreateArgs>(args: SelectSubset<T, ProjectCreateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Projects.
     * @param {ProjectCreateManyArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectCreateManyArgs>(args?: SelectSubset<T, ProjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Projects and returns the data saved in the database.
     * @param {ProjectCreateManyAndReturnArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Project.
     * @param {ProjectDeleteArgs} args - Arguments to delete one Project.
     * @example
     * // Delete one Project
     * const Project = await prisma.project.delete({
     *   where: {
     *     // ... filter to delete one Project
     *   }
     * })
     * 
     */
    delete<T extends ProjectDeleteArgs>(args: SelectSubset<T, ProjectDeleteArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Project.
     * @param {ProjectUpdateArgs} args - Arguments to update one Project.
     * @example
     * // Update one Project
     * const project = await prisma.project.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectUpdateArgs>(args: SelectSubset<T, ProjectUpdateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Projects.
     * @param {ProjectDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.project.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectDeleteManyArgs>(args?: SelectSubset<T, ProjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectUpdateManyArgs>(args: SelectSubset<T, ProjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Project.
     * @param {ProjectUpsertArgs} args - Arguments to update or create a Project.
     * @example
     * // Update or create a Project
     * const project = await prisma.project.upsert({
     *   create: {
     *     // ... data to create a Project
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project we want to update
     *   }
     * })
     */
    upsert<T extends ProjectUpsertArgs>(args: SelectSubset<T, ProjectUpsertArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.project.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends ProjectCountArgs>(
      args?: Subset<T, ProjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProjectAggregateArgs>(args: Subset<T, ProjectAggregateArgs>): Prisma.PrismaPromise<GetProjectAggregateType<T>>

    /**
     * Group by Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectGroupByArgs['orderBy'] }
        : { orderBy?: ProjectGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Project model
   */
  readonly fields: ProjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Project.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    service<T extends Project$serviceArgs<ExtArgs> = {}>(args?: Subset<T, Project$serviceArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Project model
   */ 
  interface ProjectFieldRefs {
    readonly id: FieldRef<"Project", 'String'>
    readonly title: FieldRef<"Project", 'String'>
    readonly shortDescription: FieldRef<"Project", 'String'>
    readonly description: FieldRef<"Project", 'String'>
    readonly imageUrl: FieldRef<"Project", 'String'>
    readonly tags: FieldRef<"Project", 'String'>
    readonly liveLink: FieldRef<"Project", 'String'>
    readonly githubLink: FieldRef<"Project", 'String'>
    readonly sorting: FieldRef<"Project", 'Int'>
    readonly serviceId: FieldRef<"Project", 'String'>
    readonly status: FieldRef<"Project", 'Boolean'>
    readonly createdAt: FieldRef<"Project", 'DateTime'>
    readonly updatedAt: FieldRef<"Project", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Project findUnique
   */
  export type ProjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findUniqueOrThrow
   */
  export type ProjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findFirst
   */
  export type ProjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findFirstOrThrow
   */
  export type ProjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findMany
   */
  export type ProjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project create
   */
  export type ProjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to create a Project.
     */
    data: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
  }

  /**
   * Project createMany
   */
  export type ProjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
  }

  /**
   * Project createManyAndReturn
   */
  export type ProjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Project update
   */
  export type ProjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to update a Project.
     */
    data: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
    /**
     * Choose, which Project to update.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project updateMany
   */
  export type ProjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
  }

  /**
   * Project upsert
   */
  export type ProjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The filter to search for the Project to update in case it exists.
     */
    where: ProjectWhereUniqueInput
    /**
     * In case the Project found by the `where` argument doesn't exist, create a new Project with this data.
     */
    create: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
    /**
     * In case the Project was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
  }

  /**
   * Project delete
   */
  export type ProjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter which Project to delete.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project deleteMany
   */
  export type ProjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Projects to delete
     */
    where?: ProjectWhereInput
  }

  /**
   * Project.service
   */
  export type Project$serviceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    where?: ServiceWhereInput
  }

  /**
   * Project without action
   */
  export type ProjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
  }


  /**
   * Model Service
   */

  export type AggregateService = {
    _count: ServiceCountAggregateOutputType | null
    _avg: ServiceAvgAggregateOutputType | null
    _sum: ServiceSumAggregateOutputType | null
    _min: ServiceMinAggregateOutputType | null
    _max: ServiceMaxAggregateOutputType | null
  }

  export type ServiceAvgAggregateOutputType = {
    sorting: number | null
  }

  export type ServiceSumAggregateOutputType = {
    sorting: number | null
  }

  export type ServiceMinAggregateOutputType = {
    id: string | null
    name: string | null
    sorting: number | null
    description: string | null
    tags: string | null
    tasks: string | null
    status: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ServiceMaxAggregateOutputType = {
    id: string | null
    name: string | null
    sorting: number | null
    description: string | null
    tags: string | null
    tasks: string | null
    status: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ServiceCountAggregateOutputType = {
    id: number
    name: number
    sorting: number
    description: number
    tags: number
    tasks: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ServiceAvgAggregateInputType = {
    sorting?: true
  }

  export type ServiceSumAggregateInputType = {
    sorting?: true
  }

  export type ServiceMinAggregateInputType = {
    id?: true
    name?: true
    sorting?: true
    description?: true
    tags?: true
    tasks?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ServiceMaxAggregateInputType = {
    id?: true
    name?: true
    sorting?: true
    description?: true
    tags?: true
    tasks?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ServiceCountAggregateInputType = {
    id?: true
    name?: true
    sorting?: true
    description?: true
    tags?: true
    tasks?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ServiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Service to aggregate.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Services
    **/
    _count?: true | ServiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ServiceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ServiceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServiceMaxAggregateInputType
  }

  export type GetServiceAggregateType<T extends ServiceAggregateArgs> = {
        [P in keyof T & keyof AggregateService]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateService[P]>
      : GetScalarType<T[P], AggregateService[P]>
  }




  export type ServiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceWhereInput
    orderBy?: ServiceOrderByWithAggregationInput | ServiceOrderByWithAggregationInput[]
    by: ServiceScalarFieldEnum[] | ServiceScalarFieldEnum
    having?: ServiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServiceCountAggregateInputType | true
    _avg?: ServiceAvgAggregateInputType
    _sum?: ServiceSumAggregateInputType
    _min?: ServiceMinAggregateInputType
    _max?: ServiceMaxAggregateInputType
  }

  export type ServiceGroupByOutputType = {
    id: string
    name: string
    sorting: number
    description: string
    tags: string | null
    tasks: string | null
    status: boolean
    createdAt: Date
    updatedAt: Date
    _count: ServiceCountAggregateOutputType | null
    _avg: ServiceAvgAggregateOutputType | null
    _sum: ServiceSumAggregateOutputType | null
    _min: ServiceMinAggregateOutputType | null
    _max: ServiceMaxAggregateOutputType | null
  }

  type GetServiceGroupByPayload<T extends ServiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServiceGroupByOutputType[P]>
            : GetScalarType<T[P], ServiceGroupByOutputType[P]>
        }
      >
    >


  export type ServiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    sorting?: boolean
    description?: boolean
    tags?: boolean
    tasks?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    projects?: boolean | Service$projectsArgs<ExtArgs>
    _count?: boolean | ServiceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["service"]>

  export type ServiceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    sorting?: boolean
    description?: boolean
    tags?: boolean
    tasks?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["service"]>

  export type ServiceSelectScalar = {
    id?: boolean
    name?: boolean
    sorting?: boolean
    description?: boolean
    tags?: boolean
    tasks?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ServiceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projects?: boolean | Service$projectsArgs<ExtArgs>
    _count?: boolean | ServiceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ServiceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ServicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Service"
    objects: {
      projects: Prisma.$ProjectPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      sorting: number
      description: string
      tags: string | null
      tasks: string | null
      status: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["service"]>
    composites: {}
  }

  type ServiceGetPayload<S extends boolean | null | undefined | ServiceDefaultArgs> = $Result.GetResult<Prisma.$ServicePayload, S>

  type ServiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ServiceFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ServiceCountAggregateInputType | true
    }

  export interface ServiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Service'], meta: { name: 'Service' } }
    /**
     * Find zero or one Service that matches the filter.
     * @param {ServiceFindUniqueArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServiceFindUniqueArgs>(args: SelectSubset<T, ServiceFindUniqueArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Service that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ServiceFindUniqueOrThrowArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServiceFindUniqueOrThrowArgs>(args: SelectSubset<T, ServiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Service that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindFirstArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServiceFindFirstArgs>(args?: SelectSubset<T, ServiceFindFirstArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Service that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindFirstOrThrowArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServiceFindFirstOrThrowArgs>(args?: SelectSubset<T, ServiceFindFirstOrThrowArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Services that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Services
     * const services = await prisma.service.findMany()
     * 
     * // Get first 10 Services
     * const services = await prisma.service.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const serviceWithIdOnly = await prisma.service.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ServiceFindManyArgs>(args?: SelectSubset<T, ServiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Service.
     * @param {ServiceCreateArgs} args - Arguments to create a Service.
     * @example
     * // Create one Service
     * const Service = await prisma.service.create({
     *   data: {
     *     // ... data to create a Service
     *   }
     * })
     * 
     */
    create<T extends ServiceCreateArgs>(args: SelectSubset<T, ServiceCreateArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Services.
     * @param {ServiceCreateManyArgs} args - Arguments to create many Services.
     * @example
     * // Create many Services
     * const service = await prisma.service.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ServiceCreateManyArgs>(args?: SelectSubset<T, ServiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Services and returns the data saved in the database.
     * @param {ServiceCreateManyAndReturnArgs} args - Arguments to create many Services.
     * @example
     * // Create many Services
     * const service = await prisma.service.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Services and only return the `id`
     * const serviceWithIdOnly = await prisma.service.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ServiceCreateManyAndReturnArgs>(args?: SelectSubset<T, ServiceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Service.
     * @param {ServiceDeleteArgs} args - Arguments to delete one Service.
     * @example
     * // Delete one Service
     * const Service = await prisma.service.delete({
     *   where: {
     *     // ... filter to delete one Service
     *   }
     * })
     * 
     */
    delete<T extends ServiceDeleteArgs>(args: SelectSubset<T, ServiceDeleteArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Service.
     * @param {ServiceUpdateArgs} args - Arguments to update one Service.
     * @example
     * // Update one Service
     * const service = await prisma.service.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ServiceUpdateArgs>(args: SelectSubset<T, ServiceUpdateArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Services.
     * @param {ServiceDeleteManyArgs} args - Arguments to filter Services to delete.
     * @example
     * // Delete a few Services
     * const { count } = await prisma.service.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ServiceDeleteManyArgs>(args?: SelectSubset<T, ServiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Services
     * const service = await prisma.service.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ServiceUpdateManyArgs>(args: SelectSubset<T, ServiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Service.
     * @param {ServiceUpsertArgs} args - Arguments to update or create a Service.
     * @example
     * // Update or create a Service
     * const service = await prisma.service.upsert({
     *   create: {
     *     // ... data to create a Service
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Service we want to update
     *   }
     * })
     */
    upsert<T extends ServiceUpsertArgs>(args: SelectSubset<T, ServiceUpsertArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceCountArgs} args - Arguments to filter Services to count.
     * @example
     * // Count the number of Services
     * const count = await prisma.service.count({
     *   where: {
     *     // ... the filter for the Services we want to count
     *   }
     * })
    **/
    count<T extends ServiceCountArgs>(
      args?: Subset<T, ServiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Service.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ServiceAggregateArgs>(args: Subset<T, ServiceAggregateArgs>): Prisma.PrismaPromise<GetServiceAggregateType<T>>

    /**
     * Group by Service.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ServiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServiceGroupByArgs['orderBy'] }
        : { orderBy?: ServiceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ServiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Service model
   */
  readonly fields: ServiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Service.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    projects<T extends Service$projectsArgs<ExtArgs> = {}>(args?: Subset<T, Service$projectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Service model
   */ 
  interface ServiceFieldRefs {
    readonly id: FieldRef<"Service", 'String'>
    readonly name: FieldRef<"Service", 'String'>
    readonly sorting: FieldRef<"Service", 'Int'>
    readonly description: FieldRef<"Service", 'String'>
    readonly tags: FieldRef<"Service", 'String'>
    readonly tasks: FieldRef<"Service", 'String'>
    readonly status: FieldRef<"Service", 'Boolean'>
    readonly createdAt: FieldRef<"Service", 'DateTime'>
    readonly updatedAt: FieldRef<"Service", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Service findUnique
   */
  export type ServiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service findUniqueOrThrow
   */
  export type ServiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service findFirst
   */
  export type ServiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Services.
     */
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service findFirstOrThrow
   */
  export type ServiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Services.
     */
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service findMany
   */
  export type ServiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Services to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service create
   */
  export type ServiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * The data needed to create a Service.
     */
    data: XOR<ServiceCreateInput, ServiceUncheckedCreateInput>
  }

  /**
   * Service createMany
   */
  export type ServiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Services.
     */
    data: ServiceCreateManyInput | ServiceCreateManyInput[]
  }

  /**
   * Service createManyAndReturn
   */
  export type ServiceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Services.
     */
    data: ServiceCreateManyInput | ServiceCreateManyInput[]
  }

  /**
   * Service update
   */
  export type ServiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * The data needed to update a Service.
     */
    data: XOR<ServiceUpdateInput, ServiceUncheckedUpdateInput>
    /**
     * Choose, which Service to update.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service updateMany
   */
  export type ServiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Services.
     */
    data: XOR<ServiceUpdateManyMutationInput, ServiceUncheckedUpdateManyInput>
    /**
     * Filter which Services to update
     */
    where?: ServiceWhereInput
  }

  /**
   * Service upsert
   */
  export type ServiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * The filter to search for the Service to update in case it exists.
     */
    where: ServiceWhereUniqueInput
    /**
     * In case the Service found by the `where` argument doesn't exist, create a new Service with this data.
     */
    create: XOR<ServiceCreateInput, ServiceUncheckedCreateInput>
    /**
     * In case the Service was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServiceUpdateInput, ServiceUncheckedUpdateInput>
  }

  /**
   * Service delete
   */
  export type ServiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter which Service to delete.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service deleteMany
   */
  export type ServiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Services to delete
     */
    where?: ServiceWhereInput
  }

  /**
   * Service.projects
   */
  export type Service$projectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    cursor?: ProjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Service without action
   */
  export type ServiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
  }


  /**
   * Model SliderContent
   */

  export type AggregateSliderContent = {
    _count: SliderContentCountAggregateOutputType | null
    _avg: SliderContentAvgAggregateOutputType | null
    _sum: SliderContentSumAggregateOutputType | null
    _min: SliderContentMinAggregateOutputType | null
    _max: SliderContentMaxAggregateOutputType | null
  }

  export type SliderContentAvgAggregateOutputType = {
    sorting: number | null
  }

  export type SliderContentSumAggregateOutputType = {
    sorting: number | null
  }

  export type SliderContentMinAggregateOutputType = {
    id: string | null
    title: string | null
    shortDescription: string | null
    imageUrl: string | null
    sorting: number | null
    status: boolean | null
    createdAt: Date | null
  }

  export type SliderContentMaxAggregateOutputType = {
    id: string | null
    title: string | null
    shortDescription: string | null
    imageUrl: string | null
    sorting: number | null
    status: boolean | null
    createdAt: Date | null
  }

  export type SliderContentCountAggregateOutputType = {
    id: number
    title: number
    shortDescription: number
    imageUrl: number
    sorting: number
    status: number
    createdAt: number
    _all: number
  }


  export type SliderContentAvgAggregateInputType = {
    sorting?: true
  }

  export type SliderContentSumAggregateInputType = {
    sorting?: true
  }

  export type SliderContentMinAggregateInputType = {
    id?: true
    title?: true
    shortDescription?: true
    imageUrl?: true
    sorting?: true
    status?: true
    createdAt?: true
  }

  export type SliderContentMaxAggregateInputType = {
    id?: true
    title?: true
    shortDescription?: true
    imageUrl?: true
    sorting?: true
    status?: true
    createdAt?: true
  }

  export type SliderContentCountAggregateInputType = {
    id?: true
    title?: true
    shortDescription?: true
    imageUrl?: true
    sorting?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type SliderContentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SliderContent to aggregate.
     */
    where?: SliderContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SliderContents to fetch.
     */
    orderBy?: SliderContentOrderByWithRelationInput | SliderContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SliderContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SliderContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SliderContents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SliderContents
    **/
    _count?: true | SliderContentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SliderContentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SliderContentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SliderContentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SliderContentMaxAggregateInputType
  }

  export type GetSliderContentAggregateType<T extends SliderContentAggregateArgs> = {
        [P in keyof T & keyof AggregateSliderContent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSliderContent[P]>
      : GetScalarType<T[P], AggregateSliderContent[P]>
  }




  export type SliderContentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SliderContentWhereInput
    orderBy?: SliderContentOrderByWithAggregationInput | SliderContentOrderByWithAggregationInput[]
    by: SliderContentScalarFieldEnum[] | SliderContentScalarFieldEnum
    having?: SliderContentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SliderContentCountAggregateInputType | true
    _avg?: SliderContentAvgAggregateInputType
    _sum?: SliderContentSumAggregateInputType
    _min?: SliderContentMinAggregateInputType
    _max?: SliderContentMaxAggregateInputType
  }

  export type SliderContentGroupByOutputType = {
    id: string
    title: string
    shortDescription: string | null
    imageUrl: string | null
    sorting: number
    status: boolean
    createdAt: Date
    _count: SliderContentCountAggregateOutputType | null
    _avg: SliderContentAvgAggregateOutputType | null
    _sum: SliderContentSumAggregateOutputType | null
    _min: SliderContentMinAggregateOutputType | null
    _max: SliderContentMaxAggregateOutputType | null
  }

  type GetSliderContentGroupByPayload<T extends SliderContentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SliderContentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SliderContentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SliderContentGroupByOutputType[P]>
            : GetScalarType<T[P], SliderContentGroupByOutputType[P]>
        }
      >
    >


  export type SliderContentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    shortDescription?: boolean
    imageUrl?: boolean
    sorting?: boolean
    status?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["sliderContent"]>

  export type SliderContentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    shortDescription?: boolean
    imageUrl?: boolean
    sorting?: boolean
    status?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["sliderContent"]>

  export type SliderContentSelectScalar = {
    id?: boolean
    title?: boolean
    shortDescription?: boolean
    imageUrl?: boolean
    sorting?: boolean
    status?: boolean
    createdAt?: boolean
  }


  export type $SliderContentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SliderContent"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      shortDescription: string | null
      imageUrl: string | null
      sorting: number
      status: boolean
      createdAt: Date
    }, ExtArgs["result"]["sliderContent"]>
    composites: {}
  }

  type SliderContentGetPayload<S extends boolean | null | undefined | SliderContentDefaultArgs> = $Result.GetResult<Prisma.$SliderContentPayload, S>

  type SliderContentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SliderContentFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SliderContentCountAggregateInputType | true
    }

  export interface SliderContentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SliderContent'], meta: { name: 'SliderContent' } }
    /**
     * Find zero or one SliderContent that matches the filter.
     * @param {SliderContentFindUniqueArgs} args - Arguments to find a SliderContent
     * @example
     * // Get one SliderContent
     * const sliderContent = await prisma.sliderContent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SliderContentFindUniqueArgs>(args: SelectSubset<T, SliderContentFindUniqueArgs<ExtArgs>>): Prisma__SliderContentClient<$Result.GetResult<Prisma.$SliderContentPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one SliderContent that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SliderContentFindUniqueOrThrowArgs} args - Arguments to find a SliderContent
     * @example
     * // Get one SliderContent
     * const sliderContent = await prisma.sliderContent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SliderContentFindUniqueOrThrowArgs>(args: SelectSubset<T, SliderContentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SliderContentClient<$Result.GetResult<Prisma.$SliderContentPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first SliderContent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SliderContentFindFirstArgs} args - Arguments to find a SliderContent
     * @example
     * // Get one SliderContent
     * const sliderContent = await prisma.sliderContent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SliderContentFindFirstArgs>(args?: SelectSubset<T, SliderContentFindFirstArgs<ExtArgs>>): Prisma__SliderContentClient<$Result.GetResult<Prisma.$SliderContentPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first SliderContent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SliderContentFindFirstOrThrowArgs} args - Arguments to find a SliderContent
     * @example
     * // Get one SliderContent
     * const sliderContent = await prisma.sliderContent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SliderContentFindFirstOrThrowArgs>(args?: SelectSubset<T, SliderContentFindFirstOrThrowArgs<ExtArgs>>): Prisma__SliderContentClient<$Result.GetResult<Prisma.$SliderContentPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more SliderContents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SliderContentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SliderContents
     * const sliderContents = await prisma.sliderContent.findMany()
     * 
     * // Get first 10 SliderContents
     * const sliderContents = await prisma.sliderContent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sliderContentWithIdOnly = await prisma.sliderContent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SliderContentFindManyArgs>(args?: SelectSubset<T, SliderContentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SliderContentPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a SliderContent.
     * @param {SliderContentCreateArgs} args - Arguments to create a SliderContent.
     * @example
     * // Create one SliderContent
     * const SliderContent = await prisma.sliderContent.create({
     *   data: {
     *     // ... data to create a SliderContent
     *   }
     * })
     * 
     */
    create<T extends SliderContentCreateArgs>(args: SelectSubset<T, SliderContentCreateArgs<ExtArgs>>): Prisma__SliderContentClient<$Result.GetResult<Prisma.$SliderContentPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many SliderContents.
     * @param {SliderContentCreateManyArgs} args - Arguments to create many SliderContents.
     * @example
     * // Create many SliderContents
     * const sliderContent = await prisma.sliderContent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SliderContentCreateManyArgs>(args?: SelectSubset<T, SliderContentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SliderContents and returns the data saved in the database.
     * @param {SliderContentCreateManyAndReturnArgs} args - Arguments to create many SliderContents.
     * @example
     * // Create many SliderContents
     * const sliderContent = await prisma.sliderContent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SliderContents and only return the `id`
     * const sliderContentWithIdOnly = await prisma.sliderContent.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SliderContentCreateManyAndReturnArgs>(args?: SelectSubset<T, SliderContentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SliderContentPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a SliderContent.
     * @param {SliderContentDeleteArgs} args - Arguments to delete one SliderContent.
     * @example
     * // Delete one SliderContent
     * const SliderContent = await prisma.sliderContent.delete({
     *   where: {
     *     // ... filter to delete one SliderContent
     *   }
     * })
     * 
     */
    delete<T extends SliderContentDeleteArgs>(args: SelectSubset<T, SliderContentDeleteArgs<ExtArgs>>): Prisma__SliderContentClient<$Result.GetResult<Prisma.$SliderContentPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one SliderContent.
     * @param {SliderContentUpdateArgs} args - Arguments to update one SliderContent.
     * @example
     * // Update one SliderContent
     * const sliderContent = await prisma.sliderContent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SliderContentUpdateArgs>(args: SelectSubset<T, SliderContentUpdateArgs<ExtArgs>>): Prisma__SliderContentClient<$Result.GetResult<Prisma.$SliderContentPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more SliderContents.
     * @param {SliderContentDeleteManyArgs} args - Arguments to filter SliderContents to delete.
     * @example
     * // Delete a few SliderContents
     * const { count } = await prisma.sliderContent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SliderContentDeleteManyArgs>(args?: SelectSubset<T, SliderContentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SliderContents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SliderContentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SliderContents
     * const sliderContent = await prisma.sliderContent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SliderContentUpdateManyArgs>(args: SelectSubset<T, SliderContentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SliderContent.
     * @param {SliderContentUpsertArgs} args - Arguments to update or create a SliderContent.
     * @example
     * // Update or create a SliderContent
     * const sliderContent = await prisma.sliderContent.upsert({
     *   create: {
     *     // ... data to create a SliderContent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SliderContent we want to update
     *   }
     * })
     */
    upsert<T extends SliderContentUpsertArgs>(args: SelectSubset<T, SliderContentUpsertArgs<ExtArgs>>): Prisma__SliderContentClient<$Result.GetResult<Prisma.$SliderContentPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of SliderContents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SliderContentCountArgs} args - Arguments to filter SliderContents to count.
     * @example
     * // Count the number of SliderContents
     * const count = await prisma.sliderContent.count({
     *   where: {
     *     // ... the filter for the SliderContents we want to count
     *   }
     * })
    **/
    count<T extends SliderContentCountArgs>(
      args?: Subset<T, SliderContentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SliderContentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SliderContent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SliderContentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SliderContentAggregateArgs>(args: Subset<T, SliderContentAggregateArgs>): Prisma.PrismaPromise<GetSliderContentAggregateType<T>>

    /**
     * Group by SliderContent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SliderContentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SliderContentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SliderContentGroupByArgs['orderBy'] }
        : { orderBy?: SliderContentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SliderContentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSliderContentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SliderContent model
   */
  readonly fields: SliderContentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SliderContent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SliderContentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SliderContent model
   */ 
  interface SliderContentFieldRefs {
    readonly id: FieldRef<"SliderContent", 'String'>
    readonly title: FieldRef<"SliderContent", 'String'>
    readonly shortDescription: FieldRef<"SliderContent", 'String'>
    readonly imageUrl: FieldRef<"SliderContent", 'String'>
    readonly sorting: FieldRef<"SliderContent", 'Int'>
    readonly status: FieldRef<"SliderContent", 'Boolean'>
    readonly createdAt: FieldRef<"SliderContent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SliderContent findUnique
   */
  export type SliderContentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SliderContent
     */
    select?: SliderContentSelect<ExtArgs> | null
    /**
     * Filter, which SliderContent to fetch.
     */
    where: SliderContentWhereUniqueInput
  }

  /**
   * SliderContent findUniqueOrThrow
   */
  export type SliderContentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SliderContent
     */
    select?: SliderContentSelect<ExtArgs> | null
    /**
     * Filter, which SliderContent to fetch.
     */
    where: SliderContentWhereUniqueInput
  }

  /**
   * SliderContent findFirst
   */
  export type SliderContentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SliderContent
     */
    select?: SliderContentSelect<ExtArgs> | null
    /**
     * Filter, which SliderContent to fetch.
     */
    where?: SliderContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SliderContents to fetch.
     */
    orderBy?: SliderContentOrderByWithRelationInput | SliderContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SliderContents.
     */
    cursor?: SliderContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SliderContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SliderContents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SliderContents.
     */
    distinct?: SliderContentScalarFieldEnum | SliderContentScalarFieldEnum[]
  }

  /**
   * SliderContent findFirstOrThrow
   */
  export type SliderContentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SliderContent
     */
    select?: SliderContentSelect<ExtArgs> | null
    /**
     * Filter, which SliderContent to fetch.
     */
    where?: SliderContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SliderContents to fetch.
     */
    orderBy?: SliderContentOrderByWithRelationInput | SliderContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SliderContents.
     */
    cursor?: SliderContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SliderContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SliderContents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SliderContents.
     */
    distinct?: SliderContentScalarFieldEnum | SliderContentScalarFieldEnum[]
  }

  /**
   * SliderContent findMany
   */
  export type SliderContentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SliderContent
     */
    select?: SliderContentSelect<ExtArgs> | null
    /**
     * Filter, which SliderContents to fetch.
     */
    where?: SliderContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SliderContents to fetch.
     */
    orderBy?: SliderContentOrderByWithRelationInput | SliderContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SliderContents.
     */
    cursor?: SliderContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SliderContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SliderContents.
     */
    skip?: number
    distinct?: SliderContentScalarFieldEnum | SliderContentScalarFieldEnum[]
  }

  /**
   * SliderContent create
   */
  export type SliderContentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SliderContent
     */
    select?: SliderContentSelect<ExtArgs> | null
    /**
     * The data needed to create a SliderContent.
     */
    data: XOR<SliderContentCreateInput, SliderContentUncheckedCreateInput>
  }

  /**
   * SliderContent createMany
   */
  export type SliderContentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SliderContents.
     */
    data: SliderContentCreateManyInput | SliderContentCreateManyInput[]
  }

  /**
   * SliderContent createManyAndReturn
   */
  export type SliderContentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SliderContent
     */
    select?: SliderContentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many SliderContents.
     */
    data: SliderContentCreateManyInput | SliderContentCreateManyInput[]
  }

  /**
   * SliderContent update
   */
  export type SliderContentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SliderContent
     */
    select?: SliderContentSelect<ExtArgs> | null
    /**
     * The data needed to update a SliderContent.
     */
    data: XOR<SliderContentUpdateInput, SliderContentUncheckedUpdateInput>
    /**
     * Choose, which SliderContent to update.
     */
    where: SliderContentWhereUniqueInput
  }

  /**
   * SliderContent updateMany
   */
  export type SliderContentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SliderContents.
     */
    data: XOR<SliderContentUpdateManyMutationInput, SliderContentUncheckedUpdateManyInput>
    /**
     * Filter which SliderContents to update
     */
    where?: SliderContentWhereInput
  }

  /**
   * SliderContent upsert
   */
  export type SliderContentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SliderContent
     */
    select?: SliderContentSelect<ExtArgs> | null
    /**
     * The filter to search for the SliderContent to update in case it exists.
     */
    where: SliderContentWhereUniqueInput
    /**
     * In case the SliderContent found by the `where` argument doesn't exist, create a new SliderContent with this data.
     */
    create: XOR<SliderContentCreateInput, SliderContentUncheckedCreateInput>
    /**
     * In case the SliderContent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SliderContentUpdateInput, SliderContentUncheckedUpdateInput>
  }

  /**
   * SliderContent delete
   */
  export type SliderContentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SliderContent
     */
    select?: SliderContentSelect<ExtArgs> | null
    /**
     * Filter which SliderContent to delete.
     */
    where: SliderContentWhereUniqueInput
  }

  /**
   * SliderContent deleteMany
   */
  export type SliderContentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SliderContents to delete
     */
    where?: SliderContentWhereInput
  }

  /**
   * SliderContent without action
   */
  export type SliderContentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SliderContent
     */
    select?: SliderContentSelect<ExtArgs> | null
  }


  /**
   * Model Admin
   */

  export type AggregateAdmin = {
    _count: AdminCountAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  export type AdminMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    resetCode: string | null
    resetCodeExpires: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdminMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    resetCode: string | null
    resetCodeExpires: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdminCountAggregateOutputType = {
    id: number
    email: number
    password: number
    resetCode: number
    resetCodeExpires: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AdminMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    resetCode?: true
    resetCodeExpires?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdminMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    resetCode?: true
    resetCodeExpires?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdminCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    resetCode?: true
    resetCodeExpires?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admin to aggregate.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Admins
    **/
    _count?: true | AdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminMaxAggregateInputType
  }

  export type GetAdminAggregateType<T extends AdminAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin[P]>
      : GetScalarType<T[P], AggregateAdmin[P]>
  }




  export type AdminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminWhereInput
    orderBy?: AdminOrderByWithAggregationInput | AdminOrderByWithAggregationInput[]
    by: AdminScalarFieldEnum[] | AdminScalarFieldEnum
    having?: AdminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminCountAggregateInputType | true
    _min?: AdminMinAggregateInputType
    _max?: AdminMaxAggregateInputType
  }

  export type AdminGroupByOutputType = {
    id: string
    email: string
    password: string
    resetCode: string | null
    resetCodeExpires: Date | null
    createdAt: Date
    updatedAt: Date
    _count: AdminCountAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  type GetAdminGroupByPayload<T extends AdminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminGroupByOutputType[P]>
            : GetScalarType<T[P], AdminGroupByOutputType[P]>
        }
      >
    >


  export type AdminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    resetCode?: boolean
    resetCodeExpires?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    resetCode?: boolean
    resetCodeExpires?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    resetCode?: boolean
    resetCodeExpires?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $AdminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Admin"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      resetCode: string | null
      resetCodeExpires: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["admin"]>
    composites: {}
  }

  type AdminGetPayload<S extends boolean | null | undefined | AdminDefaultArgs> = $Result.GetResult<Prisma.$AdminPayload, S>

  type AdminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AdminFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AdminCountAggregateInputType | true
    }

  export interface AdminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Admin'], meta: { name: 'Admin' } }
    /**
     * Find zero or one Admin that matches the filter.
     * @param {AdminFindUniqueArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminFindUniqueArgs>(args: SelectSubset<T, AdminFindUniqueArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Admin that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AdminFindUniqueOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Admin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminFindFirstArgs>(args?: SelectSubset<T, AdminFindFirstArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Admin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admin.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminWithIdOnly = await prisma.admin.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdminFindManyArgs>(args?: SelectSubset<T, AdminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Admin.
     * @param {AdminCreateArgs} args - Arguments to create a Admin.
     * @example
     * // Create one Admin
     * const Admin = await prisma.admin.create({
     *   data: {
     *     // ... data to create a Admin
     *   }
     * })
     * 
     */
    create<T extends AdminCreateArgs>(args: SelectSubset<T, AdminCreateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Admins.
     * @param {AdminCreateManyArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminCreateManyArgs>(args?: SelectSubset<T, AdminCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Admins and returns the data saved in the database.
     * @param {AdminCreateManyAndReturnArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Admins and only return the `id`
     * const adminWithIdOnly = await prisma.admin.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdminCreateManyAndReturnArgs>(args?: SelectSubset<T, AdminCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Admin.
     * @param {AdminDeleteArgs} args - Arguments to delete one Admin.
     * @example
     * // Delete one Admin
     * const Admin = await prisma.admin.delete({
     *   where: {
     *     // ... filter to delete one Admin
     *   }
     * })
     * 
     */
    delete<T extends AdminDeleteArgs>(args: SelectSubset<T, AdminDeleteArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Admin.
     * @param {AdminUpdateArgs} args - Arguments to update one Admin.
     * @example
     * // Update one Admin
     * const admin = await prisma.admin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminUpdateArgs>(args: SelectSubset<T, AdminUpdateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Admins.
     * @param {AdminDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminDeleteManyArgs>(args?: SelectSubset<T, AdminDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminUpdateManyArgs>(args: SelectSubset<T, AdminUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Admin.
     * @param {AdminUpsertArgs} args - Arguments to update or create a Admin.
     * @example
     * // Update or create a Admin
     * const admin = await prisma.admin.upsert({
     *   create: {
     *     // ... data to create a Admin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin we want to update
     *   }
     * })
     */
    upsert<T extends AdminUpsertArgs>(args: SelectSubset<T, AdminUpsertArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admin.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends AdminCountArgs>(
      args?: Subset<T, AdminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdminAggregateArgs>(args: Subset<T, AdminAggregateArgs>): Prisma.PrismaPromise<GetAdminAggregateType<T>>

    /**
     * Group by Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AdminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminGroupByArgs['orderBy'] }
        : { orderBy?: AdminGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AdminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Admin model
   */
  readonly fields: AdminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Admin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Admin model
   */ 
  interface AdminFieldRefs {
    readonly id: FieldRef<"Admin", 'String'>
    readonly email: FieldRef<"Admin", 'String'>
    readonly password: FieldRef<"Admin", 'String'>
    readonly resetCode: FieldRef<"Admin", 'String'>
    readonly resetCodeExpires: FieldRef<"Admin", 'DateTime'>
    readonly createdAt: FieldRef<"Admin", 'DateTime'>
    readonly updatedAt: FieldRef<"Admin", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Admin findUnique
   */
  export type AdminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findUniqueOrThrow
   */
  export type AdminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findFirst
   */
  export type AdminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findFirstOrThrow
   */
  export type AdminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findMany
   */
  export type AdminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Filter, which Admins to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin create
   */
  export type AdminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * The data needed to create a Admin.
     */
    data: XOR<AdminCreateInput, AdminUncheckedCreateInput>
  }

  /**
   * Admin createMany
   */
  export type AdminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
  }

  /**
   * Admin createManyAndReturn
   */
  export type AdminCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
  }

  /**
   * Admin update
   */
  export type AdminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * The data needed to update a Admin.
     */
    data: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
    /**
     * Choose, which Admin to update.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin updateMany
   */
  export type AdminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
  }

  /**
   * Admin upsert
   */
  export type AdminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * The filter to search for the Admin to update in case it exists.
     */
    where: AdminWhereUniqueInput
    /**
     * In case the Admin found by the `where` argument doesn't exist, create a new Admin with this data.
     */
    create: XOR<AdminCreateInput, AdminUncheckedCreateInput>
    /**
     * In case the Admin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
  }

  /**
   * Admin delete
   */
  export type AdminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Filter which Admin to delete.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin deleteMany
   */
  export type AdminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admins to delete
     */
    where?: AdminWhereInput
  }

  /**
   * Admin without action
   */
  export type AdminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
  }


  /**
   * Model SiteVisit
   */

  export type AggregateSiteVisit = {
    _count: SiteVisitCountAggregateOutputType | null
    _min: SiteVisitMinAggregateOutputType | null
    _max: SiteVisitMaxAggregateOutputType | null
  }

  export type SiteVisitMinAggregateOutputType = {
    id: string | null
    path: string | null
    ipHash: string | null
    createdAt: Date | null
  }

  export type SiteVisitMaxAggregateOutputType = {
    id: string | null
    path: string | null
    ipHash: string | null
    createdAt: Date | null
  }

  export type SiteVisitCountAggregateOutputType = {
    id: number
    path: number
    ipHash: number
    createdAt: number
    _all: number
  }


  export type SiteVisitMinAggregateInputType = {
    id?: true
    path?: true
    ipHash?: true
    createdAt?: true
  }

  export type SiteVisitMaxAggregateInputType = {
    id?: true
    path?: true
    ipHash?: true
    createdAt?: true
  }

  export type SiteVisitCountAggregateInputType = {
    id?: true
    path?: true
    ipHash?: true
    createdAt?: true
    _all?: true
  }

  export type SiteVisitAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SiteVisit to aggregate.
     */
    where?: SiteVisitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SiteVisits to fetch.
     */
    orderBy?: SiteVisitOrderByWithRelationInput | SiteVisitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SiteVisitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SiteVisits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SiteVisits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SiteVisits
    **/
    _count?: true | SiteVisitCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SiteVisitMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SiteVisitMaxAggregateInputType
  }

  export type GetSiteVisitAggregateType<T extends SiteVisitAggregateArgs> = {
        [P in keyof T & keyof AggregateSiteVisit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSiteVisit[P]>
      : GetScalarType<T[P], AggregateSiteVisit[P]>
  }




  export type SiteVisitGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SiteVisitWhereInput
    orderBy?: SiteVisitOrderByWithAggregationInput | SiteVisitOrderByWithAggregationInput[]
    by: SiteVisitScalarFieldEnum[] | SiteVisitScalarFieldEnum
    having?: SiteVisitScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SiteVisitCountAggregateInputType | true
    _min?: SiteVisitMinAggregateInputType
    _max?: SiteVisitMaxAggregateInputType
  }

  export type SiteVisitGroupByOutputType = {
    id: string
    path: string
    ipHash: string | null
    createdAt: Date
    _count: SiteVisitCountAggregateOutputType | null
    _min: SiteVisitMinAggregateOutputType | null
    _max: SiteVisitMaxAggregateOutputType | null
  }

  type GetSiteVisitGroupByPayload<T extends SiteVisitGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SiteVisitGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SiteVisitGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SiteVisitGroupByOutputType[P]>
            : GetScalarType<T[P], SiteVisitGroupByOutputType[P]>
        }
      >
    >


  export type SiteVisitSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    path?: boolean
    ipHash?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["siteVisit"]>

  export type SiteVisitSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    path?: boolean
    ipHash?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["siteVisit"]>

  export type SiteVisitSelectScalar = {
    id?: boolean
    path?: boolean
    ipHash?: boolean
    createdAt?: boolean
  }


  export type $SiteVisitPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SiteVisit"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      path: string
      ipHash: string | null
      createdAt: Date
    }, ExtArgs["result"]["siteVisit"]>
    composites: {}
  }

  type SiteVisitGetPayload<S extends boolean | null | undefined | SiteVisitDefaultArgs> = $Result.GetResult<Prisma.$SiteVisitPayload, S>

  type SiteVisitCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SiteVisitFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SiteVisitCountAggregateInputType | true
    }

  export interface SiteVisitDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SiteVisit'], meta: { name: 'SiteVisit' } }
    /**
     * Find zero or one SiteVisit that matches the filter.
     * @param {SiteVisitFindUniqueArgs} args - Arguments to find a SiteVisit
     * @example
     * // Get one SiteVisit
     * const siteVisit = await prisma.siteVisit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SiteVisitFindUniqueArgs>(args: SelectSubset<T, SiteVisitFindUniqueArgs<ExtArgs>>): Prisma__SiteVisitClient<$Result.GetResult<Prisma.$SiteVisitPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one SiteVisit that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SiteVisitFindUniqueOrThrowArgs} args - Arguments to find a SiteVisit
     * @example
     * // Get one SiteVisit
     * const siteVisit = await prisma.siteVisit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SiteVisitFindUniqueOrThrowArgs>(args: SelectSubset<T, SiteVisitFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SiteVisitClient<$Result.GetResult<Prisma.$SiteVisitPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first SiteVisit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteVisitFindFirstArgs} args - Arguments to find a SiteVisit
     * @example
     * // Get one SiteVisit
     * const siteVisit = await prisma.siteVisit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SiteVisitFindFirstArgs>(args?: SelectSubset<T, SiteVisitFindFirstArgs<ExtArgs>>): Prisma__SiteVisitClient<$Result.GetResult<Prisma.$SiteVisitPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first SiteVisit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteVisitFindFirstOrThrowArgs} args - Arguments to find a SiteVisit
     * @example
     * // Get one SiteVisit
     * const siteVisit = await prisma.siteVisit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SiteVisitFindFirstOrThrowArgs>(args?: SelectSubset<T, SiteVisitFindFirstOrThrowArgs<ExtArgs>>): Prisma__SiteVisitClient<$Result.GetResult<Prisma.$SiteVisitPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more SiteVisits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteVisitFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SiteVisits
     * const siteVisits = await prisma.siteVisit.findMany()
     * 
     * // Get first 10 SiteVisits
     * const siteVisits = await prisma.siteVisit.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const siteVisitWithIdOnly = await prisma.siteVisit.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SiteVisitFindManyArgs>(args?: SelectSubset<T, SiteVisitFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SiteVisitPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a SiteVisit.
     * @param {SiteVisitCreateArgs} args - Arguments to create a SiteVisit.
     * @example
     * // Create one SiteVisit
     * const SiteVisit = await prisma.siteVisit.create({
     *   data: {
     *     // ... data to create a SiteVisit
     *   }
     * })
     * 
     */
    create<T extends SiteVisitCreateArgs>(args: SelectSubset<T, SiteVisitCreateArgs<ExtArgs>>): Prisma__SiteVisitClient<$Result.GetResult<Prisma.$SiteVisitPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many SiteVisits.
     * @param {SiteVisitCreateManyArgs} args - Arguments to create many SiteVisits.
     * @example
     * // Create many SiteVisits
     * const siteVisit = await prisma.siteVisit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SiteVisitCreateManyArgs>(args?: SelectSubset<T, SiteVisitCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SiteVisits and returns the data saved in the database.
     * @param {SiteVisitCreateManyAndReturnArgs} args - Arguments to create many SiteVisits.
     * @example
     * // Create many SiteVisits
     * const siteVisit = await prisma.siteVisit.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SiteVisits and only return the `id`
     * const siteVisitWithIdOnly = await prisma.siteVisit.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SiteVisitCreateManyAndReturnArgs>(args?: SelectSubset<T, SiteVisitCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SiteVisitPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a SiteVisit.
     * @param {SiteVisitDeleteArgs} args - Arguments to delete one SiteVisit.
     * @example
     * // Delete one SiteVisit
     * const SiteVisit = await prisma.siteVisit.delete({
     *   where: {
     *     // ... filter to delete one SiteVisit
     *   }
     * })
     * 
     */
    delete<T extends SiteVisitDeleteArgs>(args: SelectSubset<T, SiteVisitDeleteArgs<ExtArgs>>): Prisma__SiteVisitClient<$Result.GetResult<Prisma.$SiteVisitPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one SiteVisit.
     * @param {SiteVisitUpdateArgs} args - Arguments to update one SiteVisit.
     * @example
     * // Update one SiteVisit
     * const siteVisit = await prisma.siteVisit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SiteVisitUpdateArgs>(args: SelectSubset<T, SiteVisitUpdateArgs<ExtArgs>>): Prisma__SiteVisitClient<$Result.GetResult<Prisma.$SiteVisitPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more SiteVisits.
     * @param {SiteVisitDeleteManyArgs} args - Arguments to filter SiteVisits to delete.
     * @example
     * // Delete a few SiteVisits
     * const { count } = await prisma.siteVisit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SiteVisitDeleteManyArgs>(args?: SelectSubset<T, SiteVisitDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SiteVisits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteVisitUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SiteVisits
     * const siteVisit = await prisma.siteVisit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SiteVisitUpdateManyArgs>(args: SelectSubset<T, SiteVisitUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SiteVisit.
     * @param {SiteVisitUpsertArgs} args - Arguments to update or create a SiteVisit.
     * @example
     * // Update or create a SiteVisit
     * const siteVisit = await prisma.siteVisit.upsert({
     *   create: {
     *     // ... data to create a SiteVisit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SiteVisit we want to update
     *   }
     * })
     */
    upsert<T extends SiteVisitUpsertArgs>(args: SelectSubset<T, SiteVisitUpsertArgs<ExtArgs>>): Prisma__SiteVisitClient<$Result.GetResult<Prisma.$SiteVisitPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of SiteVisits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteVisitCountArgs} args - Arguments to filter SiteVisits to count.
     * @example
     * // Count the number of SiteVisits
     * const count = await prisma.siteVisit.count({
     *   where: {
     *     // ... the filter for the SiteVisits we want to count
     *   }
     * })
    **/
    count<T extends SiteVisitCountArgs>(
      args?: Subset<T, SiteVisitCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SiteVisitCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SiteVisit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteVisitAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SiteVisitAggregateArgs>(args: Subset<T, SiteVisitAggregateArgs>): Prisma.PrismaPromise<GetSiteVisitAggregateType<T>>

    /**
     * Group by SiteVisit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteVisitGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SiteVisitGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SiteVisitGroupByArgs['orderBy'] }
        : { orderBy?: SiteVisitGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SiteVisitGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSiteVisitGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SiteVisit model
   */
  readonly fields: SiteVisitFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SiteVisit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SiteVisitClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SiteVisit model
   */ 
  interface SiteVisitFieldRefs {
    readonly id: FieldRef<"SiteVisit", 'String'>
    readonly path: FieldRef<"SiteVisit", 'String'>
    readonly ipHash: FieldRef<"SiteVisit", 'String'>
    readonly createdAt: FieldRef<"SiteVisit", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SiteVisit findUnique
   */
  export type SiteVisitFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteVisit
     */
    select?: SiteVisitSelect<ExtArgs> | null
    /**
     * Filter, which SiteVisit to fetch.
     */
    where: SiteVisitWhereUniqueInput
  }

  /**
   * SiteVisit findUniqueOrThrow
   */
  export type SiteVisitFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteVisit
     */
    select?: SiteVisitSelect<ExtArgs> | null
    /**
     * Filter, which SiteVisit to fetch.
     */
    where: SiteVisitWhereUniqueInput
  }

  /**
   * SiteVisit findFirst
   */
  export type SiteVisitFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteVisit
     */
    select?: SiteVisitSelect<ExtArgs> | null
    /**
     * Filter, which SiteVisit to fetch.
     */
    where?: SiteVisitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SiteVisits to fetch.
     */
    orderBy?: SiteVisitOrderByWithRelationInput | SiteVisitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SiteVisits.
     */
    cursor?: SiteVisitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SiteVisits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SiteVisits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SiteVisits.
     */
    distinct?: SiteVisitScalarFieldEnum | SiteVisitScalarFieldEnum[]
  }

  /**
   * SiteVisit findFirstOrThrow
   */
  export type SiteVisitFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteVisit
     */
    select?: SiteVisitSelect<ExtArgs> | null
    /**
     * Filter, which SiteVisit to fetch.
     */
    where?: SiteVisitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SiteVisits to fetch.
     */
    orderBy?: SiteVisitOrderByWithRelationInput | SiteVisitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SiteVisits.
     */
    cursor?: SiteVisitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SiteVisits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SiteVisits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SiteVisits.
     */
    distinct?: SiteVisitScalarFieldEnum | SiteVisitScalarFieldEnum[]
  }

  /**
   * SiteVisit findMany
   */
  export type SiteVisitFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteVisit
     */
    select?: SiteVisitSelect<ExtArgs> | null
    /**
     * Filter, which SiteVisits to fetch.
     */
    where?: SiteVisitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SiteVisits to fetch.
     */
    orderBy?: SiteVisitOrderByWithRelationInput | SiteVisitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SiteVisits.
     */
    cursor?: SiteVisitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SiteVisits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SiteVisits.
     */
    skip?: number
    distinct?: SiteVisitScalarFieldEnum | SiteVisitScalarFieldEnum[]
  }

  /**
   * SiteVisit create
   */
  export type SiteVisitCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteVisit
     */
    select?: SiteVisitSelect<ExtArgs> | null
    /**
     * The data needed to create a SiteVisit.
     */
    data: XOR<SiteVisitCreateInput, SiteVisitUncheckedCreateInput>
  }

  /**
   * SiteVisit createMany
   */
  export type SiteVisitCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SiteVisits.
     */
    data: SiteVisitCreateManyInput | SiteVisitCreateManyInput[]
  }

  /**
   * SiteVisit createManyAndReturn
   */
  export type SiteVisitCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteVisit
     */
    select?: SiteVisitSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many SiteVisits.
     */
    data: SiteVisitCreateManyInput | SiteVisitCreateManyInput[]
  }

  /**
   * SiteVisit update
   */
  export type SiteVisitUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteVisit
     */
    select?: SiteVisitSelect<ExtArgs> | null
    /**
     * The data needed to update a SiteVisit.
     */
    data: XOR<SiteVisitUpdateInput, SiteVisitUncheckedUpdateInput>
    /**
     * Choose, which SiteVisit to update.
     */
    where: SiteVisitWhereUniqueInput
  }

  /**
   * SiteVisit updateMany
   */
  export type SiteVisitUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SiteVisits.
     */
    data: XOR<SiteVisitUpdateManyMutationInput, SiteVisitUncheckedUpdateManyInput>
    /**
     * Filter which SiteVisits to update
     */
    where?: SiteVisitWhereInput
  }

  /**
   * SiteVisit upsert
   */
  export type SiteVisitUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteVisit
     */
    select?: SiteVisitSelect<ExtArgs> | null
    /**
     * The filter to search for the SiteVisit to update in case it exists.
     */
    where: SiteVisitWhereUniqueInput
    /**
     * In case the SiteVisit found by the `where` argument doesn't exist, create a new SiteVisit with this data.
     */
    create: XOR<SiteVisitCreateInput, SiteVisitUncheckedCreateInput>
    /**
     * In case the SiteVisit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SiteVisitUpdateInput, SiteVisitUncheckedUpdateInput>
  }

  /**
   * SiteVisit delete
   */
  export type SiteVisitDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteVisit
     */
    select?: SiteVisitSelect<ExtArgs> | null
    /**
     * Filter which SiteVisit to delete.
     */
    where: SiteVisitWhereUniqueInput
  }

  /**
   * SiteVisit deleteMany
   */
  export type SiteVisitDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SiteVisits to delete
     */
    where?: SiteVisitWhereInput
  }

  /**
   * SiteVisit without action
   */
  export type SiteVisitDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteVisit
     */
    select?: SiteVisitSelect<ExtArgs> | null
  }


  /**
   * Model BlogCategory
   */

  export type AggregateBlogCategory = {
    _count: BlogCategoryCountAggregateOutputType | null
    _min: BlogCategoryMinAggregateOutputType | null
    _max: BlogCategoryMaxAggregateOutputType | null
  }

  export type BlogCategoryMinAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    status: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BlogCategoryMaxAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    status: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BlogCategoryCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BlogCategoryMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BlogCategoryMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BlogCategoryCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BlogCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BlogCategory to aggregate.
     */
    where?: BlogCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogCategories to fetch.
     */
    orderBy?: BlogCategoryOrderByWithRelationInput | BlogCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BlogCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BlogCategories
    **/
    _count?: true | BlogCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BlogCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BlogCategoryMaxAggregateInputType
  }

  export type GetBlogCategoryAggregateType<T extends BlogCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateBlogCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBlogCategory[P]>
      : GetScalarType<T[P], AggregateBlogCategory[P]>
  }




  export type BlogCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlogCategoryWhereInput
    orderBy?: BlogCategoryOrderByWithAggregationInput | BlogCategoryOrderByWithAggregationInput[]
    by: BlogCategoryScalarFieldEnum[] | BlogCategoryScalarFieldEnum
    having?: BlogCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BlogCategoryCountAggregateInputType | true
    _min?: BlogCategoryMinAggregateInputType
    _max?: BlogCategoryMaxAggregateInputType
  }

  export type BlogCategoryGroupByOutputType = {
    id: string
    name: string
    slug: string
    status: boolean
    createdAt: Date
    updatedAt: Date
    _count: BlogCategoryCountAggregateOutputType | null
    _min: BlogCategoryMinAggregateOutputType | null
    _max: BlogCategoryMaxAggregateOutputType | null
  }

  type GetBlogCategoryGroupByPayload<T extends BlogCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BlogCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BlogCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BlogCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], BlogCategoryGroupByOutputType[P]>
        }
      >
    >


  export type BlogCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    subcategories?: boolean | BlogCategory$subcategoriesArgs<ExtArgs>
    blogs?: boolean | BlogCategory$blogsArgs<ExtArgs>
    _count?: boolean | BlogCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blogCategory"]>

  export type BlogCategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["blogCategory"]>

  export type BlogCategorySelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BlogCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subcategories?: boolean | BlogCategory$subcategoriesArgs<ExtArgs>
    blogs?: boolean | BlogCategory$blogsArgs<ExtArgs>
    _count?: boolean | BlogCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BlogCategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $BlogCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BlogCategory"
    objects: {
      subcategories: Prisma.$BlogSubCategoryPayload<ExtArgs>[]
      blogs: Prisma.$BlogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      slug: string
      status: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["blogCategory"]>
    composites: {}
  }

  type BlogCategoryGetPayload<S extends boolean | null | undefined | BlogCategoryDefaultArgs> = $Result.GetResult<Prisma.$BlogCategoryPayload, S>

  type BlogCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BlogCategoryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BlogCategoryCountAggregateInputType | true
    }

  export interface BlogCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BlogCategory'], meta: { name: 'BlogCategory' } }
    /**
     * Find zero or one BlogCategory that matches the filter.
     * @param {BlogCategoryFindUniqueArgs} args - Arguments to find a BlogCategory
     * @example
     * // Get one BlogCategory
     * const blogCategory = await prisma.blogCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BlogCategoryFindUniqueArgs>(args: SelectSubset<T, BlogCategoryFindUniqueArgs<ExtArgs>>): Prisma__BlogCategoryClient<$Result.GetResult<Prisma.$BlogCategoryPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one BlogCategory that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {BlogCategoryFindUniqueOrThrowArgs} args - Arguments to find a BlogCategory
     * @example
     * // Get one BlogCategory
     * const blogCategory = await prisma.blogCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BlogCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, BlogCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BlogCategoryClient<$Result.GetResult<Prisma.$BlogCategoryPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first BlogCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogCategoryFindFirstArgs} args - Arguments to find a BlogCategory
     * @example
     * // Get one BlogCategory
     * const blogCategory = await prisma.blogCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BlogCategoryFindFirstArgs>(args?: SelectSubset<T, BlogCategoryFindFirstArgs<ExtArgs>>): Prisma__BlogCategoryClient<$Result.GetResult<Prisma.$BlogCategoryPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first BlogCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogCategoryFindFirstOrThrowArgs} args - Arguments to find a BlogCategory
     * @example
     * // Get one BlogCategory
     * const blogCategory = await prisma.blogCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BlogCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, BlogCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__BlogCategoryClient<$Result.GetResult<Prisma.$BlogCategoryPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more BlogCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BlogCategories
     * const blogCategories = await prisma.blogCategory.findMany()
     * 
     * // Get first 10 BlogCategories
     * const blogCategories = await prisma.blogCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const blogCategoryWithIdOnly = await prisma.blogCategory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BlogCategoryFindManyArgs>(args?: SelectSubset<T, BlogCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogCategoryPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a BlogCategory.
     * @param {BlogCategoryCreateArgs} args - Arguments to create a BlogCategory.
     * @example
     * // Create one BlogCategory
     * const BlogCategory = await prisma.blogCategory.create({
     *   data: {
     *     // ... data to create a BlogCategory
     *   }
     * })
     * 
     */
    create<T extends BlogCategoryCreateArgs>(args: SelectSubset<T, BlogCategoryCreateArgs<ExtArgs>>): Prisma__BlogCategoryClient<$Result.GetResult<Prisma.$BlogCategoryPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many BlogCategories.
     * @param {BlogCategoryCreateManyArgs} args - Arguments to create many BlogCategories.
     * @example
     * // Create many BlogCategories
     * const blogCategory = await prisma.blogCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BlogCategoryCreateManyArgs>(args?: SelectSubset<T, BlogCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BlogCategories and returns the data saved in the database.
     * @param {BlogCategoryCreateManyAndReturnArgs} args - Arguments to create many BlogCategories.
     * @example
     * // Create many BlogCategories
     * const blogCategory = await prisma.blogCategory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BlogCategories and only return the `id`
     * const blogCategoryWithIdOnly = await prisma.blogCategory.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BlogCategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, BlogCategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogCategoryPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a BlogCategory.
     * @param {BlogCategoryDeleteArgs} args - Arguments to delete one BlogCategory.
     * @example
     * // Delete one BlogCategory
     * const BlogCategory = await prisma.blogCategory.delete({
     *   where: {
     *     // ... filter to delete one BlogCategory
     *   }
     * })
     * 
     */
    delete<T extends BlogCategoryDeleteArgs>(args: SelectSubset<T, BlogCategoryDeleteArgs<ExtArgs>>): Prisma__BlogCategoryClient<$Result.GetResult<Prisma.$BlogCategoryPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one BlogCategory.
     * @param {BlogCategoryUpdateArgs} args - Arguments to update one BlogCategory.
     * @example
     * // Update one BlogCategory
     * const blogCategory = await prisma.blogCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BlogCategoryUpdateArgs>(args: SelectSubset<T, BlogCategoryUpdateArgs<ExtArgs>>): Prisma__BlogCategoryClient<$Result.GetResult<Prisma.$BlogCategoryPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more BlogCategories.
     * @param {BlogCategoryDeleteManyArgs} args - Arguments to filter BlogCategories to delete.
     * @example
     * // Delete a few BlogCategories
     * const { count } = await prisma.blogCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BlogCategoryDeleteManyArgs>(args?: SelectSubset<T, BlogCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BlogCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BlogCategories
     * const blogCategory = await prisma.blogCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BlogCategoryUpdateManyArgs>(args: SelectSubset<T, BlogCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one BlogCategory.
     * @param {BlogCategoryUpsertArgs} args - Arguments to update or create a BlogCategory.
     * @example
     * // Update or create a BlogCategory
     * const blogCategory = await prisma.blogCategory.upsert({
     *   create: {
     *     // ... data to create a BlogCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BlogCategory we want to update
     *   }
     * })
     */
    upsert<T extends BlogCategoryUpsertArgs>(args: SelectSubset<T, BlogCategoryUpsertArgs<ExtArgs>>): Prisma__BlogCategoryClient<$Result.GetResult<Prisma.$BlogCategoryPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of BlogCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogCategoryCountArgs} args - Arguments to filter BlogCategories to count.
     * @example
     * // Count the number of BlogCategories
     * const count = await prisma.blogCategory.count({
     *   where: {
     *     // ... the filter for the BlogCategories we want to count
     *   }
     * })
    **/
    count<T extends BlogCategoryCountArgs>(
      args?: Subset<T, BlogCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BlogCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BlogCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BlogCategoryAggregateArgs>(args: Subset<T, BlogCategoryAggregateArgs>): Prisma.PrismaPromise<GetBlogCategoryAggregateType<T>>

    /**
     * Group by BlogCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogCategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BlogCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BlogCategoryGroupByArgs['orderBy'] }
        : { orderBy?: BlogCategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BlogCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBlogCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BlogCategory model
   */
  readonly fields: BlogCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BlogCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BlogCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    subcategories<T extends BlogCategory$subcategoriesArgs<ExtArgs> = {}>(args?: Subset<T, BlogCategory$subcategoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogSubCategoryPayload<ExtArgs>, T, "findMany"> | Null>
    blogs<T extends BlogCategory$blogsArgs<ExtArgs> = {}>(args?: Subset<T, BlogCategory$blogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BlogCategory model
   */ 
  interface BlogCategoryFieldRefs {
    readonly id: FieldRef<"BlogCategory", 'String'>
    readonly name: FieldRef<"BlogCategory", 'String'>
    readonly slug: FieldRef<"BlogCategory", 'String'>
    readonly status: FieldRef<"BlogCategory", 'Boolean'>
    readonly createdAt: FieldRef<"BlogCategory", 'DateTime'>
    readonly updatedAt: FieldRef<"BlogCategory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BlogCategory findUnique
   */
  export type BlogCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogCategory
     */
    select?: BlogCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogCategoryInclude<ExtArgs> | null
    /**
     * Filter, which BlogCategory to fetch.
     */
    where: BlogCategoryWhereUniqueInput
  }

  /**
   * BlogCategory findUniqueOrThrow
   */
  export type BlogCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogCategory
     */
    select?: BlogCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogCategoryInclude<ExtArgs> | null
    /**
     * Filter, which BlogCategory to fetch.
     */
    where: BlogCategoryWhereUniqueInput
  }

  /**
   * BlogCategory findFirst
   */
  export type BlogCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogCategory
     */
    select?: BlogCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogCategoryInclude<ExtArgs> | null
    /**
     * Filter, which BlogCategory to fetch.
     */
    where?: BlogCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogCategories to fetch.
     */
    orderBy?: BlogCategoryOrderByWithRelationInput | BlogCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BlogCategories.
     */
    cursor?: BlogCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlogCategories.
     */
    distinct?: BlogCategoryScalarFieldEnum | BlogCategoryScalarFieldEnum[]
  }

  /**
   * BlogCategory findFirstOrThrow
   */
  export type BlogCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogCategory
     */
    select?: BlogCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogCategoryInclude<ExtArgs> | null
    /**
     * Filter, which BlogCategory to fetch.
     */
    where?: BlogCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogCategories to fetch.
     */
    orderBy?: BlogCategoryOrderByWithRelationInput | BlogCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BlogCategories.
     */
    cursor?: BlogCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlogCategories.
     */
    distinct?: BlogCategoryScalarFieldEnum | BlogCategoryScalarFieldEnum[]
  }

  /**
   * BlogCategory findMany
   */
  export type BlogCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogCategory
     */
    select?: BlogCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogCategoryInclude<ExtArgs> | null
    /**
     * Filter, which BlogCategories to fetch.
     */
    where?: BlogCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogCategories to fetch.
     */
    orderBy?: BlogCategoryOrderByWithRelationInput | BlogCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BlogCategories.
     */
    cursor?: BlogCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogCategories.
     */
    skip?: number
    distinct?: BlogCategoryScalarFieldEnum | BlogCategoryScalarFieldEnum[]
  }

  /**
   * BlogCategory create
   */
  export type BlogCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogCategory
     */
    select?: BlogCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a BlogCategory.
     */
    data: XOR<BlogCategoryCreateInput, BlogCategoryUncheckedCreateInput>
  }

  /**
   * BlogCategory createMany
   */
  export type BlogCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BlogCategories.
     */
    data: BlogCategoryCreateManyInput | BlogCategoryCreateManyInput[]
  }

  /**
   * BlogCategory createManyAndReturn
   */
  export type BlogCategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogCategory
     */
    select?: BlogCategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many BlogCategories.
     */
    data: BlogCategoryCreateManyInput | BlogCategoryCreateManyInput[]
  }

  /**
   * BlogCategory update
   */
  export type BlogCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogCategory
     */
    select?: BlogCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a BlogCategory.
     */
    data: XOR<BlogCategoryUpdateInput, BlogCategoryUncheckedUpdateInput>
    /**
     * Choose, which BlogCategory to update.
     */
    where: BlogCategoryWhereUniqueInput
  }

  /**
   * BlogCategory updateMany
   */
  export type BlogCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BlogCategories.
     */
    data: XOR<BlogCategoryUpdateManyMutationInput, BlogCategoryUncheckedUpdateManyInput>
    /**
     * Filter which BlogCategories to update
     */
    where?: BlogCategoryWhereInput
  }

  /**
   * BlogCategory upsert
   */
  export type BlogCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogCategory
     */
    select?: BlogCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the BlogCategory to update in case it exists.
     */
    where: BlogCategoryWhereUniqueInput
    /**
     * In case the BlogCategory found by the `where` argument doesn't exist, create a new BlogCategory with this data.
     */
    create: XOR<BlogCategoryCreateInput, BlogCategoryUncheckedCreateInput>
    /**
     * In case the BlogCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BlogCategoryUpdateInput, BlogCategoryUncheckedUpdateInput>
  }

  /**
   * BlogCategory delete
   */
  export type BlogCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogCategory
     */
    select?: BlogCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogCategoryInclude<ExtArgs> | null
    /**
     * Filter which BlogCategory to delete.
     */
    where: BlogCategoryWhereUniqueInput
  }

  /**
   * BlogCategory deleteMany
   */
  export type BlogCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BlogCategories to delete
     */
    where?: BlogCategoryWhereInput
  }

  /**
   * BlogCategory.subcategories
   */
  export type BlogCategory$subcategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogSubCategory
     */
    select?: BlogSubCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogSubCategoryInclude<ExtArgs> | null
    where?: BlogSubCategoryWhereInput
    orderBy?: BlogSubCategoryOrderByWithRelationInput | BlogSubCategoryOrderByWithRelationInput[]
    cursor?: BlogSubCategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BlogSubCategoryScalarFieldEnum | BlogSubCategoryScalarFieldEnum[]
  }

  /**
   * BlogCategory.blogs
   */
  export type BlogCategory$blogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogInclude<ExtArgs> | null
    where?: BlogWhereInput
    orderBy?: BlogOrderByWithRelationInput | BlogOrderByWithRelationInput[]
    cursor?: BlogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BlogScalarFieldEnum | BlogScalarFieldEnum[]
  }

  /**
   * BlogCategory without action
   */
  export type BlogCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogCategory
     */
    select?: BlogCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogCategoryInclude<ExtArgs> | null
  }


  /**
   * Model BlogSubCategory
   */

  export type AggregateBlogSubCategory = {
    _count: BlogSubCategoryCountAggregateOutputType | null
    _min: BlogSubCategoryMinAggregateOutputType | null
    _max: BlogSubCategoryMaxAggregateOutputType | null
  }

  export type BlogSubCategoryMinAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    categoryId: string | null
    status: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BlogSubCategoryMaxAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    categoryId: string | null
    status: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BlogSubCategoryCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    categoryId: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BlogSubCategoryMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    categoryId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BlogSubCategoryMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    categoryId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BlogSubCategoryCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    categoryId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BlogSubCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BlogSubCategory to aggregate.
     */
    where?: BlogSubCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogSubCategories to fetch.
     */
    orderBy?: BlogSubCategoryOrderByWithRelationInput | BlogSubCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BlogSubCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogSubCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogSubCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BlogSubCategories
    **/
    _count?: true | BlogSubCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BlogSubCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BlogSubCategoryMaxAggregateInputType
  }

  export type GetBlogSubCategoryAggregateType<T extends BlogSubCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateBlogSubCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBlogSubCategory[P]>
      : GetScalarType<T[P], AggregateBlogSubCategory[P]>
  }




  export type BlogSubCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlogSubCategoryWhereInput
    orderBy?: BlogSubCategoryOrderByWithAggregationInput | BlogSubCategoryOrderByWithAggregationInput[]
    by: BlogSubCategoryScalarFieldEnum[] | BlogSubCategoryScalarFieldEnum
    having?: BlogSubCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BlogSubCategoryCountAggregateInputType | true
    _min?: BlogSubCategoryMinAggregateInputType
    _max?: BlogSubCategoryMaxAggregateInputType
  }

  export type BlogSubCategoryGroupByOutputType = {
    id: string
    name: string
    slug: string
    categoryId: string
    status: boolean
    createdAt: Date
    updatedAt: Date
    _count: BlogSubCategoryCountAggregateOutputType | null
    _min: BlogSubCategoryMinAggregateOutputType | null
    _max: BlogSubCategoryMaxAggregateOutputType | null
  }

  type GetBlogSubCategoryGroupByPayload<T extends BlogSubCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BlogSubCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BlogSubCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BlogSubCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], BlogSubCategoryGroupByOutputType[P]>
        }
      >
    >


  export type BlogSubCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    categoryId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | BlogCategoryDefaultArgs<ExtArgs>
    blogs?: boolean | BlogSubCategory$blogsArgs<ExtArgs>
    _count?: boolean | BlogSubCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blogSubCategory"]>

  export type BlogSubCategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    categoryId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | BlogCategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blogSubCategory"]>

  export type BlogSubCategorySelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    categoryId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BlogSubCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | BlogCategoryDefaultArgs<ExtArgs>
    blogs?: boolean | BlogSubCategory$blogsArgs<ExtArgs>
    _count?: boolean | BlogSubCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BlogSubCategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | BlogCategoryDefaultArgs<ExtArgs>
  }

  export type $BlogSubCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BlogSubCategory"
    objects: {
      category: Prisma.$BlogCategoryPayload<ExtArgs>
      blogs: Prisma.$BlogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      slug: string
      categoryId: string
      status: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["blogSubCategory"]>
    composites: {}
  }

  type BlogSubCategoryGetPayload<S extends boolean | null | undefined | BlogSubCategoryDefaultArgs> = $Result.GetResult<Prisma.$BlogSubCategoryPayload, S>

  type BlogSubCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BlogSubCategoryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BlogSubCategoryCountAggregateInputType | true
    }

  export interface BlogSubCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BlogSubCategory'], meta: { name: 'BlogSubCategory' } }
    /**
     * Find zero or one BlogSubCategory that matches the filter.
     * @param {BlogSubCategoryFindUniqueArgs} args - Arguments to find a BlogSubCategory
     * @example
     * // Get one BlogSubCategory
     * const blogSubCategory = await prisma.blogSubCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BlogSubCategoryFindUniqueArgs>(args: SelectSubset<T, BlogSubCategoryFindUniqueArgs<ExtArgs>>): Prisma__BlogSubCategoryClient<$Result.GetResult<Prisma.$BlogSubCategoryPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one BlogSubCategory that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {BlogSubCategoryFindUniqueOrThrowArgs} args - Arguments to find a BlogSubCategory
     * @example
     * // Get one BlogSubCategory
     * const blogSubCategory = await prisma.blogSubCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BlogSubCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, BlogSubCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BlogSubCategoryClient<$Result.GetResult<Prisma.$BlogSubCategoryPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first BlogSubCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogSubCategoryFindFirstArgs} args - Arguments to find a BlogSubCategory
     * @example
     * // Get one BlogSubCategory
     * const blogSubCategory = await prisma.blogSubCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BlogSubCategoryFindFirstArgs>(args?: SelectSubset<T, BlogSubCategoryFindFirstArgs<ExtArgs>>): Prisma__BlogSubCategoryClient<$Result.GetResult<Prisma.$BlogSubCategoryPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first BlogSubCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogSubCategoryFindFirstOrThrowArgs} args - Arguments to find a BlogSubCategory
     * @example
     * // Get one BlogSubCategory
     * const blogSubCategory = await prisma.blogSubCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BlogSubCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, BlogSubCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__BlogSubCategoryClient<$Result.GetResult<Prisma.$BlogSubCategoryPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more BlogSubCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogSubCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BlogSubCategories
     * const blogSubCategories = await prisma.blogSubCategory.findMany()
     * 
     * // Get first 10 BlogSubCategories
     * const blogSubCategories = await prisma.blogSubCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const blogSubCategoryWithIdOnly = await prisma.blogSubCategory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BlogSubCategoryFindManyArgs>(args?: SelectSubset<T, BlogSubCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogSubCategoryPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a BlogSubCategory.
     * @param {BlogSubCategoryCreateArgs} args - Arguments to create a BlogSubCategory.
     * @example
     * // Create one BlogSubCategory
     * const BlogSubCategory = await prisma.blogSubCategory.create({
     *   data: {
     *     // ... data to create a BlogSubCategory
     *   }
     * })
     * 
     */
    create<T extends BlogSubCategoryCreateArgs>(args: SelectSubset<T, BlogSubCategoryCreateArgs<ExtArgs>>): Prisma__BlogSubCategoryClient<$Result.GetResult<Prisma.$BlogSubCategoryPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many BlogSubCategories.
     * @param {BlogSubCategoryCreateManyArgs} args - Arguments to create many BlogSubCategories.
     * @example
     * // Create many BlogSubCategories
     * const blogSubCategory = await prisma.blogSubCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BlogSubCategoryCreateManyArgs>(args?: SelectSubset<T, BlogSubCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BlogSubCategories and returns the data saved in the database.
     * @param {BlogSubCategoryCreateManyAndReturnArgs} args - Arguments to create many BlogSubCategories.
     * @example
     * // Create many BlogSubCategories
     * const blogSubCategory = await prisma.blogSubCategory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BlogSubCategories and only return the `id`
     * const blogSubCategoryWithIdOnly = await prisma.blogSubCategory.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BlogSubCategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, BlogSubCategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogSubCategoryPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a BlogSubCategory.
     * @param {BlogSubCategoryDeleteArgs} args - Arguments to delete one BlogSubCategory.
     * @example
     * // Delete one BlogSubCategory
     * const BlogSubCategory = await prisma.blogSubCategory.delete({
     *   where: {
     *     // ... filter to delete one BlogSubCategory
     *   }
     * })
     * 
     */
    delete<T extends BlogSubCategoryDeleteArgs>(args: SelectSubset<T, BlogSubCategoryDeleteArgs<ExtArgs>>): Prisma__BlogSubCategoryClient<$Result.GetResult<Prisma.$BlogSubCategoryPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one BlogSubCategory.
     * @param {BlogSubCategoryUpdateArgs} args - Arguments to update one BlogSubCategory.
     * @example
     * // Update one BlogSubCategory
     * const blogSubCategory = await prisma.blogSubCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BlogSubCategoryUpdateArgs>(args: SelectSubset<T, BlogSubCategoryUpdateArgs<ExtArgs>>): Prisma__BlogSubCategoryClient<$Result.GetResult<Prisma.$BlogSubCategoryPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more BlogSubCategories.
     * @param {BlogSubCategoryDeleteManyArgs} args - Arguments to filter BlogSubCategories to delete.
     * @example
     * // Delete a few BlogSubCategories
     * const { count } = await prisma.blogSubCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BlogSubCategoryDeleteManyArgs>(args?: SelectSubset<T, BlogSubCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BlogSubCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogSubCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BlogSubCategories
     * const blogSubCategory = await prisma.blogSubCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BlogSubCategoryUpdateManyArgs>(args: SelectSubset<T, BlogSubCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one BlogSubCategory.
     * @param {BlogSubCategoryUpsertArgs} args - Arguments to update or create a BlogSubCategory.
     * @example
     * // Update or create a BlogSubCategory
     * const blogSubCategory = await prisma.blogSubCategory.upsert({
     *   create: {
     *     // ... data to create a BlogSubCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BlogSubCategory we want to update
     *   }
     * })
     */
    upsert<T extends BlogSubCategoryUpsertArgs>(args: SelectSubset<T, BlogSubCategoryUpsertArgs<ExtArgs>>): Prisma__BlogSubCategoryClient<$Result.GetResult<Prisma.$BlogSubCategoryPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of BlogSubCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogSubCategoryCountArgs} args - Arguments to filter BlogSubCategories to count.
     * @example
     * // Count the number of BlogSubCategories
     * const count = await prisma.blogSubCategory.count({
     *   where: {
     *     // ... the filter for the BlogSubCategories we want to count
     *   }
     * })
    **/
    count<T extends BlogSubCategoryCountArgs>(
      args?: Subset<T, BlogSubCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BlogSubCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BlogSubCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogSubCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BlogSubCategoryAggregateArgs>(args: Subset<T, BlogSubCategoryAggregateArgs>): Prisma.PrismaPromise<GetBlogSubCategoryAggregateType<T>>

    /**
     * Group by BlogSubCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogSubCategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BlogSubCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BlogSubCategoryGroupByArgs['orderBy'] }
        : { orderBy?: BlogSubCategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BlogSubCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBlogSubCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BlogSubCategory model
   */
  readonly fields: BlogSubCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BlogSubCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BlogSubCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends BlogCategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BlogCategoryDefaultArgs<ExtArgs>>): Prisma__BlogCategoryClient<$Result.GetResult<Prisma.$BlogCategoryPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    blogs<T extends BlogSubCategory$blogsArgs<ExtArgs> = {}>(args?: Subset<T, BlogSubCategory$blogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BlogSubCategory model
   */ 
  interface BlogSubCategoryFieldRefs {
    readonly id: FieldRef<"BlogSubCategory", 'String'>
    readonly name: FieldRef<"BlogSubCategory", 'String'>
    readonly slug: FieldRef<"BlogSubCategory", 'String'>
    readonly categoryId: FieldRef<"BlogSubCategory", 'String'>
    readonly status: FieldRef<"BlogSubCategory", 'Boolean'>
    readonly createdAt: FieldRef<"BlogSubCategory", 'DateTime'>
    readonly updatedAt: FieldRef<"BlogSubCategory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BlogSubCategory findUnique
   */
  export type BlogSubCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogSubCategory
     */
    select?: BlogSubCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogSubCategoryInclude<ExtArgs> | null
    /**
     * Filter, which BlogSubCategory to fetch.
     */
    where: BlogSubCategoryWhereUniqueInput
  }

  /**
   * BlogSubCategory findUniqueOrThrow
   */
  export type BlogSubCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogSubCategory
     */
    select?: BlogSubCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogSubCategoryInclude<ExtArgs> | null
    /**
     * Filter, which BlogSubCategory to fetch.
     */
    where: BlogSubCategoryWhereUniqueInput
  }

  /**
   * BlogSubCategory findFirst
   */
  export type BlogSubCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogSubCategory
     */
    select?: BlogSubCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogSubCategoryInclude<ExtArgs> | null
    /**
     * Filter, which BlogSubCategory to fetch.
     */
    where?: BlogSubCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogSubCategories to fetch.
     */
    orderBy?: BlogSubCategoryOrderByWithRelationInput | BlogSubCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BlogSubCategories.
     */
    cursor?: BlogSubCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogSubCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogSubCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlogSubCategories.
     */
    distinct?: BlogSubCategoryScalarFieldEnum | BlogSubCategoryScalarFieldEnum[]
  }

  /**
   * BlogSubCategory findFirstOrThrow
   */
  export type BlogSubCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogSubCategory
     */
    select?: BlogSubCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogSubCategoryInclude<ExtArgs> | null
    /**
     * Filter, which BlogSubCategory to fetch.
     */
    where?: BlogSubCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogSubCategories to fetch.
     */
    orderBy?: BlogSubCategoryOrderByWithRelationInput | BlogSubCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BlogSubCategories.
     */
    cursor?: BlogSubCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogSubCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogSubCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlogSubCategories.
     */
    distinct?: BlogSubCategoryScalarFieldEnum | BlogSubCategoryScalarFieldEnum[]
  }

  /**
   * BlogSubCategory findMany
   */
  export type BlogSubCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogSubCategory
     */
    select?: BlogSubCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogSubCategoryInclude<ExtArgs> | null
    /**
     * Filter, which BlogSubCategories to fetch.
     */
    where?: BlogSubCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogSubCategories to fetch.
     */
    orderBy?: BlogSubCategoryOrderByWithRelationInput | BlogSubCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BlogSubCategories.
     */
    cursor?: BlogSubCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogSubCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogSubCategories.
     */
    skip?: number
    distinct?: BlogSubCategoryScalarFieldEnum | BlogSubCategoryScalarFieldEnum[]
  }

  /**
   * BlogSubCategory create
   */
  export type BlogSubCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogSubCategory
     */
    select?: BlogSubCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogSubCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a BlogSubCategory.
     */
    data: XOR<BlogSubCategoryCreateInput, BlogSubCategoryUncheckedCreateInput>
  }

  /**
   * BlogSubCategory createMany
   */
  export type BlogSubCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BlogSubCategories.
     */
    data: BlogSubCategoryCreateManyInput | BlogSubCategoryCreateManyInput[]
  }

  /**
   * BlogSubCategory createManyAndReturn
   */
  export type BlogSubCategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogSubCategory
     */
    select?: BlogSubCategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many BlogSubCategories.
     */
    data: BlogSubCategoryCreateManyInput | BlogSubCategoryCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogSubCategoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BlogSubCategory update
   */
  export type BlogSubCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogSubCategory
     */
    select?: BlogSubCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogSubCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a BlogSubCategory.
     */
    data: XOR<BlogSubCategoryUpdateInput, BlogSubCategoryUncheckedUpdateInput>
    /**
     * Choose, which BlogSubCategory to update.
     */
    where: BlogSubCategoryWhereUniqueInput
  }

  /**
   * BlogSubCategory updateMany
   */
  export type BlogSubCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BlogSubCategories.
     */
    data: XOR<BlogSubCategoryUpdateManyMutationInput, BlogSubCategoryUncheckedUpdateManyInput>
    /**
     * Filter which BlogSubCategories to update
     */
    where?: BlogSubCategoryWhereInput
  }

  /**
   * BlogSubCategory upsert
   */
  export type BlogSubCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogSubCategory
     */
    select?: BlogSubCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogSubCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the BlogSubCategory to update in case it exists.
     */
    where: BlogSubCategoryWhereUniqueInput
    /**
     * In case the BlogSubCategory found by the `where` argument doesn't exist, create a new BlogSubCategory with this data.
     */
    create: XOR<BlogSubCategoryCreateInput, BlogSubCategoryUncheckedCreateInput>
    /**
     * In case the BlogSubCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BlogSubCategoryUpdateInput, BlogSubCategoryUncheckedUpdateInput>
  }

  /**
   * BlogSubCategory delete
   */
  export type BlogSubCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogSubCategory
     */
    select?: BlogSubCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogSubCategoryInclude<ExtArgs> | null
    /**
     * Filter which BlogSubCategory to delete.
     */
    where: BlogSubCategoryWhereUniqueInput
  }

  /**
   * BlogSubCategory deleteMany
   */
  export type BlogSubCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BlogSubCategories to delete
     */
    where?: BlogSubCategoryWhereInput
  }

  /**
   * BlogSubCategory.blogs
   */
  export type BlogSubCategory$blogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogInclude<ExtArgs> | null
    where?: BlogWhereInput
    orderBy?: BlogOrderByWithRelationInput | BlogOrderByWithRelationInput[]
    cursor?: BlogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BlogScalarFieldEnum | BlogScalarFieldEnum[]
  }

  /**
   * BlogSubCategory without action
   */
  export type BlogSubCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogSubCategory
     */
    select?: BlogSubCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogSubCategoryInclude<ExtArgs> | null
  }


  /**
   * Model Blog
   */

  export type AggregateBlog = {
    _count: BlogCountAggregateOutputType | null
    _min: BlogMinAggregateOutputType | null
    _max: BlogMaxAggregateOutputType | null
  }

  export type BlogMinAggregateOutputType = {
    id: string | null
    title: string | null
    slug: string | null
    mainImage: string | null
    categoryId: string | null
    subcategoryId: string | null
    metaTitle: string | null
    metaDescription: string | null
    keywords: string | null
    status: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BlogMaxAggregateOutputType = {
    id: string | null
    title: string | null
    slug: string | null
    mainImage: string | null
    categoryId: string | null
    subcategoryId: string | null
    metaTitle: string | null
    metaDescription: string | null
    keywords: string | null
    status: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BlogCountAggregateOutputType = {
    id: number
    title: number
    slug: number
    mainImage: number
    categoryId: number
    subcategoryId: number
    metaTitle: number
    metaDescription: number
    keywords: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BlogMinAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    mainImage?: true
    categoryId?: true
    subcategoryId?: true
    metaTitle?: true
    metaDescription?: true
    keywords?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BlogMaxAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    mainImage?: true
    categoryId?: true
    subcategoryId?: true
    metaTitle?: true
    metaDescription?: true
    keywords?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BlogCountAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    mainImage?: true
    categoryId?: true
    subcategoryId?: true
    metaTitle?: true
    metaDescription?: true
    keywords?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BlogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Blog to aggregate.
     */
    where?: BlogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blogs to fetch.
     */
    orderBy?: BlogOrderByWithRelationInput | BlogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BlogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Blogs
    **/
    _count?: true | BlogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BlogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BlogMaxAggregateInputType
  }

  export type GetBlogAggregateType<T extends BlogAggregateArgs> = {
        [P in keyof T & keyof AggregateBlog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBlog[P]>
      : GetScalarType<T[P], AggregateBlog[P]>
  }




  export type BlogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlogWhereInput
    orderBy?: BlogOrderByWithAggregationInput | BlogOrderByWithAggregationInput[]
    by: BlogScalarFieldEnum[] | BlogScalarFieldEnum
    having?: BlogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BlogCountAggregateInputType | true
    _min?: BlogMinAggregateInputType
    _max?: BlogMaxAggregateInputType
  }

  export type BlogGroupByOutputType = {
    id: string
    title: string
    slug: string
    mainImage: string | null
    categoryId: string
    subcategoryId: string | null
    metaTitle: string | null
    metaDescription: string | null
    keywords: string | null
    status: boolean
    createdAt: Date
    updatedAt: Date
    _count: BlogCountAggregateOutputType | null
    _min: BlogMinAggregateOutputType | null
    _max: BlogMaxAggregateOutputType | null
  }

  type GetBlogGroupByPayload<T extends BlogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BlogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BlogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BlogGroupByOutputType[P]>
            : GetScalarType<T[P], BlogGroupByOutputType[P]>
        }
      >
    >


  export type BlogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    mainImage?: boolean
    categoryId?: boolean
    subcategoryId?: boolean
    metaTitle?: boolean
    metaDescription?: boolean
    keywords?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | BlogCategoryDefaultArgs<ExtArgs>
    subcategory?: boolean | Blog$subcategoryArgs<ExtArgs>
    contentBlocks?: boolean | Blog$contentBlocksArgs<ExtArgs>
    _count?: boolean | BlogCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blog"]>

  export type BlogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    mainImage?: boolean
    categoryId?: boolean
    subcategoryId?: boolean
    metaTitle?: boolean
    metaDescription?: boolean
    keywords?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | BlogCategoryDefaultArgs<ExtArgs>
    subcategory?: boolean | Blog$subcategoryArgs<ExtArgs>
  }, ExtArgs["result"]["blog"]>

  export type BlogSelectScalar = {
    id?: boolean
    title?: boolean
    slug?: boolean
    mainImage?: boolean
    categoryId?: boolean
    subcategoryId?: boolean
    metaTitle?: boolean
    metaDescription?: boolean
    keywords?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BlogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | BlogCategoryDefaultArgs<ExtArgs>
    subcategory?: boolean | Blog$subcategoryArgs<ExtArgs>
    contentBlocks?: boolean | Blog$contentBlocksArgs<ExtArgs>
    _count?: boolean | BlogCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BlogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | BlogCategoryDefaultArgs<ExtArgs>
    subcategory?: boolean | Blog$subcategoryArgs<ExtArgs>
  }

  export type $BlogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Blog"
    objects: {
      category: Prisma.$BlogCategoryPayload<ExtArgs>
      subcategory: Prisma.$BlogSubCategoryPayload<ExtArgs> | null
      contentBlocks: Prisma.$BlogContentBlockPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      slug: string
      mainImage: string | null
      categoryId: string
      subcategoryId: string | null
      metaTitle: string | null
      metaDescription: string | null
      keywords: string | null
      status: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["blog"]>
    composites: {}
  }

  type BlogGetPayload<S extends boolean | null | undefined | BlogDefaultArgs> = $Result.GetResult<Prisma.$BlogPayload, S>

  type BlogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BlogFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BlogCountAggregateInputType | true
    }

  export interface BlogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Blog'], meta: { name: 'Blog' } }
    /**
     * Find zero or one Blog that matches the filter.
     * @param {BlogFindUniqueArgs} args - Arguments to find a Blog
     * @example
     * // Get one Blog
     * const blog = await prisma.blog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BlogFindUniqueArgs>(args: SelectSubset<T, BlogFindUniqueArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Blog that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {BlogFindUniqueOrThrowArgs} args - Arguments to find a Blog
     * @example
     * // Get one Blog
     * const blog = await prisma.blog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BlogFindUniqueOrThrowArgs>(args: SelectSubset<T, BlogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Blog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogFindFirstArgs} args - Arguments to find a Blog
     * @example
     * // Get one Blog
     * const blog = await prisma.blog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BlogFindFirstArgs>(args?: SelectSubset<T, BlogFindFirstArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Blog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogFindFirstOrThrowArgs} args - Arguments to find a Blog
     * @example
     * // Get one Blog
     * const blog = await prisma.blog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BlogFindFirstOrThrowArgs>(args?: SelectSubset<T, BlogFindFirstOrThrowArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Blogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Blogs
     * const blogs = await prisma.blog.findMany()
     * 
     * // Get first 10 Blogs
     * const blogs = await prisma.blog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const blogWithIdOnly = await prisma.blog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BlogFindManyArgs>(args?: SelectSubset<T, BlogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Blog.
     * @param {BlogCreateArgs} args - Arguments to create a Blog.
     * @example
     * // Create one Blog
     * const Blog = await prisma.blog.create({
     *   data: {
     *     // ... data to create a Blog
     *   }
     * })
     * 
     */
    create<T extends BlogCreateArgs>(args: SelectSubset<T, BlogCreateArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Blogs.
     * @param {BlogCreateManyArgs} args - Arguments to create many Blogs.
     * @example
     * // Create many Blogs
     * const blog = await prisma.blog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BlogCreateManyArgs>(args?: SelectSubset<T, BlogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Blogs and returns the data saved in the database.
     * @param {BlogCreateManyAndReturnArgs} args - Arguments to create many Blogs.
     * @example
     * // Create many Blogs
     * const blog = await prisma.blog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Blogs and only return the `id`
     * const blogWithIdOnly = await prisma.blog.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BlogCreateManyAndReturnArgs>(args?: SelectSubset<T, BlogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Blog.
     * @param {BlogDeleteArgs} args - Arguments to delete one Blog.
     * @example
     * // Delete one Blog
     * const Blog = await prisma.blog.delete({
     *   where: {
     *     // ... filter to delete one Blog
     *   }
     * })
     * 
     */
    delete<T extends BlogDeleteArgs>(args: SelectSubset<T, BlogDeleteArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Blog.
     * @param {BlogUpdateArgs} args - Arguments to update one Blog.
     * @example
     * // Update one Blog
     * const blog = await prisma.blog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BlogUpdateArgs>(args: SelectSubset<T, BlogUpdateArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Blogs.
     * @param {BlogDeleteManyArgs} args - Arguments to filter Blogs to delete.
     * @example
     * // Delete a few Blogs
     * const { count } = await prisma.blog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BlogDeleteManyArgs>(args?: SelectSubset<T, BlogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Blogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Blogs
     * const blog = await prisma.blog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BlogUpdateManyArgs>(args: SelectSubset<T, BlogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Blog.
     * @param {BlogUpsertArgs} args - Arguments to update or create a Blog.
     * @example
     * // Update or create a Blog
     * const blog = await prisma.blog.upsert({
     *   create: {
     *     // ... data to create a Blog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Blog we want to update
     *   }
     * })
     */
    upsert<T extends BlogUpsertArgs>(args: SelectSubset<T, BlogUpsertArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Blogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogCountArgs} args - Arguments to filter Blogs to count.
     * @example
     * // Count the number of Blogs
     * const count = await prisma.blog.count({
     *   where: {
     *     // ... the filter for the Blogs we want to count
     *   }
     * })
    **/
    count<T extends BlogCountArgs>(
      args?: Subset<T, BlogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BlogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Blog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BlogAggregateArgs>(args: Subset<T, BlogAggregateArgs>): Prisma.PrismaPromise<GetBlogAggregateType<T>>

    /**
     * Group by Blog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BlogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BlogGroupByArgs['orderBy'] }
        : { orderBy?: BlogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BlogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBlogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Blog model
   */
  readonly fields: BlogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Blog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BlogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends BlogCategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BlogCategoryDefaultArgs<ExtArgs>>): Prisma__BlogCategoryClient<$Result.GetResult<Prisma.$BlogCategoryPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    subcategory<T extends Blog$subcategoryArgs<ExtArgs> = {}>(args?: Subset<T, Blog$subcategoryArgs<ExtArgs>>): Prisma__BlogSubCategoryClient<$Result.GetResult<Prisma.$BlogSubCategoryPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    contentBlocks<T extends Blog$contentBlocksArgs<ExtArgs> = {}>(args?: Subset<T, Blog$contentBlocksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogContentBlockPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Blog model
   */ 
  interface BlogFieldRefs {
    readonly id: FieldRef<"Blog", 'String'>
    readonly title: FieldRef<"Blog", 'String'>
    readonly slug: FieldRef<"Blog", 'String'>
    readonly mainImage: FieldRef<"Blog", 'String'>
    readonly categoryId: FieldRef<"Blog", 'String'>
    readonly subcategoryId: FieldRef<"Blog", 'String'>
    readonly metaTitle: FieldRef<"Blog", 'String'>
    readonly metaDescription: FieldRef<"Blog", 'String'>
    readonly keywords: FieldRef<"Blog", 'String'>
    readonly status: FieldRef<"Blog", 'Boolean'>
    readonly createdAt: FieldRef<"Blog", 'DateTime'>
    readonly updatedAt: FieldRef<"Blog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Blog findUnique
   */
  export type BlogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogInclude<ExtArgs> | null
    /**
     * Filter, which Blog to fetch.
     */
    where: BlogWhereUniqueInput
  }

  /**
   * Blog findUniqueOrThrow
   */
  export type BlogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogInclude<ExtArgs> | null
    /**
     * Filter, which Blog to fetch.
     */
    where: BlogWhereUniqueInput
  }

  /**
   * Blog findFirst
   */
  export type BlogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogInclude<ExtArgs> | null
    /**
     * Filter, which Blog to fetch.
     */
    where?: BlogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blogs to fetch.
     */
    orderBy?: BlogOrderByWithRelationInput | BlogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Blogs.
     */
    cursor?: BlogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Blogs.
     */
    distinct?: BlogScalarFieldEnum | BlogScalarFieldEnum[]
  }

  /**
   * Blog findFirstOrThrow
   */
  export type BlogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogInclude<ExtArgs> | null
    /**
     * Filter, which Blog to fetch.
     */
    where?: BlogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blogs to fetch.
     */
    orderBy?: BlogOrderByWithRelationInput | BlogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Blogs.
     */
    cursor?: BlogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Blogs.
     */
    distinct?: BlogScalarFieldEnum | BlogScalarFieldEnum[]
  }

  /**
   * Blog findMany
   */
  export type BlogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogInclude<ExtArgs> | null
    /**
     * Filter, which Blogs to fetch.
     */
    where?: BlogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blogs to fetch.
     */
    orderBy?: BlogOrderByWithRelationInput | BlogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Blogs.
     */
    cursor?: BlogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blogs.
     */
    skip?: number
    distinct?: BlogScalarFieldEnum | BlogScalarFieldEnum[]
  }

  /**
   * Blog create
   */
  export type BlogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogInclude<ExtArgs> | null
    /**
     * The data needed to create a Blog.
     */
    data: XOR<BlogCreateInput, BlogUncheckedCreateInput>
  }

  /**
   * Blog createMany
   */
  export type BlogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Blogs.
     */
    data: BlogCreateManyInput | BlogCreateManyInput[]
  }

  /**
   * Blog createManyAndReturn
   */
  export type BlogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Blogs.
     */
    data: BlogCreateManyInput | BlogCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Blog update
   */
  export type BlogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogInclude<ExtArgs> | null
    /**
     * The data needed to update a Blog.
     */
    data: XOR<BlogUpdateInput, BlogUncheckedUpdateInput>
    /**
     * Choose, which Blog to update.
     */
    where: BlogWhereUniqueInput
  }

  /**
   * Blog updateMany
   */
  export type BlogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Blogs.
     */
    data: XOR<BlogUpdateManyMutationInput, BlogUncheckedUpdateManyInput>
    /**
     * Filter which Blogs to update
     */
    where?: BlogWhereInput
  }

  /**
   * Blog upsert
   */
  export type BlogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogInclude<ExtArgs> | null
    /**
     * The filter to search for the Blog to update in case it exists.
     */
    where: BlogWhereUniqueInput
    /**
     * In case the Blog found by the `where` argument doesn't exist, create a new Blog with this data.
     */
    create: XOR<BlogCreateInput, BlogUncheckedCreateInput>
    /**
     * In case the Blog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BlogUpdateInput, BlogUncheckedUpdateInput>
  }

  /**
   * Blog delete
   */
  export type BlogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogInclude<ExtArgs> | null
    /**
     * Filter which Blog to delete.
     */
    where: BlogWhereUniqueInput
  }

  /**
   * Blog deleteMany
   */
  export type BlogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Blogs to delete
     */
    where?: BlogWhereInput
  }

  /**
   * Blog.subcategory
   */
  export type Blog$subcategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogSubCategory
     */
    select?: BlogSubCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogSubCategoryInclude<ExtArgs> | null
    where?: BlogSubCategoryWhereInput
  }

  /**
   * Blog.contentBlocks
   */
  export type Blog$contentBlocksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogContentBlock
     */
    select?: BlogContentBlockSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogContentBlockInclude<ExtArgs> | null
    where?: BlogContentBlockWhereInput
    orderBy?: BlogContentBlockOrderByWithRelationInput | BlogContentBlockOrderByWithRelationInput[]
    cursor?: BlogContentBlockWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BlogContentBlockScalarFieldEnum | BlogContentBlockScalarFieldEnum[]
  }

  /**
   * Blog without action
   */
  export type BlogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogInclude<ExtArgs> | null
  }


  /**
   * Model BlogContentBlock
   */

  export type AggregateBlogContentBlock = {
    _count: BlogContentBlockCountAggregateOutputType | null
    _avg: BlogContentBlockAvgAggregateOutputType | null
    _sum: BlogContentBlockSumAggregateOutputType | null
    _min: BlogContentBlockMinAggregateOutputType | null
    _max: BlogContentBlockMaxAggregateOutputType | null
  }

  export type BlogContentBlockAvgAggregateOutputType = {
    sorting: number | null
  }

  export type BlogContentBlockSumAggregateOutputType = {
    sorting: number | null
  }

  export type BlogContentBlockMinAggregateOutputType = {
    id: string | null
    blogId: string | null
    subTitle: string | null
    images: string | null
    layoutStyle: string | null
    content: string | null
    sorting: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BlogContentBlockMaxAggregateOutputType = {
    id: string | null
    blogId: string | null
    subTitle: string | null
    images: string | null
    layoutStyle: string | null
    content: string | null
    sorting: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BlogContentBlockCountAggregateOutputType = {
    id: number
    blogId: number
    subTitle: number
    images: number
    layoutStyle: number
    content: number
    sorting: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BlogContentBlockAvgAggregateInputType = {
    sorting?: true
  }

  export type BlogContentBlockSumAggregateInputType = {
    sorting?: true
  }

  export type BlogContentBlockMinAggregateInputType = {
    id?: true
    blogId?: true
    subTitle?: true
    images?: true
    layoutStyle?: true
    content?: true
    sorting?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BlogContentBlockMaxAggregateInputType = {
    id?: true
    blogId?: true
    subTitle?: true
    images?: true
    layoutStyle?: true
    content?: true
    sorting?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BlogContentBlockCountAggregateInputType = {
    id?: true
    blogId?: true
    subTitle?: true
    images?: true
    layoutStyle?: true
    content?: true
    sorting?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BlogContentBlockAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BlogContentBlock to aggregate.
     */
    where?: BlogContentBlockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogContentBlocks to fetch.
     */
    orderBy?: BlogContentBlockOrderByWithRelationInput | BlogContentBlockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BlogContentBlockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogContentBlocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogContentBlocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BlogContentBlocks
    **/
    _count?: true | BlogContentBlockCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BlogContentBlockAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BlogContentBlockSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BlogContentBlockMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BlogContentBlockMaxAggregateInputType
  }

  export type GetBlogContentBlockAggregateType<T extends BlogContentBlockAggregateArgs> = {
        [P in keyof T & keyof AggregateBlogContentBlock]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBlogContentBlock[P]>
      : GetScalarType<T[P], AggregateBlogContentBlock[P]>
  }




  export type BlogContentBlockGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlogContentBlockWhereInput
    orderBy?: BlogContentBlockOrderByWithAggregationInput | BlogContentBlockOrderByWithAggregationInput[]
    by: BlogContentBlockScalarFieldEnum[] | BlogContentBlockScalarFieldEnum
    having?: BlogContentBlockScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BlogContentBlockCountAggregateInputType | true
    _avg?: BlogContentBlockAvgAggregateInputType
    _sum?: BlogContentBlockSumAggregateInputType
    _min?: BlogContentBlockMinAggregateInputType
    _max?: BlogContentBlockMaxAggregateInputType
  }

  export type BlogContentBlockGroupByOutputType = {
    id: string
    blogId: string
    subTitle: string | null
    images: string | null
    layoutStyle: string
    content: string | null
    sorting: number
    createdAt: Date
    updatedAt: Date
    _count: BlogContentBlockCountAggregateOutputType | null
    _avg: BlogContentBlockAvgAggregateOutputType | null
    _sum: BlogContentBlockSumAggregateOutputType | null
    _min: BlogContentBlockMinAggregateOutputType | null
    _max: BlogContentBlockMaxAggregateOutputType | null
  }

  type GetBlogContentBlockGroupByPayload<T extends BlogContentBlockGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BlogContentBlockGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BlogContentBlockGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BlogContentBlockGroupByOutputType[P]>
            : GetScalarType<T[P], BlogContentBlockGroupByOutputType[P]>
        }
      >
    >


  export type BlogContentBlockSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    blogId?: boolean
    subTitle?: boolean
    images?: boolean
    layoutStyle?: boolean
    content?: boolean
    sorting?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    blog?: boolean | BlogDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blogContentBlock"]>

  export type BlogContentBlockSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    blogId?: boolean
    subTitle?: boolean
    images?: boolean
    layoutStyle?: boolean
    content?: boolean
    sorting?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    blog?: boolean | BlogDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blogContentBlock"]>

  export type BlogContentBlockSelectScalar = {
    id?: boolean
    blogId?: boolean
    subTitle?: boolean
    images?: boolean
    layoutStyle?: boolean
    content?: boolean
    sorting?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BlogContentBlockInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    blog?: boolean | BlogDefaultArgs<ExtArgs>
  }
  export type BlogContentBlockIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    blog?: boolean | BlogDefaultArgs<ExtArgs>
  }

  export type $BlogContentBlockPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BlogContentBlock"
    objects: {
      blog: Prisma.$BlogPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      blogId: string
      subTitle: string | null
      images: string | null
      layoutStyle: string
      content: string | null
      sorting: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["blogContentBlock"]>
    composites: {}
  }

  type BlogContentBlockGetPayload<S extends boolean | null | undefined | BlogContentBlockDefaultArgs> = $Result.GetResult<Prisma.$BlogContentBlockPayload, S>

  type BlogContentBlockCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BlogContentBlockFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BlogContentBlockCountAggregateInputType | true
    }

  export interface BlogContentBlockDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BlogContentBlock'], meta: { name: 'BlogContentBlock' } }
    /**
     * Find zero or one BlogContentBlock that matches the filter.
     * @param {BlogContentBlockFindUniqueArgs} args - Arguments to find a BlogContentBlock
     * @example
     * // Get one BlogContentBlock
     * const blogContentBlock = await prisma.blogContentBlock.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BlogContentBlockFindUniqueArgs>(args: SelectSubset<T, BlogContentBlockFindUniqueArgs<ExtArgs>>): Prisma__BlogContentBlockClient<$Result.GetResult<Prisma.$BlogContentBlockPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one BlogContentBlock that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {BlogContentBlockFindUniqueOrThrowArgs} args - Arguments to find a BlogContentBlock
     * @example
     * // Get one BlogContentBlock
     * const blogContentBlock = await prisma.blogContentBlock.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BlogContentBlockFindUniqueOrThrowArgs>(args: SelectSubset<T, BlogContentBlockFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BlogContentBlockClient<$Result.GetResult<Prisma.$BlogContentBlockPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first BlogContentBlock that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogContentBlockFindFirstArgs} args - Arguments to find a BlogContentBlock
     * @example
     * // Get one BlogContentBlock
     * const blogContentBlock = await prisma.blogContentBlock.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BlogContentBlockFindFirstArgs>(args?: SelectSubset<T, BlogContentBlockFindFirstArgs<ExtArgs>>): Prisma__BlogContentBlockClient<$Result.GetResult<Prisma.$BlogContentBlockPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first BlogContentBlock that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogContentBlockFindFirstOrThrowArgs} args - Arguments to find a BlogContentBlock
     * @example
     * // Get one BlogContentBlock
     * const blogContentBlock = await prisma.blogContentBlock.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BlogContentBlockFindFirstOrThrowArgs>(args?: SelectSubset<T, BlogContentBlockFindFirstOrThrowArgs<ExtArgs>>): Prisma__BlogContentBlockClient<$Result.GetResult<Prisma.$BlogContentBlockPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more BlogContentBlocks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogContentBlockFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BlogContentBlocks
     * const blogContentBlocks = await prisma.blogContentBlock.findMany()
     * 
     * // Get first 10 BlogContentBlocks
     * const blogContentBlocks = await prisma.blogContentBlock.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const blogContentBlockWithIdOnly = await prisma.blogContentBlock.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BlogContentBlockFindManyArgs>(args?: SelectSubset<T, BlogContentBlockFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogContentBlockPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a BlogContentBlock.
     * @param {BlogContentBlockCreateArgs} args - Arguments to create a BlogContentBlock.
     * @example
     * // Create one BlogContentBlock
     * const BlogContentBlock = await prisma.blogContentBlock.create({
     *   data: {
     *     // ... data to create a BlogContentBlock
     *   }
     * })
     * 
     */
    create<T extends BlogContentBlockCreateArgs>(args: SelectSubset<T, BlogContentBlockCreateArgs<ExtArgs>>): Prisma__BlogContentBlockClient<$Result.GetResult<Prisma.$BlogContentBlockPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many BlogContentBlocks.
     * @param {BlogContentBlockCreateManyArgs} args - Arguments to create many BlogContentBlocks.
     * @example
     * // Create many BlogContentBlocks
     * const blogContentBlock = await prisma.blogContentBlock.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BlogContentBlockCreateManyArgs>(args?: SelectSubset<T, BlogContentBlockCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BlogContentBlocks and returns the data saved in the database.
     * @param {BlogContentBlockCreateManyAndReturnArgs} args - Arguments to create many BlogContentBlocks.
     * @example
     * // Create many BlogContentBlocks
     * const blogContentBlock = await prisma.blogContentBlock.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BlogContentBlocks and only return the `id`
     * const blogContentBlockWithIdOnly = await prisma.blogContentBlock.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BlogContentBlockCreateManyAndReturnArgs>(args?: SelectSubset<T, BlogContentBlockCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogContentBlockPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a BlogContentBlock.
     * @param {BlogContentBlockDeleteArgs} args - Arguments to delete one BlogContentBlock.
     * @example
     * // Delete one BlogContentBlock
     * const BlogContentBlock = await prisma.blogContentBlock.delete({
     *   where: {
     *     // ... filter to delete one BlogContentBlock
     *   }
     * })
     * 
     */
    delete<T extends BlogContentBlockDeleteArgs>(args: SelectSubset<T, BlogContentBlockDeleteArgs<ExtArgs>>): Prisma__BlogContentBlockClient<$Result.GetResult<Prisma.$BlogContentBlockPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one BlogContentBlock.
     * @param {BlogContentBlockUpdateArgs} args - Arguments to update one BlogContentBlock.
     * @example
     * // Update one BlogContentBlock
     * const blogContentBlock = await prisma.blogContentBlock.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BlogContentBlockUpdateArgs>(args: SelectSubset<T, BlogContentBlockUpdateArgs<ExtArgs>>): Prisma__BlogContentBlockClient<$Result.GetResult<Prisma.$BlogContentBlockPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more BlogContentBlocks.
     * @param {BlogContentBlockDeleteManyArgs} args - Arguments to filter BlogContentBlocks to delete.
     * @example
     * // Delete a few BlogContentBlocks
     * const { count } = await prisma.blogContentBlock.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BlogContentBlockDeleteManyArgs>(args?: SelectSubset<T, BlogContentBlockDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BlogContentBlocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogContentBlockUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BlogContentBlocks
     * const blogContentBlock = await prisma.blogContentBlock.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BlogContentBlockUpdateManyArgs>(args: SelectSubset<T, BlogContentBlockUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one BlogContentBlock.
     * @param {BlogContentBlockUpsertArgs} args - Arguments to update or create a BlogContentBlock.
     * @example
     * // Update or create a BlogContentBlock
     * const blogContentBlock = await prisma.blogContentBlock.upsert({
     *   create: {
     *     // ... data to create a BlogContentBlock
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BlogContentBlock we want to update
     *   }
     * })
     */
    upsert<T extends BlogContentBlockUpsertArgs>(args: SelectSubset<T, BlogContentBlockUpsertArgs<ExtArgs>>): Prisma__BlogContentBlockClient<$Result.GetResult<Prisma.$BlogContentBlockPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of BlogContentBlocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogContentBlockCountArgs} args - Arguments to filter BlogContentBlocks to count.
     * @example
     * // Count the number of BlogContentBlocks
     * const count = await prisma.blogContentBlock.count({
     *   where: {
     *     // ... the filter for the BlogContentBlocks we want to count
     *   }
     * })
    **/
    count<T extends BlogContentBlockCountArgs>(
      args?: Subset<T, BlogContentBlockCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BlogContentBlockCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BlogContentBlock.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogContentBlockAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BlogContentBlockAggregateArgs>(args: Subset<T, BlogContentBlockAggregateArgs>): Prisma.PrismaPromise<GetBlogContentBlockAggregateType<T>>

    /**
     * Group by BlogContentBlock.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogContentBlockGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BlogContentBlockGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BlogContentBlockGroupByArgs['orderBy'] }
        : { orderBy?: BlogContentBlockGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BlogContentBlockGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBlogContentBlockGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BlogContentBlock model
   */
  readonly fields: BlogContentBlockFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BlogContentBlock.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BlogContentBlockClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    blog<T extends BlogDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BlogDefaultArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BlogContentBlock model
   */ 
  interface BlogContentBlockFieldRefs {
    readonly id: FieldRef<"BlogContentBlock", 'String'>
    readonly blogId: FieldRef<"BlogContentBlock", 'String'>
    readonly subTitle: FieldRef<"BlogContentBlock", 'String'>
    readonly images: FieldRef<"BlogContentBlock", 'String'>
    readonly layoutStyle: FieldRef<"BlogContentBlock", 'String'>
    readonly content: FieldRef<"BlogContentBlock", 'String'>
    readonly sorting: FieldRef<"BlogContentBlock", 'Int'>
    readonly createdAt: FieldRef<"BlogContentBlock", 'DateTime'>
    readonly updatedAt: FieldRef<"BlogContentBlock", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BlogContentBlock findUnique
   */
  export type BlogContentBlockFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogContentBlock
     */
    select?: BlogContentBlockSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogContentBlockInclude<ExtArgs> | null
    /**
     * Filter, which BlogContentBlock to fetch.
     */
    where: BlogContentBlockWhereUniqueInput
  }

  /**
   * BlogContentBlock findUniqueOrThrow
   */
  export type BlogContentBlockFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogContentBlock
     */
    select?: BlogContentBlockSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogContentBlockInclude<ExtArgs> | null
    /**
     * Filter, which BlogContentBlock to fetch.
     */
    where: BlogContentBlockWhereUniqueInput
  }

  /**
   * BlogContentBlock findFirst
   */
  export type BlogContentBlockFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogContentBlock
     */
    select?: BlogContentBlockSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogContentBlockInclude<ExtArgs> | null
    /**
     * Filter, which BlogContentBlock to fetch.
     */
    where?: BlogContentBlockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogContentBlocks to fetch.
     */
    orderBy?: BlogContentBlockOrderByWithRelationInput | BlogContentBlockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BlogContentBlocks.
     */
    cursor?: BlogContentBlockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogContentBlocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogContentBlocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlogContentBlocks.
     */
    distinct?: BlogContentBlockScalarFieldEnum | BlogContentBlockScalarFieldEnum[]
  }

  /**
   * BlogContentBlock findFirstOrThrow
   */
  export type BlogContentBlockFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogContentBlock
     */
    select?: BlogContentBlockSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogContentBlockInclude<ExtArgs> | null
    /**
     * Filter, which BlogContentBlock to fetch.
     */
    where?: BlogContentBlockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogContentBlocks to fetch.
     */
    orderBy?: BlogContentBlockOrderByWithRelationInput | BlogContentBlockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BlogContentBlocks.
     */
    cursor?: BlogContentBlockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogContentBlocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogContentBlocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlogContentBlocks.
     */
    distinct?: BlogContentBlockScalarFieldEnum | BlogContentBlockScalarFieldEnum[]
  }

  /**
   * BlogContentBlock findMany
   */
  export type BlogContentBlockFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogContentBlock
     */
    select?: BlogContentBlockSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogContentBlockInclude<ExtArgs> | null
    /**
     * Filter, which BlogContentBlocks to fetch.
     */
    where?: BlogContentBlockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogContentBlocks to fetch.
     */
    orderBy?: BlogContentBlockOrderByWithRelationInput | BlogContentBlockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BlogContentBlocks.
     */
    cursor?: BlogContentBlockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogContentBlocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogContentBlocks.
     */
    skip?: number
    distinct?: BlogContentBlockScalarFieldEnum | BlogContentBlockScalarFieldEnum[]
  }

  /**
   * BlogContentBlock create
   */
  export type BlogContentBlockCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogContentBlock
     */
    select?: BlogContentBlockSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogContentBlockInclude<ExtArgs> | null
    /**
     * The data needed to create a BlogContentBlock.
     */
    data: XOR<BlogContentBlockCreateInput, BlogContentBlockUncheckedCreateInput>
  }

  /**
   * BlogContentBlock createMany
   */
  export type BlogContentBlockCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BlogContentBlocks.
     */
    data: BlogContentBlockCreateManyInput | BlogContentBlockCreateManyInput[]
  }

  /**
   * BlogContentBlock createManyAndReturn
   */
  export type BlogContentBlockCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogContentBlock
     */
    select?: BlogContentBlockSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many BlogContentBlocks.
     */
    data: BlogContentBlockCreateManyInput | BlogContentBlockCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogContentBlockIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BlogContentBlock update
   */
  export type BlogContentBlockUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogContentBlock
     */
    select?: BlogContentBlockSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogContentBlockInclude<ExtArgs> | null
    /**
     * The data needed to update a BlogContentBlock.
     */
    data: XOR<BlogContentBlockUpdateInput, BlogContentBlockUncheckedUpdateInput>
    /**
     * Choose, which BlogContentBlock to update.
     */
    where: BlogContentBlockWhereUniqueInput
  }

  /**
   * BlogContentBlock updateMany
   */
  export type BlogContentBlockUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BlogContentBlocks.
     */
    data: XOR<BlogContentBlockUpdateManyMutationInput, BlogContentBlockUncheckedUpdateManyInput>
    /**
     * Filter which BlogContentBlocks to update
     */
    where?: BlogContentBlockWhereInput
  }

  /**
   * BlogContentBlock upsert
   */
  export type BlogContentBlockUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogContentBlock
     */
    select?: BlogContentBlockSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogContentBlockInclude<ExtArgs> | null
    /**
     * The filter to search for the BlogContentBlock to update in case it exists.
     */
    where: BlogContentBlockWhereUniqueInput
    /**
     * In case the BlogContentBlock found by the `where` argument doesn't exist, create a new BlogContentBlock with this data.
     */
    create: XOR<BlogContentBlockCreateInput, BlogContentBlockUncheckedCreateInput>
    /**
     * In case the BlogContentBlock was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BlogContentBlockUpdateInput, BlogContentBlockUncheckedUpdateInput>
  }

  /**
   * BlogContentBlock delete
   */
  export type BlogContentBlockDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogContentBlock
     */
    select?: BlogContentBlockSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogContentBlockInclude<ExtArgs> | null
    /**
     * Filter which BlogContentBlock to delete.
     */
    where: BlogContentBlockWhereUniqueInput
  }

  /**
   * BlogContentBlock deleteMany
   */
  export type BlogContentBlockDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BlogContentBlocks to delete
     */
    where?: BlogContentBlockWhereInput
  }

  /**
   * BlogContentBlock without action
   */
  export type BlogContentBlockDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogContentBlock
     */
    select?: BlogContentBlockSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogContentBlockInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ContactInquiryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    company: 'company',
    message: 'message',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type ContactInquiryScalarFieldEnum = (typeof ContactInquiryScalarFieldEnum)[keyof typeof ContactInquiryScalarFieldEnum]


  export const AuditRequestScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    website: 'website',
    report: 'report',
    status: 'status',
    scheduledDate: 'scheduledDate',
    createdAt: 'createdAt'
  };

  export type AuditRequestScalarFieldEnum = (typeof AuditRequestScalarFieldEnum)[keyof typeof AuditRequestScalarFieldEnum]


  export const PageContentScalarFieldEnum: {
    id: 'id',
    section: 'section',
    key: 'key',
    value: 'value',
    updatedAt: 'updatedAt'
  };

  export type PageContentScalarFieldEnum = (typeof PageContentScalarFieldEnum)[keyof typeof PageContentScalarFieldEnum]


  export const ProjectScalarFieldEnum: {
    id: 'id',
    title: 'title',
    shortDescription: 'shortDescription',
    description: 'description',
    imageUrl: 'imageUrl',
    tags: 'tags',
    liveLink: 'liveLink',
    githubLink: 'githubLink',
    sorting: 'sorting',
    serviceId: 'serviceId',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]


  export const ServiceScalarFieldEnum: {
    id: 'id',
    name: 'name',
    sorting: 'sorting',
    description: 'description',
    tags: 'tags',
    tasks: 'tasks',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ServiceScalarFieldEnum = (typeof ServiceScalarFieldEnum)[keyof typeof ServiceScalarFieldEnum]


  export const SliderContentScalarFieldEnum: {
    id: 'id',
    title: 'title',
    shortDescription: 'shortDescription',
    imageUrl: 'imageUrl',
    sorting: 'sorting',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type SliderContentScalarFieldEnum = (typeof SliderContentScalarFieldEnum)[keyof typeof SliderContentScalarFieldEnum]


  export const AdminScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    resetCode: 'resetCode',
    resetCodeExpires: 'resetCodeExpires',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum]


  export const SiteVisitScalarFieldEnum: {
    id: 'id',
    path: 'path',
    ipHash: 'ipHash',
    createdAt: 'createdAt'
  };

  export type SiteVisitScalarFieldEnum = (typeof SiteVisitScalarFieldEnum)[keyof typeof SiteVisitScalarFieldEnum]


  export const BlogCategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BlogCategoryScalarFieldEnum = (typeof BlogCategoryScalarFieldEnum)[keyof typeof BlogCategoryScalarFieldEnum]


  export const BlogSubCategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    categoryId: 'categoryId',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BlogSubCategoryScalarFieldEnum = (typeof BlogSubCategoryScalarFieldEnum)[keyof typeof BlogSubCategoryScalarFieldEnum]


  export const BlogScalarFieldEnum: {
    id: 'id',
    title: 'title',
    slug: 'slug',
    mainImage: 'mainImage',
    categoryId: 'categoryId',
    subcategoryId: 'subcategoryId',
    metaTitle: 'metaTitle',
    metaDescription: 'metaDescription',
    keywords: 'keywords',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BlogScalarFieldEnum = (typeof BlogScalarFieldEnum)[keyof typeof BlogScalarFieldEnum]


  export const BlogContentBlockScalarFieldEnum: {
    id: 'id',
    blogId: 'blogId',
    subTitle: 'subTitle',
    images: 'images',
    layoutStyle: 'layoutStyle',
    content: 'content',
    sorting: 'sorting',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BlogContentBlockScalarFieldEnum = (typeof BlogContentBlockScalarFieldEnum)[keyof typeof BlogContentBlockScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type ContactInquiryWhereInput = {
    AND?: ContactInquiryWhereInput | ContactInquiryWhereInput[]
    OR?: ContactInquiryWhereInput[]
    NOT?: ContactInquiryWhereInput | ContactInquiryWhereInput[]
    id?: StringFilter<"ContactInquiry"> | string
    name?: StringFilter<"ContactInquiry"> | string
    email?: StringFilter<"ContactInquiry"> | string
    company?: StringNullableFilter<"ContactInquiry"> | string | null
    message?: StringFilter<"ContactInquiry"> | string
    status?: StringFilter<"ContactInquiry"> | string
    createdAt?: DateTimeFilter<"ContactInquiry"> | Date | string
  }

  export type ContactInquiryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    company?: SortOrderInput | SortOrder
    message?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type ContactInquiryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ContactInquiryWhereInput | ContactInquiryWhereInput[]
    OR?: ContactInquiryWhereInput[]
    NOT?: ContactInquiryWhereInput | ContactInquiryWhereInput[]
    name?: StringFilter<"ContactInquiry"> | string
    email?: StringFilter<"ContactInquiry"> | string
    company?: StringNullableFilter<"ContactInquiry"> | string | null
    message?: StringFilter<"ContactInquiry"> | string
    status?: StringFilter<"ContactInquiry"> | string
    createdAt?: DateTimeFilter<"ContactInquiry"> | Date | string
  }, "id">

  export type ContactInquiryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    company?: SortOrderInput | SortOrder
    message?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: ContactInquiryCountOrderByAggregateInput
    _max?: ContactInquiryMaxOrderByAggregateInput
    _min?: ContactInquiryMinOrderByAggregateInput
  }

  export type ContactInquiryScalarWhereWithAggregatesInput = {
    AND?: ContactInquiryScalarWhereWithAggregatesInput | ContactInquiryScalarWhereWithAggregatesInput[]
    OR?: ContactInquiryScalarWhereWithAggregatesInput[]
    NOT?: ContactInquiryScalarWhereWithAggregatesInput | ContactInquiryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ContactInquiry"> | string
    name?: StringWithAggregatesFilter<"ContactInquiry"> | string
    email?: StringWithAggregatesFilter<"ContactInquiry"> | string
    company?: StringNullableWithAggregatesFilter<"ContactInquiry"> | string | null
    message?: StringWithAggregatesFilter<"ContactInquiry"> | string
    status?: StringWithAggregatesFilter<"ContactInquiry"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ContactInquiry"> | Date | string
  }

  export type AuditRequestWhereInput = {
    AND?: AuditRequestWhereInput | AuditRequestWhereInput[]
    OR?: AuditRequestWhereInput[]
    NOT?: AuditRequestWhereInput | AuditRequestWhereInput[]
    id?: StringFilter<"AuditRequest"> | string
    name?: StringFilter<"AuditRequest"> | string
    email?: StringFilter<"AuditRequest"> | string
    website?: StringFilter<"AuditRequest"> | string
    report?: StringFilter<"AuditRequest"> | string
    status?: StringFilter<"AuditRequest"> | string
    scheduledDate?: DateTimeNullableFilter<"AuditRequest"> | Date | string | null
    createdAt?: DateTimeFilter<"AuditRequest"> | Date | string
  }

  export type AuditRequestOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    website?: SortOrder
    report?: SortOrder
    status?: SortOrder
    scheduledDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type AuditRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AuditRequestWhereInput | AuditRequestWhereInput[]
    OR?: AuditRequestWhereInput[]
    NOT?: AuditRequestWhereInput | AuditRequestWhereInput[]
    name?: StringFilter<"AuditRequest"> | string
    email?: StringFilter<"AuditRequest"> | string
    website?: StringFilter<"AuditRequest"> | string
    report?: StringFilter<"AuditRequest"> | string
    status?: StringFilter<"AuditRequest"> | string
    scheduledDate?: DateTimeNullableFilter<"AuditRequest"> | Date | string | null
    createdAt?: DateTimeFilter<"AuditRequest"> | Date | string
  }, "id">

  export type AuditRequestOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    website?: SortOrder
    report?: SortOrder
    status?: SortOrder
    scheduledDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: AuditRequestCountOrderByAggregateInput
    _max?: AuditRequestMaxOrderByAggregateInput
    _min?: AuditRequestMinOrderByAggregateInput
  }

  export type AuditRequestScalarWhereWithAggregatesInput = {
    AND?: AuditRequestScalarWhereWithAggregatesInput | AuditRequestScalarWhereWithAggregatesInput[]
    OR?: AuditRequestScalarWhereWithAggregatesInput[]
    NOT?: AuditRequestScalarWhereWithAggregatesInput | AuditRequestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AuditRequest"> | string
    name?: StringWithAggregatesFilter<"AuditRequest"> | string
    email?: StringWithAggregatesFilter<"AuditRequest"> | string
    website?: StringWithAggregatesFilter<"AuditRequest"> | string
    report?: StringWithAggregatesFilter<"AuditRequest"> | string
    status?: StringWithAggregatesFilter<"AuditRequest"> | string
    scheduledDate?: DateTimeNullableWithAggregatesFilter<"AuditRequest"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"AuditRequest"> | Date | string
  }

  export type PageContentWhereInput = {
    AND?: PageContentWhereInput | PageContentWhereInput[]
    OR?: PageContentWhereInput[]
    NOT?: PageContentWhereInput | PageContentWhereInput[]
    id?: StringFilter<"PageContent"> | string
    section?: StringFilter<"PageContent"> | string
    key?: StringFilter<"PageContent"> | string
    value?: StringFilter<"PageContent"> | string
    updatedAt?: DateTimeFilter<"PageContent"> | Date | string
  }

  export type PageContentOrderByWithRelationInput = {
    id?: SortOrder
    section?: SortOrder
    key?: SortOrder
    value?: SortOrder
    updatedAt?: SortOrder
  }

  export type PageContentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    key?: string
    AND?: PageContentWhereInput | PageContentWhereInput[]
    OR?: PageContentWhereInput[]
    NOT?: PageContentWhereInput | PageContentWhereInput[]
    section?: StringFilter<"PageContent"> | string
    value?: StringFilter<"PageContent"> | string
    updatedAt?: DateTimeFilter<"PageContent"> | Date | string
  }, "id" | "key">

  export type PageContentOrderByWithAggregationInput = {
    id?: SortOrder
    section?: SortOrder
    key?: SortOrder
    value?: SortOrder
    updatedAt?: SortOrder
    _count?: PageContentCountOrderByAggregateInput
    _max?: PageContentMaxOrderByAggregateInput
    _min?: PageContentMinOrderByAggregateInput
  }

  export type PageContentScalarWhereWithAggregatesInput = {
    AND?: PageContentScalarWhereWithAggregatesInput | PageContentScalarWhereWithAggregatesInput[]
    OR?: PageContentScalarWhereWithAggregatesInput[]
    NOT?: PageContentScalarWhereWithAggregatesInput | PageContentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PageContent"> | string
    section?: StringWithAggregatesFilter<"PageContent"> | string
    key?: StringWithAggregatesFilter<"PageContent"> | string
    value?: StringWithAggregatesFilter<"PageContent"> | string
    updatedAt?: DateTimeWithAggregatesFilter<"PageContent"> | Date | string
  }

  export type ProjectWhereInput = {
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    id?: StringFilter<"Project"> | string
    title?: StringFilter<"Project"> | string
    shortDescription?: StringNullableFilter<"Project"> | string | null
    description?: StringFilter<"Project"> | string
    imageUrl?: StringNullableFilter<"Project"> | string | null
    tags?: StringNullableFilter<"Project"> | string | null
    liveLink?: StringNullableFilter<"Project"> | string | null
    githubLink?: StringNullableFilter<"Project"> | string | null
    sorting?: IntFilter<"Project"> | number
    serviceId?: StringNullableFilter<"Project"> | string | null
    status?: BoolFilter<"Project"> | boolean
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    service?: XOR<ServiceNullableRelationFilter, ServiceWhereInput> | null
  }

  export type ProjectOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    shortDescription?: SortOrderInput | SortOrder
    description?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    tags?: SortOrderInput | SortOrder
    liveLink?: SortOrderInput | SortOrder
    githubLink?: SortOrderInput | SortOrder
    sorting?: SortOrder
    serviceId?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    service?: ServiceOrderByWithRelationInput
  }

  export type ProjectWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    title?: StringFilter<"Project"> | string
    shortDescription?: StringNullableFilter<"Project"> | string | null
    description?: StringFilter<"Project"> | string
    imageUrl?: StringNullableFilter<"Project"> | string | null
    tags?: StringNullableFilter<"Project"> | string | null
    liveLink?: StringNullableFilter<"Project"> | string | null
    githubLink?: StringNullableFilter<"Project"> | string | null
    sorting?: IntFilter<"Project"> | number
    serviceId?: StringNullableFilter<"Project"> | string | null
    status?: BoolFilter<"Project"> | boolean
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    service?: XOR<ServiceNullableRelationFilter, ServiceWhereInput> | null
  }, "id">

  export type ProjectOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    shortDescription?: SortOrderInput | SortOrder
    description?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    tags?: SortOrderInput | SortOrder
    liveLink?: SortOrderInput | SortOrder
    githubLink?: SortOrderInput | SortOrder
    sorting?: SortOrder
    serviceId?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProjectCountOrderByAggregateInput
    _avg?: ProjectAvgOrderByAggregateInput
    _max?: ProjectMaxOrderByAggregateInput
    _min?: ProjectMinOrderByAggregateInput
    _sum?: ProjectSumOrderByAggregateInput
  }

  export type ProjectScalarWhereWithAggregatesInput = {
    AND?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    OR?: ProjectScalarWhereWithAggregatesInput[]
    NOT?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Project"> | string
    title?: StringWithAggregatesFilter<"Project"> | string
    shortDescription?: StringNullableWithAggregatesFilter<"Project"> | string | null
    description?: StringWithAggregatesFilter<"Project"> | string
    imageUrl?: StringNullableWithAggregatesFilter<"Project"> | string | null
    tags?: StringNullableWithAggregatesFilter<"Project"> | string | null
    liveLink?: StringNullableWithAggregatesFilter<"Project"> | string | null
    githubLink?: StringNullableWithAggregatesFilter<"Project"> | string | null
    sorting?: IntWithAggregatesFilter<"Project"> | number
    serviceId?: StringNullableWithAggregatesFilter<"Project"> | string | null
    status?: BoolWithAggregatesFilter<"Project"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
  }

  export type ServiceWhereInput = {
    AND?: ServiceWhereInput | ServiceWhereInput[]
    OR?: ServiceWhereInput[]
    NOT?: ServiceWhereInput | ServiceWhereInput[]
    id?: StringFilter<"Service"> | string
    name?: StringFilter<"Service"> | string
    sorting?: IntFilter<"Service"> | number
    description?: StringFilter<"Service"> | string
    tags?: StringNullableFilter<"Service"> | string | null
    tasks?: StringNullableFilter<"Service"> | string | null
    status?: BoolFilter<"Service"> | boolean
    createdAt?: DateTimeFilter<"Service"> | Date | string
    updatedAt?: DateTimeFilter<"Service"> | Date | string
    projects?: ProjectListRelationFilter
  }

  export type ServiceOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    sorting?: SortOrder
    description?: SortOrder
    tags?: SortOrderInput | SortOrder
    tasks?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    projects?: ProjectOrderByRelationAggregateInput
  }

  export type ServiceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ServiceWhereInput | ServiceWhereInput[]
    OR?: ServiceWhereInput[]
    NOT?: ServiceWhereInput | ServiceWhereInput[]
    name?: StringFilter<"Service"> | string
    sorting?: IntFilter<"Service"> | number
    description?: StringFilter<"Service"> | string
    tags?: StringNullableFilter<"Service"> | string | null
    tasks?: StringNullableFilter<"Service"> | string | null
    status?: BoolFilter<"Service"> | boolean
    createdAt?: DateTimeFilter<"Service"> | Date | string
    updatedAt?: DateTimeFilter<"Service"> | Date | string
    projects?: ProjectListRelationFilter
  }, "id">

  export type ServiceOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    sorting?: SortOrder
    description?: SortOrder
    tags?: SortOrderInput | SortOrder
    tasks?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ServiceCountOrderByAggregateInput
    _avg?: ServiceAvgOrderByAggregateInput
    _max?: ServiceMaxOrderByAggregateInput
    _min?: ServiceMinOrderByAggregateInput
    _sum?: ServiceSumOrderByAggregateInput
  }

  export type ServiceScalarWhereWithAggregatesInput = {
    AND?: ServiceScalarWhereWithAggregatesInput | ServiceScalarWhereWithAggregatesInput[]
    OR?: ServiceScalarWhereWithAggregatesInput[]
    NOT?: ServiceScalarWhereWithAggregatesInput | ServiceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Service"> | string
    name?: StringWithAggregatesFilter<"Service"> | string
    sorting?: IntWithAggregatesFilter<"Service"> | number
    description?: StringWithAggregatesFilter<"Service"> | string
    tags?: StringNullableWithAggregatesFilter<"Service"> | string | null
    tasks?: StringNullableWithAggregatesFilter<"Service"> | string | null
    status?: BoolWithAggregatesFilter<"Service"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Service"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Service"> | Date | string
  }

  export type SliderContentWhereInput = {
    AND?: SliderContentWhereInput | SliderContentWhereInput[]
    OR?: SliderContentWhereInput[]
    NOT?: SliderContentWhereInput | SliderContentWhereInput[]
    id?: StringFilter<"SliderContent"> | string
    title?: StringFilter<"SliderContent"> | string
    shortDescription?: StringNullableFilter<"SliderContent"> | string | null
    imageUrl?: StringNullableFilter<"SliderContent"> | string | null
    sorting?: IntFilter<"SliderContent"> | number
    status?: BoolFilter<"SliderContent"> | boolean
    createdAt?: DateTimeFilter<"SliderContent"> | Date | string
  }

  export type SliderContentOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    shortDescription?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    sorting?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type SliderContentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SliderContentWhereInput | SliderContentWhereInput[]
    OR?: SliderContentWhereInput[]
    NOT?: SliderContentWhereInput | SliderContentWhereInput[]
    title?: StringFilter<"SliderContent"> | string
    shortDescription?: StringNullableFilter<"SliderContent"> | string | null
    imageUrl?: StringNullableFilter<"SliderContent"> | string | null
    sorting?: IntFilter<"SliderContent"> | number
    status?: BoolFilter<"SliderContent"> | boolean
    createdAt?: DateTimeFilter<"SliderContent"> | Date | string
  }, "id">

  export type SliderContentOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    shortDescription?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    sorting?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: SliderContentCountOrderByAggregateInput
    _avg?: SliderContentAvgOrderByAggregateInput
    _max?: SliderContentMaxOrderByAggregateInput
    _min?: SliderContentMinOrderByAggregateInput
    _sum?: SliderContentSumOrderByAggregateInput
  }

  export type SliderContentScalarWhereWithAggregatesInput = {
    AND?: SliderContentScalarWhereWithAggregatesInput | SliderContentScalarWhereWithAggregatesInput[]
    OR?: SliderContentScalarWhereWithAggregatesInput[]
    NOT?: SliderContentScalarWhereWithAggregatesInput | SliderContentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SliderContent"> | string
    title?: StringWithAggregatesFilter<"SliderContent"> | string
    shortDescription?: StringNullableWithAggregatesFilter<"SliderContent"> | string | null
    imageUrl?: StringNullableWithAggregatesFilter<"SliderContent"> | string | null
    sorting?: IntWithAggregatesFilter<"SliderContent"> | number
    status?: BoolWithAggregatesFilter<"SliderContent"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"SliderContent"> | Date | string
  }

  export type AdminWhereInput = {
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    id?: StringFilter<"Admin"> | string
    email?: StringFilter<"Admin"> | string
    password?: StringFilter<"Admin"> | string
    resetCode?: StringNullableFilter<"Admin"> | string | null
    resetCodeExpires?: DateTimeNullableFilter<"Admin"> | Date | string | null
    createdAt?: DateTimeFilter<"Admin"> | Date | string
    updatedAt?: DateTimeFilter<"Admin"> | Date | string
  }

  export type AdminOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    resetCode?: SortOrderInput | SortOrder
    resetCodeExpires?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    password?: StringFilter<"Admin"> | string
    resetCode?: StringNullableFilter<"Admin"> | string | null
    resetCodeExpires?: DateTimeNullableFilter<"Admin"> | Date | string | null
    createdAt?: DateTimeFilter<"Admin"> | Date | string
    updatedAt?: DateTimeFilter<"Admin"> | Date | string
  }, "id" | "email">

  export type AdminOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    resetCode?: SortOrderInput | SortOrder
    resetCodeExpires?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AdminCountOrderByAggregateInput
    _max?: AdminMaxOrderByAggregateInput
    _min?: AdminMinOrderByAggregateInput
  }

  export type AdminScalarWhereWithAggregatesInput = {
    AND?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    OR?: AdminScalarWhereWithAggregatesInput[]
    NOT?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Admin"> | string
    email?: StringWithAggregatesFilter<"Admin"> | string
    password?: StringWithAggregatesFilter<"Admin"> | string
    resetCode?: StringNullableWithAggregatesFilter<"Admin"> | string | null
    resetCodeExpires?: DateTimeNullableWithAggregatesFilter<"Admin"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Admin"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Admin"> | Date | string
  }

  export type SiteVisitWhereInput = {
    AND?: SiteVisitWhereInput | SiteVisitWhereInput[]
    OR?: SiteVisitWhereInput[]
    NOT?: SiteVisitWhereInput | SiteVisitWhereInput[]
    id?: StringFilter<"SiteVisit"> | string
    path?: StringFilter<"SiteVisit"> | string
    ipHash?: StringNullableFilter<"SiteVisit"> | string | null
    createdAt?: DateTimeFilter<"SiteVisit"> | Date | string
  }

  export type SiteVisitOrderByWithRelationInput = {
    id?: SortOrder
    path?: SortOrder
    ipHash?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type SiteVisitWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SiteVisitWhereInput | SiteVisitWhereInput[]
    OR?: SiteVisitWhereInput[]
    NOT?: SiteVisitWhereInput | SiteVisitWhereInput[]
    path?: StringFilter<"SiteVisit"> | string
    ipHash?: StringNullableFilter<"SiteVisit"> | string | null
    createdAt?: DateTimeFilter<"SiteVisit"> | Date | string
  }, "id">

  export type SiteVisitOrderByWithAggregationInput = {
    id?: SortOrder
    path?: SortOrder
    ipHash?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: SiteVisitCountOrderByAggregateInput
    _max?: SiteVisitMaxOrderByAggregateInput
    _min?: SiteVisitMinOrderByAggregateInput
  }

  export type SiteVisitScalarWhereWithAggregatesInput = {
    AND?: SiteVisitScalarWhereWithAggregatesInput | SiteVisitScalarWhereWithAggregatesInput[]
    OR?: SiteVisitScalarWhereWithAggregatesInput[]
    NOT?: SiteVisitScalarWhereWithAggregatesInput | SiteVisitScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SiteVisit"> | string
    path?: StringWithAggregatesFilter<"SiteVisit"> | string
    ipHash?: StringNullableWithAggregatesFilter<"SiteVisit"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"SiteVisit"> | Date | string
  }

  export type BlogCategoryWhereInput = {
    AND?: BlogCategoryWhereInput | BlogCategoryWhereInput[]
    OR?: BlogCategoryWhereInput[]
    NOT?: BlogCategoryWhereInput | BlogCategoryWhereInput[]
    id?: StringFilter<"BlogCategory"> | string
    name?: StringFilter<"BlogCategory"> | string
    slug?: StringFilter<"BlogCategory"> | string
    status?: BoolFilter<"BlogCategory"> | boolean
    createdAt?: DateTimeFilter<"BlogCategory"> | Date | string
    updatedAt?: DateTimeFilter<"BlogCategory"> | Date | string
    subcategories?: BlogSubCategoryListRelationFilter
    blogs?: BlogListRelationFilter
  }

  export type BlogCategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    subcategories?: BlogSubCategoryOrderByRelationAggregateInput
    blogs?: BlogOrderByRelationAggregateInput
  }

  export type BlogCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: BlogCategoryWhereInput | BlogCategoryWhereInput[]
    OR?: BlogCategoryWhereInput[]
    NOT?: BlogCategoryWhereInput | BlogCategoryWhereInput[]
    name?: StringFilter<"BlogCategory"> | string
    status?: BoolFilter<"BlogCategory"> | boolean
    createdAt?: DateTimeFilter<"BlogCategory"> | Date | string
    updatedAt?: DateTimeFilter<"BlogCategory"> | Date | string
    subcategories?: BlogSubCategoryListRelationFilter
    blogs?: BlogListRelationFilter
  }, "id" | "slug">

  export type BlogCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BlogCategoryCountOrderByAggregateInput
    _max?: BlogCategoryMaxOrderByAggregateInput
    _min?: BlogCategoryMinOrderByAggregateInput
  }

  export type BlogCategoryScalarWhereWithAggregatesInput = {
    AND?: BlogCategoryScalarWhereWithAggregatesInput | BlogCategoryScalarWhereWithAggregatesInput[]
    OR?: BlogCategoryScalarWhereWithAggregatesInput[]
    NOT?: BlogCategoryScalarWhereWithAggregatesInput | BlogCategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BlogCategory"> | string
    name?: StringWithAggregatesFilter<"BlogCategory"> | string
    slug?: StringWithAggregatesFilter<"BlogCategory"> | string
    status?: BoolWithAggregatesFilter<"BlogCategory"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"BlogCategory"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"BlogCategory"> | Date | string
  }

  export type BlogSubCategoryWhereInput = {
    AND?: BlogSubCategoryWhereInput | BlogSubCategoryWhereInput[]
    OR?: BlogSubCategoryWhereInput[]
    NOT?: BlogSubCategoryWhereInput | BlogSubCategoryWhereInput[]
    id?: StringFilter<"BlogSubCategory"> | string
    name?: StringFilter<"BlogSubCategory"> | string
    slug?: StringFilter<"BlogSubCategory"> | string
    categoryId?: StringFilter<"BlogSubCategory"> | string
    status?: BoolFilter<"BlogSubCategory"> | boolean
    createdAt?: DateTimeFilter<"BlogSubCategory"> | Date | string
    updatedAt?: DateTimeFilter<"BlogSubCategory"> | Date | string
    category?: XOR<BlogCategoryRelationFilter, BlogCategoryWhereInput>
    blogs?: BlogListRelationFilter
  }

  export type BlogSubCategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    categoryId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    category?: BlogCategoryOrderByWithRelationInput
    blogs?: BlogOrderByRelationAggregateInput
  }

  export type BlogSubCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: BlogSubCategoryWhereInput | BlogSubCategoryWhereInput[]
    OR?: BlogSubCategoryWhereInput[]
    NOT?: BlogSubCategoryWhereInput | BlogSubCategoryWhereInput[]
    name?: StringFilter<"BlogSubCategory"> | string
    categoryId?: StringFilter<"BlogSubCategory"> | string
    status?: BoolFilter<"BlogSubCategory"> | boolean
    createdAt?: DateTimeFilter<"BlogSubCategory"> | Date | string
    updatedAt?: DateTimeFilter<"BlogSubCategory"> | Date | string
    category?: XOR<BlogCategoryRelationFilter, BlogCategoryWhereInput>
    blogs?: BlogListRelationFilter
  }, "id" | "slug">

  export type BlogSubCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    categoryId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BlogSubCategoryCountOrderByAggregateInput
    _max?: BlogSubCategoryMaxOrderByAggregateInput
    _min?: BlogSubCategoryMinOrderByAggregateInput
  }

  export type BlogSubCategoryScalarWhereWithAggregatesInput = {
    AND?: BlogSubCategoryScalarWhereWithAggregatesInput | BlogSubCategoryScalarWhereWithAggregatesInput[]
    OR?: BlogSubCategoryScalarWhereWithAggregatesInput[]
    NOT?: BlogSubCategoryScalarWhereWithAggregatesInput | BlogSubCategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BlogSubCategory"> | string
    name?: StringWithAggregatesFilter<"BlogSubCategory"> | string
    slug?: StringWithAggregatesFilter<"BlogSubCategory"> | string
    categoryId?: StringWithAggregatesFilter<"BlogSubCategory"> | string
    status?: BoolWithAggregatesFilter<"BlogSubCategory"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"BlogSubCategory"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"BlogSubCategory"> | Date | string
  }

  export type BlogWhereInput = {
    AND?: BlogWhereInput | BlogWhereInput[]
    OR?: BlogWhereInput[]
    NOT?: BlogWhereInput | BlogWhereInput[]
    id?: StringFilter<"Blog"> | string
    title?: StringFilter<"Blog"> | string
    slug?: StringFilter<"Blog"> | string
    mainImage?: StringNullableFilter<"Blog"> | string | null
    categoryId?: StringFilter<"Blog"> | string
    subcategoryId?: StringNullableFilter<"Blog"> | string | null
    metaTitle?: StringNullableFilter<"Blog"> | string | null
    metaDescription?: StringNullableFilter<"Blog"> | string | null
    keywords?: StringNullableFilter<"Blog"> | string | null
    status?: BoolFilter<"Blog"> | boolean
    createdAt?: DateTimeFilter<"Blog"> | Date | string
    updatedAt?: DateTimeFilter<"Blog"> | Date | string
    category?: XOR<BlogCategoryRelationFilter, BlogCategoryWhereInput>
    subcategory?: XOR<BlogSubCategoryNullableRelationFilter, BlogSubCategoryWhereInput> | null
    contentBlocks?: BlogContentBlockListRelationFilter
  }

  export type BlogOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    mainImage?: SortOrderInput | SortOrder
    categoryId?: SortOrder
    subcategoryId?: SortOrderInput | SortOrder
    metaTitle?: SortOrderInput | SortOrder
    metaDescription?: SortOrderInput | SortOrder
    keywords?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    category?: BlogCategoryOrderByWithRelationInput
    subcategory?: BlogSubCategoryOrderByWithRelationInput
    contentBlocks?: BlogContentBlockOrderByRelationAggregateInput
  }

  export type BlogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: BlogWhereInput | BlogWhereInput[]
    OR?: BlogWhereInput[]
    NOT?: BlogWhereInput | BlogWhereInput[]
    title?: StringFilter<"Blog"> | string
    mainImage?: StringNullableFilter<"Blog"> | string | null
    categoryId?: StringFilter<"Blog"> | string
    subcategoryId?: StringNullableFilter<"Blog"> | string | null
    metaTitle?: StringNullableFilter<"Blog"> | string | null
    metaDescription?: StringNullableFilter<"Blog"> | string | null
    keywords?: StringNullableFilter<"Blog"> | string | null
    status?: BoolFilter<"Blog"> | boolean
    createdAt?: DateTimeFilter<"Blog"> | Date | string
    updatedAt?: DateTimeFilter<"Blog"> | Date | string
    category?: XOR<BlogCategoryRelationFilter, BlogCategoryWhereInput>
    subcategory?: XOR<BlogSubCategoryNullableRelationFilter, BlogSubCategoryWhereInput> | null
    contentBlocks?: BlogContentBlockListRelationFilter
  }, "id" | "slug">

  export type BlogOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    mainImage?: SortOrderInput | SortOrder
    categoryId?: SortOrder
    subcategoryId?: SortOrderInput | SortOrder
    metaTitle?: SortOrderInput | SortOrder
    metaDescription?: SortOrderInput | SortOrder
    keywords?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BlogCountOrderByAggregateInput
    _max?: BlogMaxOrderByAggregateInput
    _min?: BlogMinOrderByAggregateInput
  }

  export type BlogScalarWhereWithAggregatesInput = {
    AND?: BlogScalarWhereWithAggregatesInput | BlogScalarWhereWithAggregatesInput[]
    OR?: BlogScalarWhereWithAggregatesInput[]
    NOT?: BlogScalarWhereWithAggregatesInput | BlogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Blog"> | string
    title?: StringWithAggregatesFilter<"Blog"> | string
    slug?: StringWithAggregatesFilter<"Blog"> | string
    mainImage?: StringNullableWithAggregatesFilter<"Blog"> | string | null
    categoryId?: StringWithAggregatesFilter<"Blog"> | string
    subcategoryId?: StringNullableWithAggregatesFilter<"Blog"> | string | null
    metaTitle?: StringNullableWithAggregatesFilter<"Blog"> | string | null
    metaDescription?: StringNullableWithAggregatesFilter<"Blog"> | string | null
    keywords?: StringNullableWithAggregatesFilter<"Blog"> | string | null
    status?: BoolWithAggregatesFilter<"Blog"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Blog"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Blog"> | Date | string
  }

  export type BlogContentBlockWhereInput = {
    AND?: BlogContentBlockWhereInput | BlogContentBlockWhereInput[]
    OR?: BlogContentBlockWhereInput[]
    NOT?: BlogContentBlockWhereInput | BlogContentBlockWhereInput[]
    id?: StringFilter<"BlogContentBlock"> | string
    blogId?: StringFilter<"BlogContentBlock"> | string
    subTitle?: StringNullableFilter<"BlogContentBlock"> | string | null
    images?: StringNullableFilter<"BlogContentBlock"> | string | null
    layoutStyle?: StringFilter<"BlogContentBlock"> | string
    content?: StringNullableFilter<"BlogContentBlock"> | string | null
    sorting?: IntFilter<"BlogContentBlock"> | number
    createdAt?: DateTimeFilter<"BlogContentBlock"> | Date | string
    updatedAt?: DateTimeFilter<"BlogContentBlock"> | Date | string
    blog?: XOR<BlogRelationFilter, BlogWhereInput>
  }

  export type BlogContentBlockOrderByWithRelationInput = {
    id?: SortOrder
    blogId?: SortOrder
    subTitle?: SortOrderInput | SortOrder
    images?: SortOrderInput | SortOrder
    layoutStyle?: SortOrder
    content?: SortOrderInput | SortOrder
    sorting?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    blog?: BlogOrderByWithRelationInput
  }

  export type BlogContentBlockWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BlogContentBlockWhereInput | BlogContentBlockWhereInput[]
    OR?: BlogContentBlockWhereInput[]
    NOT?: BlogContentBlockWhereInput | BlogContentBlockWhereInput[]
    blogId?: StringFilter<"BlogContentBlock"> | string
    subTitle?: StringNullableFilter<"BlogContentBlock"> | string | null
    images?: StringNullableFilter<"BlogContentBlock"> | string | null
    layoutStyle?: StringFilter<"BlogContentBlock"> | string
    content?: StringNullableFilter<"BlogContentBlock"> | string | null
    sorting?: IntFilter<"BlogContentBlock"> | number
    createdAt?: DateTimeFilter<"BlogContentBlock"> | Date | string
    updatedAt?: DateTimeFilter<"BlogContentBlock"> | Date | string
    blog?: XOR<BlogRelationFilter, BlogWhereInput>
  }, "id">

  export type BlogContentBlockOrderByWithAggregationInput = {
    id?: SortOrder
    blogId?: SortOrder
    subTitle?: SortOrderInput | SortOrder
    images?: SortOrderInput | SortOrder
    layoutStyle?: SortOrder
    content?: SortOrderInput | SortOrder
    sorting?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BlogContentBlockCountOrderByAggregateInput
    _avg?: BlogContentBlockAvgOrderByAggregateInput
    _max?: BlogContentBlockMaxOrderByAggregateInput
    _min?: BlogContentBlockMinOrderByAggregateInput
    _sum?: BlogContentBlockSumOrderByAggregateInput
  }

  export type BlogContentBlockScalarWhereWithAggregatesInput = {
    AND?: BlogContentBlockScalarWhereWithAggregatesInput | BlogContentBlockScalarWhereWithAggregatesInput[]
    OR?: BlogContentBlockScalarWhereWithAggregatesInput[]
    NOT?: BlogContentBlockScalarWhereWithAggregatesInput | BlogContentBlockScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BlogContentBlock"> | string
    blogId?: StringWithAggregatesFilter<"BlogContentBlock"> | string
    subTitle?: StringNullableWithAggregatesFilter<"BlogContentBlock"> | string | null
    images?: StringNullableWithAggregatesFilter<"BlogContentBlock"> | string | null
    layoutStyle?: StringWithAggregatesFilter<"BlogContentBlock"> | string
    content?: StringNullableWithAggregatesFilter<"BlogContentBlock"> | string | null
    sorting?: IntWithAggregatesFilter<"BlogContentBlock"> | number
    createdAt?: DateTimeWithAggregatesFilter<"BlogContentBlock"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"BlogContentBlock"> | Date | string
  }

  export type ContactInquiryCreateInput = {
    id?: string
    name: string
    email: string
    company?: string | null
    message: string
    status?: string
    createdAt?: Date | string
  }

  export type ContactInquiryUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    company?: string | null
    message: string
    status?: string
    createdAt?: Date | string
  }

  export type ContactInquiryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    company?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactInquiryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    company?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactInquiryCreateManyInput = {
    id?: string
    name: string
    email: string
    company?: string | null
    message: string
    status?: string
    createdAt?: Date | string
  }

  export type ContactInquiryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    company?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactInquiryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    company?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditRequestCreateInput = {
    id?: string
    name: string
    email: string
    website: string
    report: string
    status?: string
    scheduledDate?: Date | string | null
    createdAt?: Date | string
  }

  export type AuditRequestUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    website: string
    report: string
    status?: string
    scheduledDate?: Date | string | null
    createdAt?: Date | string
  }

  export type AuditRequestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    report?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    scheduledDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditRequestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    report?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    scheduledDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditRequestCreateManyInput = {
    id?: string
    name: string
    email: string
    website: string
    report: string
    status?: string
    scheduledDate?: Date | string | null
    createdAt?: Date | string
  }

  export type AuditRequestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    report?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    scheduledDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditRequestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    report?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    scheduledDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PageContentCreateInput = {
    id?: string
    section: string
    key: string
    value: string
    updatedAt?: Date | string
  }

  export type PageContentUncheckedCreateInput = {
    id?: string
    section: string
    key: string
    value: string
    updatedAt?: Date | string
  }

  export type PageContentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    section?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PageContentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    section?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PageContentCreateManyInput = {
    id?: string
    section: string
    key: string
    value: string
    updatedAt?: Date | string
  }

  export type PageContentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    section?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PageContentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    section?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectCreateInput = {
    id?: string
    title: string
    shortDescription?: string | null
    description: string
    imageUrl?: string | null
    tags?: string | null
    liveLink?: string | null
    githubLink?: string | null
    sorting?: number
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    service?: ServiceCreateNestedOneWithoutProjectsInput
  }

  export type ProjectUncheckedCreateInput = {
    id?: string
    title: string
    shortDescription?: string | null
    description: string
    imageUrl?: string | null
    tags?: string | null
    liveLink?: string | null
    githubLink?: string | null
    sorting?: number
    serviceId?: string | null
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    liveLink?: NullableStringFieldUpdateOperationsInput | string | null
    githubLink?: NullableStringFieldUpdateOperationsInput | string | null
    sorting?: IntFieldUpdateOperationsInput | number
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    service?: ServiceUpdateOneWithoutProjectsNestedInput
  }

  export type ProjectUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    liveLink?: NullableStringFieldUpdateOperationsInput | string | null
    githubLink?: NullableStringFieldUpdateOperationsInput | string | null
    sorting?: IntFieldUpdateOperationsInput | number
    serviceId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectCreateManyInput = {
    id?: string
    title: string
    shortDescription?: string | null
    description: string
    imageUrl?: string | null
    tags?: string | null
    liveLink?: string | null
    githubLink?: string | null
    sorting?: number
    serviceId?: string | null
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    liveLink?: NullableStringFieldUpdateOperationsInput | string | null
    githubLink?: NullableStringFieldUpdateOperationsInput | string | null
    sorting?: IntFieldUpdateOperationsInput | number
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    liveLink?: NullableStringFieldUpdateOperationsInput | string | null
    githubLink?: NullableStringFieldUpdateOperationsInput | string | null
    sorting?: IntFieldUpdateOperationsInput | number
    serviceId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceCreateInput = {
    id?: string
    name: string
    sorting?: number
    description: string
    tags?: string | null
    tasks?: string | null
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    projects?: ProjectCreateNestedManyWithoutServiceInput
  }

  export type ServiceUncheckedCreateInput = {
    id?: string
    name: string
    sorting?: number
    description: string
    tags?: string | null
    tasks?: string | null
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    projects?: ProjectUncheckedCreateNestedManyWithoutServiceInput
  }

  export type ServiceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sorting?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    tasks?: NullableStringFieldUpdateOperationsInput | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projects?: ProjectUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sorting?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    tasks?: NullableStringFieldUpdateOperationsInput | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projects?: ProjectUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type ServiceCreateManyInput = {
    id?: string
    name: string
    sorting?: number
    description: string
    tags?: string | null
    tasks?: string | null
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ServiceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sorting?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    tasks?: NullableStringFieldUpdateOperationsInput | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sorting?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    tasks?: NullableStringFieldUpdateOperationsInput | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SliderContentCreateInput = {
    id?: string
    title: string
    shortDescription?: string | null
    imageUrl?: string | null
    sorting?: number
    status?: boolean
    createdAt?: Date | string
  }

  export type SliderContentUncheckedCreateInput = {
    id?: string
    title: string
    shortDescription?: string | null
    imageUrl?: string | null
    sorting?: number
    status?: boolean
    createdAt?: Date | string
  }

  export type SliderContentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sorting?: IntFieldUpdateOperationsInput | number
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SliderContentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sorting?: IntFieldUpdateOperationsInput | number
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SliderContentCreateManyInput = {
    id?: string
    title: string
    shortDescription?: string | null
    imageUrl?: string | null
    sorting?: number
    status?: boolean
    createdAt?: Date | string
  }

  export type SliderContentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sorting?: IntFieldUpdateOperationsInput | number
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SliderContentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sorting?: IntFieldUpdateOperationsInput | number
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminCreateInput = {
    id?: string
    email: string
    password: string
    resetCode?: string | null
    resetCodeExpires?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    resetCode?: string | null
    resetCodeExpires?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    resetCode?: NullableStringFieldUpdateOperationsInput | string | null
    resetCodeExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    resetCode?: NullableStringFieldUpdateOperationsInput | string | null
    resetCodeExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminCreateManyInput = {
    id?: string
    email: string
    password: string
    resetCode?: string | null
    resetCodeExpires?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    resetCode?: NullableStringFieldUpdateOperationsInput | string | null
    resetCodeExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    resetCode?: NullableStringFieldUpdateOperationsInput | string | null
    resetCodeExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SiteVisitCreateInput = {
    id?: string
    path: string
    ipHash?: string | null
    createdAt?: Date | string
  }

  export type SiteVisitUncheckedCreateInput = {
    id?: string
    path: string
    ipHash?: string | null
    createdAt?: Date | string
  }

  export type SiteVisitUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    ipHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SiteVisitUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    ipHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SiteVisitCreateManyInput = {
    id?: string
    path: string
    ipHash?: string | null
    createdAt?: Date | string
  }

  export type SiteVisitUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    ipHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SiteVisitUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    ipHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogCategoryCreateInput = {
    id?: string
    name: string
    slug: string
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    subcategories?: BlogSubCategoryCreateNestedManyWithoutCategoryInput
    blogs?: BlogCreateNestedManyWithoutCategoryInput
  }

  export type BlogCategoryUncheckedCreateInput = {
    id?: string
    name: string
    slug: string
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    subcategories?: BlogSubCategoryUncheckedCreateNestedManyWithoutCategoryInput
    blogs?: BlogUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type BlogCategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subcategories?: BlogSubCategoryUpdateManyWithoutCategoryNestedInput
    blogs?: BlogUpdateManyWithoutCategoryNestedInput
  }

  export type BlogCategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subcategories?: BlogSubCategoryUncheckedUpdateManyWithoutCategoryNestedInput
    blogs?: BlogUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type BlogCategoryCreateManyInput = {
    id?: string
    name: string
    slug: string
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BlogCategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogCategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogSubCategoryCreateInput = {
    id?: string
    name: string
    slug: string
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    category: BlogCategoryCreateNestedOneWithoutSubcategoriesInput
    blogs?: BlogCreateNestedManyWithoutSubcategoryInput
  }

  export type BlogSubCategoryUncheckedCreateInput = {
    id?: string
    name: string
    slug: string
    categoryId: string
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    blogs?: BlogUncheckedCreateNestedManyWithoutSubcategoryInput
  }

  export type BlogSubCategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: BlogCategoryUpdateOneRequiredWithoutSubcategoriesNestedInput
    blogs?: BlogUpdateManyWithoutSubcategoryNestedInput
  }

  export type BlogSubCategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blogs?: BlogUncheckedUpdateManyWithoutSubcategoryNestedInput
  }

  export type BlogSubCategoryCreateManyInput = {
    id?: string
    name: string
    slug: string
    categoryId: string
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BlogSubCategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogSubCategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogCreateInput = {
    id?: string
    title: string
    slug: string
    mainImage?: string | null
    metaTitle?: string | null
    metaDescription?: string | null
    keywords?: string | null
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    category: BlogCategoryCreateNestedOneWithoutBlogsInput
    subcategory?: BlogSubCategoryCreateNestedOneWithoutBlogsInput
    contentBlocks?: BlogContentBlockCreateNestedManyWithoutBlogInput
  }

  export type BlogUncheckedCreateInput = {
    id?: string
    title: string
    slug: string
    mainImage?: string | null
    categoryId: string
    subcategoryId?: string | null
    metaTitle?: string | null
    metaDescription?: string | null
    keywords?: string | null
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    contentBlocks?: BlogContentBlockUncheckedCreateNestedManyWithoutBlogInput
  }

  export type BlogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    mainImage?: NullableStringFieldUpdateOperationsInput | string | null
    metaTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    keywords?: NullableStringFieldUpdateOperationsInput | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: BlogCategoryUpdateOneRequiredWithoutBlogsNestedInput
    subcategory?: BlogSubCategoryUpdateOneWithoutBlogsNestedInput
    contentBlocks?: BlogContentBlockUpdateManyWithoutBlogNestedInput
  }

  export type BlogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    mainImage?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: StringFieldUpdateOperationsInput | string
    subcategoryId?: NullableStringFieldUpdateOperationsInput | string | null
    metaTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    keywords?: NullableStringFieldUpdateOperationsInput | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contentBlocks?: BlogContentBlockUncheckedUpdateManyWithoutBlogNestedInput
  }

  export type BlogCreateManyInput = {
    id?: string
    title: string
    slug: string
    mainImage?: string | null
    categoryId: string
    subcategoryId?: string | null
    metaTitle?: string | null
    metaDescription?: string | null
    keywords?: string | null
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BlogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    mainImage?: NullableStringFieldUpdateOperationsInput | string | null
    metaTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    keywords?: NullableStringFieldUpdateOperationsInput | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    mainImage?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: StringFieldUpdateOperationsInput | string
    subcategoryId?: NullableStringFieldUpdateOperationsInput | string | null
    metaTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    keywords?: NullableStringFieldUpdateOperationsInput | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogContentBlockCreateInput = {
    id?: string
    subTitle?: string | null
    images?: string | null
    layoutStyle?: string
    content?: string | null
    sorting?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    blog: BlogCreateNestedOneWithoutContentBlocksInput
  }

  export type BlogContentBlockUncheckedCreateInput = {
    id?: string
    blogId: string
    subTitle?: string | null
    images?: string | null
    layoutStyle?: string
    content?: string | null
    sorting?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BlogContentBlockUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    subTitle?: NullableStringFieldUpdateOperationsInput | string | null
    images?: NullableStringFieldUpdateOperationsInput | string | null
    layoutStyle?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    sorting?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blog?: BlogUpdateOneRequiredWithoutContentBlocksNestedInput
  }

  export type BlogContentBlockUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    blogId?: StringFieldUpdateOperationsInput | string
    subTitle?: NullableStringFieldUpdateOperationsInput | string | null
    images?: NullableStringFieldUpdateOperationsInput | string | null
    layoutStyle?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    sorting?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogContentBlockCreateManyInput = {
    id?: string
    blogId: string
    subTitle?: string | null
    images?: string | null
    layoutStyle?: string
    content?: string | null
    sorting?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BlogContentBlockUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    subTitle?: NullableStringFieldUpdateOperationsInput | string | null
    images?: NullableStringFieldUpdateOperationsInput | string | null
    layoutStyle?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    sorting?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogContentBlockUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    blogId?: StringFieldUpdateOperationsInput | string
    subTitle?: NullableStringFieldUpdateOperationsInput | string | null
    images?: NullableStringFieldUpdateOperationsInput | string | null
    layoutStyle?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    sorting?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ContactInquiryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    company?: SortOrder
    message?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type ContactInquiryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    company?: SortOrder
    message?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type ContactInquiryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    company?: SortOrder
    message?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type AuditRequestCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    website?: SortOrder
    report?: SortOrder
    status?: SortOrder
    scheduledDate?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    website?: SortOrder
    report?: SortOrder
    status?: SortOrder
    scheduledDate?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditRequestMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    website?: SortOrder
    report?: SortOrder
    status?: SortOrder
    scheduledDate?: SortOrder
    createdAt?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type PageContentCountOrderByAggregateInput = {
    id?: SortOrder
    section?: SortOrder
    key?: SortOrder
    value?: SortOrder
    updatedAt?: SortOrder
  }

  export type PageContentMaxOrderByAggregateInput = {
    id?: SortOrder
    section?: SortOrder
    key?: SortOrder
    value?: SortOrder
    updatedAt?: SortOrder
  }

  export type PageContentMinOrderByAggregateInput = {
    id?: SortOrder
    section?: SortOrder
    key?: SortOrder
    value?: SortOrder
    updatedAt?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ServiceNullableRelationFilter = {
    is?: ServiceWhereInput | null
    isNot?: ServiceWhereInput | null
  }

  export type ProjectCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    shortDescription?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    tags?: SortOrder
    liveLink?: SortOrder
    githubLink?: SortOrder
    sorting?: SortOrder
    serviceId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectAvgOrderByAggregateInput = {
    sorting?: SortOrder
  }

  export type ProjectMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    shortDescription?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    tags?: SortOrder
    liveLink?: SortOrder
    githubLink?: SortOrder
    sorting?: SortOrder
    serviceId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    shortDescription?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    tags?: SortOrder
    liveLink?: SortOrder
    githubLink?: SortOrder
    sorting?: SortOrder
    serviceId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectSumOrderByAggregateInput = {
    sorting?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ProjectListRelationFilter = {
    every?: ProjectWhereInput
    some?: ProjectWhereInput
    none?: ProjectWhereInput
  }

  export type ProjectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ServiceCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    sorting?: SortOrder
    description?: SortOrder
    tags?: SortOrder
    tasks?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ServiceAvgOrderByAggregateInput = {
    sorting?: SortOrder
  }

  export type ServiceMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    sorting?: SortOrder
    description?: SortOrder
    tags?: SortOrder
    tasks?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ServiceMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    sorting?: SortOrder
    description?: SortOrder
    tags?: SortOrder
    tasks?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ServiceSumOrderByAggregateInput = {
    sorting?: SortOrder
  }

  export type SliderContentCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    shortDescription?: SortOrder
    imageUrl?: SortOrder
    sorting?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type SliderContentAvgOrderByAggregateInput = {
    sorting?: SortOrder
  }

  export type SliderContentMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    shortDescription?: SortOrder
    imageUrl?: SortOrder
    sorting?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type SliderContentMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    shortDescription?: SortOrder
    imageUrl?: SortOrder
    sorting?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type SliderContentSumOrderByAggregateInput = {
    sorting?: SortOrder
  }

  export type AdminCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    resetCode?: SortOrder
    resetCodeExpires?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    resetCode?: SortOrder
    resetCodeExpires?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    resetCode?: SortOrder
    resetCodeExpires?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SiteVisitCountOrderByAggregateInput = {
    id?: SortOrder
    path?: SortOrder
    ipHash?: SortOrder
    createdAt?: SortOrder
  }

  export type SiteVisitMaxOrderByAggregateInput = {
    id?: SortOrder
    path?: SortOrder
    ipHash?: SortOrder
    createdAt?: SortOrder
  }

  export type SiteVisitMinOrderByAggregateInput = {
    id?: SortOrder
    path?: SortOrder
    ipHash?: SortOrder
    createdAt?: SortOrder
  }

  export type BlogSubCategoryListRelationFilter = {
    every?: BlogSubCategoryWhereInput
    some?: BlogSubCategoryWhereInput
    none?: BlogSubCategoryWhereInput
  }

  export type BlogListRelationFilter = {
    every?: BlogWhereInput
    some?: BlogWhereInput
    none?: BlogWhereInput
  }

  export type BlogSubCategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BlogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BlogCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BlogCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BlogCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BlogCategoryRelationFilter = {
    is?: BlogCategoryWhereInput
    isNot?: BlogCategoryWhereInput
  }

  export type BlogSubCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    categoryId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BlogSubCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    categoryId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BlogSubCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    categoryId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BlogSubCategoryNullableRelationFilter = {
    is?: BlogSubCategoryWhereInput | null
    isNot?: BlogSubCategoryWhereInput | null
  }

  export type BlogContentBlockListRelationFilter = {
    every?: BlogContentBlockWhereInput
    some?: BlogContentBlockWhereInput
    none?: BlogContentBlockWhereInput
  }

  export type BlogContentBlockOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BlogCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    mainImage?: SortOrder
    categoryId?: SortOrder
    subcategoryId?: SortOrder
    metaTitle?: SortOrder
    metaDescription?: SortOrder
    keywords?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BlogMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    mainImage?: SortOrder
    categoryId?: SortOrder
    subcategoryId?: SortOrder
    metaTitle?: SortOrder
    metaDescription?: SortOrder
    keywords?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BlogMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    mainImage?: SortOrder
    categoryId?: SortOrder
    subcategoryId?: SortOrder
    metaTitle?: SortOrder
    metaDescription?: SortOrder
    keywords?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BlogRelationFilter = {
    is?: BlogWhereInput
    isNot?: BlogWhereInput
  }

  export type BlogContentBlockCountOrderByAggregateInput = {
    id?: SortOrder
    blogId?: SortOrder
    subTitle?: SortOrder
    images?: SortOrder
    layoutStyle?: SortOrder
    content?: SortOrder
    sorting?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BlogContentBlockAvgOrderByAggregateInput = {
    sorting?: SortOrder
  }

  export type BlogContentBlockMaxOrderByAggregateInput = {
    id?: SortOrder
    blogId?: SortOrder
    subTitle?: SortOrder
    images?: SortOrder
    layoutStyle?: SortOrder
    content?: SortOrder
    sorting?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BlogContentBlockMinOrderByAggregateInput = {
    id?: SortOrder
    blogId?: SortOrder
    subTitle?: SortOrder
    images?: SortOrder
    layoutStyle?: SortOrder
    content?: SortOrder
    sorting?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BlogContentBlockSumOrderByAggregateInput = {
    sorting?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type ServiceCreateNestedOneWithoutProjectsInput = {
    create?: XOR<ServiceCreateWithoutProjectsInput, ServiceUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutProjectsInput
    connect?: ServiceWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ServiceUpdateOneWithoutProjectsNestedInput = {
    create?: XOR<ServiceCreateWithoutProjectsInput, ServiceUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutProjectsInput
    upsert?: ServiceUpsertWithoutProjectsInput
    disconnect?: ServiceWhereInput | boolean
    delete?: ServiceWhereInput | boolean
    connect?: ServiceWhereUniqueInput
    update?: XOR<XOR<ServiceUpdateToOneWithWhereWithoutProjectsInput, ServiceUpdateWithoutProjectsInput>, ServiceUncheckedUpdateWithoutProjectsInput>
  }

  export type ProjectCreateNestedManyWithoutServiceInput = {
    create?: XOR<ProjectCreateWithoutServiceInput, ProjectUncheckedCreateWithoutServiceInput> | ProjectCreateWithoutServiceInput[] | ProjectUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutServiceInput | ProjectCreateOrConnectWithoutServiceInput[]
    createMany?: ProjectCreateManyServiceInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type ProjectUncheckedCreateNestedManyWithoutServiceInput = {
    create?: XOR<ProjectCreateWithoutServiceInput, ProjectUncheckedCreateWithoutServiceInput> | ProjectCreateWithoutServiceInput[] | ProjectUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutServiceInput | ProjectCreateOrConnectWithoutServiceInput[]
    createMany?: ProjectCreateManyServiceInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type ProjectUpdateManyWithoutServiceNestedInput = {
    create?: XOR<ProjectCreateWithoutServiceInput, ProjectUncheckedCreateWithoutServiceInput> | ProjectCreateWithoutServiceInput[] | ProjectUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutServiceInput | ProjectCreateOrConnectWithoutServiceInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutServiceInput | ProjectUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: ProjectCreateManyServiceInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutServiceInput | ProjectUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutServiceInput | ProjectUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type ProjectUncheckedUpdateManyWithoutServiceNestedInput = {
    create?: XOR<ProjectCreateWithoutServiceInput, ProjectUncheckedCreateWithoutServiceInput> | ProjectCreateWithoutServiceInput[] | ProjectUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutServiceInput | ProjectCreateOrConnectWithoutServiceInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutServiceInput | ProjectUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: ProjectCreateManyServiceInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutServiceInput | ProjectUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutServiceInput | ProjectUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type BlogSubCategoryCreateNestedManyWithoutCategoryInput = {
    create?: XOR<BlogSubCategoryCreateWithoutCategoryInput, BlogSubCategoryUncheckedCreateWithoutCategoryInput> | BlogSubCategoryCreateWithoutCategoryInput[] | BlogSubCategoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: BlogSubCategoryCreateOrConnectWithoutCategoryInput | BlogSubCategoryCreateOrConnectWithoutCategoryInput[]
    createMany?: BlogSubCategoryCreateManyCategoryInputEnvelope
    connect?: BlogSubCategoryWhereUniqueInput | BlogSubCategoryWhereUniqueInput[]
  }

  export type BlogCreateNestedManyWithoutCategoryInput = {
    create?: XOR<BlogCreateWithoutCategoryInput, BlogUncheckedCreateWithoutCategoryInput> | BlogCreateWithoutCategoryInput[] | BlogUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: BlogCreateOrConnectWithoutCategoryInput | BlogCreateOrConnectWithoutCategoryInput[]
    createMany?: BlogCreateManyCategoryInputEnvelope
    connect?: BlogWhereUniqueInput | BlogWhereUniqueInput[]
  }

  export type BlogSubCategoryUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<BlogSubCategoryCreateWithoutCategoryInput, BlogSubCategoryUncheckedCreateWithoutCategoryInput> | BlogSubCategoryCreateWithoutCategoryInput[] | BlogSubCategoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: BlogSubCategoryCreateOrConnectWithoutCategoryInput | BlogSubCategoryCreateOrConnectWithoutCategoryInput[]
    createMany?: BlogSubCategoryCreateManyCategoryInputEnvelope
    connect?: BlogSubCategoryWhereUniqueInput | BlogSubCategoryWhereUniqueInput[]
  }

  export type BlogUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<BlogCreateWithoutCategoryInput, BlogUncheckedCreateWithoutCategoryInput> | BlogCreateWithoutCategoryInput[] | BlogUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: BlogCreateOrConnectWithoutCategoryInput | BlogCreateOrConnectWithoutCategoryInput[]
    createMany?: BlogCreateManyCategoryInputEnvelope
    connect?: BlogWhereUniqueInput | BlogWhereUniqueInput[]
  }

  export type BlogSubCategoryUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<BlogSubCategoryCreateWithoutCategoryInput, BlogSubCategoryUncheckedCreateWithoutCategoryInput> | BlogSubCategoryCreateWithoutCategoryInput[] | BlogSubCategoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: BlogSubCategoryCreateOrConnectWithoutCategoryInput | BlogSubCategoryCreateOrConnectWithoutCategoryInput[]
    upsert?: BlogSubCategoryUpsertWithWhereUniqueWithoutCategoryInput | BlogSubCategoryUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: BlogSubCategoryCreateManyCategoryInputEnvelope
    set?: BlogSubCategoryWhereUniqueInput | BlogSubCategoryWhereUniqueInput[]
    disconnect?: BlogSubCategoryWhereUniqueInput | BlogSubCategoryWhereUniqueInput[]
    delete?: BlogSubCategoryWhereUniqueInput | BlogSubCategoryWhereUniqueInput[]
    connect?: BlogSubCategoryWhereUniqueInput | BlogSubCategoryWhereUniqueInput[]
    update?: BlogSubCategoryUpdateWithWhereUniqueWithoutCategoryInput | BlogSubCategoryUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: BlogSubCategoryUpdateManyWithWhereWithoutCategoryInput | BlogSubCategoryUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: BlogSubCategoryScalarWhereInput | BlogSubCategoryScalarWhereInput[]
  }

  export type BlogUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<BlogCreateWithoutCategoryInput, BlogUncheckedCreateWithoutCategoryInput> | BlogCreateWithoutCategoryInput[] | BlogUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: BlogCreateOrConnectWithoutCategoryInput | BlogCreateOrConnectWithoutCategoryInput[]
    upsert?: BlogUpsertWithWhereUniqueWithoutCategoryInput | BlogUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: BlogCreateManyCategoryInputEnvelope
    set?: BlogWhereUniqueInput | BlogWhereUniqueInput[]
    disconnect?: BlogWhereUniqueInput | BlogWhereUniqueInput[]
    delete?: BlogWhereUniqueInput | BlogWhereUniqueInput[]
    connect?: BlogWhereUniqueInput | BlogWhereUniqueInput[]
    update?: BlogUpdateWithWhereUniqueWithoutCategoryInput | BlogUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: BlogUpdateManyWithWhereWithoutCategoryInput | BlogUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: BlogScalarWhereInput | BlogScalarWhereInput[]
  }

  export type BlogSubCategoryUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<BlogSubCategoryCreateWithoutCategoryInput, BlogSubCategoryUncheckedCreateWithoutCategoryInput> | BlogSubCategoryCreateWithoutCategoryInput[] | BlogSubCategoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: BlogSubCategoryCreateOrConnectWithoutCategoryInput | BlogSubCategoryCreateOrConnectWithoutCategoryInput[]
    upsert?: BlogSubCategoryUpsertWithWhereUniqueWithoutCategoryInput | BlogSubCategoryUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: BlogSubCategoryCreateManyCategoryInputEnvelope
    set?: BlogSubCategoryWhereUniqueInput | BlogSubCategoryWhereUniqueInput[]
    disconnect?: BlogSubCategoryWhereUniqueInput | BlogSubCategoryWhereUniqueInput[]
    delete?: BlogSubCategoryWhereUniqueInput | BlogSubCategoryWhereUniqueInput[]
    connect?: BlogSubCategoryWhereUniqueInput | BlogSubCategoryWhereUniqueInput[]
    update?: BlogSubCategoryUpdateWithWhereUniqueWithoutCategoryInput | BlogSubCategoryUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: BlogSubCategoryUpdateManyWithWhereWithoutCategoryInput | BlogSubCategoryUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: BlogSubCategoryScalarWhereInput | BlogSubCategoryScalarWhereInput[]
  }

  export type BlogUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<BlogCreateWithoutCategoryInput, BlogUncheckedCreateWithoutCategoryInput> | BlogCreateWithoutCategoryInput[] | BlogUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: BlogCreateOrConnectWithoutCategoryInput | BlogCreateOrConnectWithoutCategoryInput[]
    upsert?: BlogUpsertWithWhereUniqueWithoutCategoryInput | BlogUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: BlogCreateManyCategoryInputEnvelope
    set?: BlogWhereUniqueInput | BlogWhereUniqueInput[]
    disconnect?: BlogWhereUniqueInput | BlogWhereUniqueInput[]
    delete?: BlogWhereUniqueInput | BlogWhereUniqueInput[]
    connect?: BlogWhereUniqueInput | BlogWhereUniqueInput[]
    update?: BlogUpdateWithWhereUniqueWithoutCategoryInput | BlogUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: BlogUpdateManyWithWhereWithoutCategoryInput | BlogUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: BlogScalarWhereInput | BlogScalarWhereInput[]
  }

  export type BlogCategoryCreateNestedOneWithoutSubcategoriesInput = {
    create?: XOR<BlogCategoryCreateWithoutSubcategoriesInput, BlogCategoryUncheckedCreateWithoutSubcategoriesInput>
    connectOrCreate?: BlogCategoryCreateOrConnectWithoutSubcategoriesInput
    connect?: BlogCategoryWhereUniqueInput
  }

  export type BlogCreateNestedManyWithoutSubcategoryInput = {
    create?: XOR<BlogCreateWithoutSubcategoryInput, BlogUncheckedCreateWithoutSubcategoryInput> | BlogCreateWithoutSubcategoryInput[] | BlogUncheckedCreateWithoutSubcategoryInput[]
    connectOrCreate?: BlogCreateOrConnectWithoutSubcategoryInput | BlogCreateOrConnectWithoutSubcategoryInput[]
    createMany?: BlogCreateManySubcategoryInputEnvelope
    connect?: BlogWhereUniqueInput | BlogWhereUniqueInput[]
  }

  export type BlogUncheckedCreateNestedManyWithoutSubcategoryInput = {
    create?: XOR<BlogCreateWithoutSubcategoryInput, BlogUncheckedCreateWithoutSubcategoryInput> | BlogCreateWithoutSubcategoryInput[] | BlogUncheckedCreateWithoutSubcategoryInput[]
    connectOrCreate?: BlogCreateOrConnectWithoutSubcategoryInput | BlogCreateOrConnectWithoutSubcategoryInput[]
    createMany?: BlogCreateManySubcategoryInputEnvelope
    connect?: BlogWhereUniqueInput | BlogWhereUniqueInput[]
  }

  export type BlogCategoryUpdateOneRequiredWithoutSubcategoriesNestedInput = {
    create?: XOR<BlogCategoryCreateWithoutSubcategoriesInput, BlogCategoryUncheckedCreateWithoutSubcategoriesInput>
    connectOrCreate?: BlogCategoryCreateOrConnectWithoutSubcategoriesInput
    upsert?: BlogCategoryUpsertWithoutSubcategoriesInput
    connect?: BlogCategoryWhereUniqueInput
    update?: XOR<XOR<BlogCategoryUpdateToOneWithWhereWithoutSubcategoriesInput, BlogCategoryUpdateWithoutSubcategoriesInput>, BlogCategoryUncheckedUpdateWithoutSubcategoriesInput>
  }

  export type BlogUpdateManyWithoutSubcategoryNestedInput = {
    create?: XOR<BlogCreateWithoutSubcategoryInput, BlogUncheckedCreateWithoutSubcategoryInput> | BlogCreateWithoutSubcategoryInput[] | BlogUncheckedCreateWithoutSubcategoryInput[]
    connectOrCreate?: BlogCreateOrConnectWithoutSubcategoryInput | BlogCreateOrConnectWithoutSubcategoryInput[]
    upsert?: BlogUpsertWithWhereUniqueWithoutSubcategoryInput | BlogUpsertWithWhereUniqueWithoutSubcategoryInput[]
    createMany?: BlogCreateManySubcategoryInputEnvelope
    set?: BlogWhereUniqueInput | BlogWhereUniqueInput[]
    disconnect?: BlogWhereUniqueInput | BlogWhereUniqueInput[]
    delete?: BlogWhereUniqueInput | BlogWhereUniqueInput[]
    connect?: BlogWhereUniqueInput | BlogWhereUniqueInput[]
    update?: BlogUpdateWithWhereUniqueWithoutSubcategoryInput | BlogUpdateWithWhereUniqueWithoutSubcategoryInput[]
    updateMany?: BlogUpdateManyWithWhereWithoutSubcategoryInput | BlogUpdateManyWithWhereWithoutSubcategoryInput[]
    deleteMany?: BlogScalarWhereInput | BlogScalarWhereInput[]
  }

  export type BlogUncheckedUpdateManyWithoutSubcategoryNestedInput = {
    create?: XOR<BlogCreateWithoutSubcategoryInput, BlogUncheckedCreateWithoutSubcategoryInput> | BlogCreateWithoutSubcategoryInput[] | BlogUncheckedCreateWithoutSubcategoryInput[]
    connectOrCreate?: BlogCreateOrConnectWithoutSubcategoryInput | BlogCreateOrConnectWithoutSubcategoryInput[]
    upsert?: BlogUpsertWithWhereUniqueWithoutSubcategoryInput | BlogUpsertWithWhereUniqueWithoutSubcategoryInput[]
    createMany?: BlogCreateManySubcategoryInputEnvelope
    set?: BlogWhereUniqueInput | BlogWhereUniqueInput[]
    disconnect?: BlogWhereUniqueInput | BlogWhereUniqueInput[]
    delete?: BlogWhereUniqueInput | BlogWhereUniqueInput[]
    connect?: BlogWhereUniqueInput | BlogWhereUniqueInput[]
    update?: BlogUpdateWithWhereUniqueWithoutSubcategoryInput | BlogUpdateWithWhereUniqueWithoutSubcategoryInput[]
    updateMany?: BlogUpdateManyWithWhereWithoutSubcategoryInput | BlogUpdateManyWithWhereWithoutSubcategoryInput[]
    deleteMany?: BlogScalarWhereInput | BlogScalarWhereInput[]
  }

  export type BlogCategoryCreateNestedOneWithoutBlogsInput = {
    create?: XOR<BlogCategoryCreateWithoutBlogsInput, BlogCategoryUncheckedCreateWithoutBlogsInput>
    connectOrCreate?: BlogCategoryCreateOrConnectWithoutBlogsInput
    connect?: BlogCategoryWhereUniqueInput
  }

  export type BlogSubCategoryCreateNestedOneWithoutBlogsInput = {
    create?: XOR<BlogSubCategoryCreateWithoutBlogsInput, BlogSubCategoryUncheckedCreateWithoutBlogsInput>
    connectOrCreate?: BlogSubCategoryCreateOrConnectWithoutBlogsInput
    connect?: BlogSubCategoryWhereUniqueInput
  }

  export type BlogContentBlockCreateNestedManyWithoutBlogInput = {
    create?: XOR<BlogContentBlockCreateWithoutBlogInput, BlogContentBlockUncheckedCreateWithoutBlogInput> | BlogContentBlockCreateWithoutBlogInput[] | BlogContentBlockUncheckedCreateWithoutBlogInput[]
    connectOrCreate?: BlogContentBlockCreateOrConnectWithoutBlogInput | BlogContentBlockCreateOrConnectWithoutBlogInput[]
    createMany?: BlogContentBlockCreateManyBlogInputEnvelope
    connect?: BlogContentBlockWhereUniqueInput | BlogContentBlockWhereUniqueInput[]
  }

  export type BlogContentBlockUncheckedCreateNestedManyWithoutBlogInput = {
    create?: XOR<BlogContentBlockCreateWithoutBlogInput, BlogContentBlockUncheckedCreateWithoutBlogInput> | BlogContentBlockCreateWithoutBlogInput[] | BlogContentBlockUncheckedCreateWithoutBlogInput[]
    connectOrCreate?: BlogContentBlockCreateOrConnectWithoutBlogInput | BlogContentBlockCreateOrConnectWithoutBlogInput[]
    createMany?: BlogContentBlockCreateManyBlogInputEnvelope
    connect?: BlogContentBlockWhereUniqueInput | BlogContentBlockWhereUniqueInput[]
  }

  export type BlogCategoryUpdateOneRequiredWithoutBlogsNestedInput = {
    create?: XOR<BlogCategoryCreateWithoutBlogsInput, BlogCategoryUncheckedCreateWithoutBlogsInput>
    connectOrCreate?: BlogCategoryCreateOrConnectWithoutBlogsInput
    upsert?: BlogCategoryUpsertWithoutBlogsInput
    connect?: BlogCategoryWhereUniqueInput
    update?: XOR<XOR<BlogCategoryUpdateToOneWithWhereWithoutBlogsInput, BlogCategoryUpdateWithoutBlogsInput>, BlogCategoryUncheckedUpdateWithoutBlogsInput>
  }

  export type BlogSubCategoryUpdateOneWithoutBlogsNestedInput = {
    create?: XOR<BlogSubCategoryCreateWithoutBlogsInput, BlogSubCategoryUncheckedCreateWithoutBlogsInput>
    connectOrCreate?: BlogSubCategoryCreateOrConnectWithoutBlogsInput
    upsert?: BlogSubCategoryUpsertWithoutBlogsInput
    disconnect?: BlogSubCategoryWhereInput | boolean
    delete?: BlogSubCategoryWhereInput | boolean
    connect?: BlogSubCategoryWhereUniqueInput
    update?: XOR<XOR<BlogSubCategoryUpdateToOneWithWhereWithoutBlogsInput, BlogSubCategoryUpdateWithoutBlogsInput>, BlogSubCategoryUncheckedUpdateWithoutBlogsInput>
  }

  export type BlogContentBlockUpdateManyWithoutBlogNestedInput = {
    create?: XOR<BlogContentBlockCreateWithoutBlogInput, BlogContentBlockUncheckedCreateWithoutBlogInput> | BlogContentBlockCreateWithoutBlogInput[] | BlogContentBlockUncheckedCreateWithoutBlogInput[]
    connectOrCreate?: BlogContentBlockCreateOrConnectWithoutBlogInput | BlogContentBlockCreateOrConnectWithoutBlogInput[]
    upsert?: BlogContentBlockUpsertWithWhereUniqueWithoutBlogInput | BlogContentBlockUpsertWithWhereUniqueWithoutBlogInput[]
    createMany?: BlogContentBlockCreateManyBlogInputEnvelope
    set?: BlogContentBlockWhereUniqueInput | BlogContentBlockWhereUniqueInput[]
    disconnect?: BlogContentBlockWhereUniqueInput | BlogContentBlockWhereUniqueInput[]
    delete?: BlogContentBlockWhereUniqueInput | BlogContentBlockWhereUniqueInput[]
    connect?: BlogContentBlockWhereUniqueInput | BlogContentBlockWhereUniqueInput[]
    update?: BlogContentBlockUpdateWithWhereUniqueWithoutBlogInput | BlogContentBlockUpdateWithWhereUniqueWithoutBlogInput[]
    updateMany?: BlogContentBlockUpdateManyWithWhereWithoutBlogInput | BlogContentBlockUpdateManyWithWhereWithoutBlogInput[]
    deleteMany?: BlogContentBlockScalarWhereInput | BlogContentBlockScalarWhereInput[]
  }

  export type BlogContentBlockUncheckedUpdateManyWithoutBlogNestedInput = {
    create?: XOR<BlogContentBlockCreateWithoutBlogInput, BlogContentBlockUncheckedCreateWithoutBlogInput> | BlogContentBlockCreateWithoutBlogInput[] | BlogContentBlockUncheckedCreateWithoutBlogInput[]
    connectOrCreate?: BlogContentBlockCreateOrConnectWithoutBlogInput | BlogContentBlockCreateOrConnectWithoutBlogInput[]
    upsert?: BlogContentBlockUpsertWithWhereUniqueWithoutBlogInput | BlogContentBlockUpsertWithWhereUniqueWithoutBlogInput[]
    createMany?: BlogContentBlockCreateManyBlogInputEnvelope
    set?: BlogContentBlockWhereUniqueInput | BlogContentBlockWhereUniqueInput[]
    disconnect?: BlogContentBlockWhereUniqueInput | BlogContentBlockWhereUniqueInput[]
    delete?: BlogContentBlockWhereUniqueInput | BlogContentBlockWhereUniqueInput[]
    connect?: BlogContentBlockWhereUniqueInput | BlogContentBlockWhereUniqueInput[]
    update?: BlogContentBlockUpdateWithWhereUniqueWithoutBlogInput | BlogContentBlockUpdateWithWhereUniqueWithoutBlogInput[]
    updateMany?: BlogContentBlockUpdateManyWithWhereWithoutBlogInput | BlogContentBlockUpdateManyWithWhereWithoutBlogInput[]
    deleteMany?: BlogContentBlockScalarWhereInput | BlogContentBlockScalarWhereInput[]
  }

  export type BlogCreateNestedOneWithoutContentBlocksInput = {
    create?: XOR<BlogCreateWithoutContentBlocksInput, BlogUncheckedCreateWithoutContentBlocksInput>
    connectOrCreate?: BlogCreateOrConnectWithoutContentBlocksInput
    connect?: BlogWhereUniqueInput
  }

  export type BlogUpdateOneRequiredWithoutContentBlocksNestedInput = {
    create?: XOR<BlogCreateWithoutContentBlocksInput, BlogUncheckedCreateWithoutContentBlocksInput>
    connectOrCreate?: BlogCreateOrConnectWithoutContentBlocksInput
    upsert?: BlogUpsertWithoutContentBlocksInput
    connect?: BlogWhereUniqueInput
    update?: XOR<XOR<BlogUpdateToOneWithWhereWithoutContentBlocksInput, BlogUpdateWithoutContentBlocksInput>, BlogUncheckedUpdateWithoutContentBlocksInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ServiceCreateWithoutProjectsInput = {
    id?: string
    name: string
    sorting?: number
    description: string
    tags?: string | null
    tasks?: string | null
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ServiceUncheckedCreateWithoutProjectsInput = {
    id?: string
    name: string
    sorting?: number
    description: string
    tags?: string | null
    tasks?: string | null
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ServiceCreateOrConnectWithoutProjectsInput = {
    where: ServiceWhereUniqueInput
    create: XOR<ServiceCreateWithoutProjectsInput, ServiceUncheckedCreateWithoutProjectsInput>
  }

  export type ServiceUpsertWithoutProjectsInput = {
    update: XOR<ServiceUpdateWithoutProjectsInput, ServiceUncheckedUpdateWithoutProjectsInput>
    create: XOR<ServiceCreateWithoutProjectsInput, ServiceUncheckedCreateWithoutProjectsInput>
    where?: ServiceWhereInput
  }

  export type ServiceUpdateToOneWithWhereWithoutProjectsInput = {
    where?: ServiceWhereInput
    data: XOR<ServiceUpdateWithoutProjectsInput, ServiceUncheckedUpdateWithoutProjectsInput>
  }

  export type ServiceUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sorting?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    tasks?: NullableStringFieldUpdateOperationsInput | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceUncheckedUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sorting?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    tasks?: NullableStringFieldUpdateOperationsInput | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectCreateWithoutServiceInput = {
    id?: string
    title: string
    shortDescription?: string | null
    description: string
    imageUrl?: string | null
    tags?: string | null
    liveLink?: string | null
    githubLink?: string | null
    sorting?: number
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectUncheckedCreateWithoutServiceInput = {
    id?: string
    title: string
    shortDescription?: string | null
    description: string
    imageUrl?: string | null
    tags?: string | null
    liveLink?: string | null
    githubLink?: string | null
    sorting?: number
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectCreateOrConnectWithoutServiceInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutServiceInput, ProjectUncheckedCreateWithoutServiceInput>
  }

  export type ProjectCreateManyServiceInputEnvelope = {
    data: ProjectCreateManyServiceInput | ProjectCreateManyServiceInput[]
  }

  export type ProjectUpsertWithWhereUniqueWithoutServiceInput = {
    where: ProjectWhereUniqueInput
    update: XOR<ProjectUpdateWithoutServiceInput, ProjectUncheckedUpdateWithoutServiceInput>
    create: XOR<ProjectCreateWithoutServiceInput, ProjectUncheckedCreateWithoutServiceInput>
  }

  export type ProjectUpdateWithWhereUniqueWithoutServiceInput = {
    where: ProjectWhereUniqueInput
    data: XOR<ProjectUpdateWithoutServiceInput, ProjectUncheckedUpdateWithoutServiceInput>
  }

  export type ProjectUpdateManyWithWhereWithoutServiceInput = {
    where: ProjectScalarWhereInput
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyWithoutServiceInput>
  }

  export type ProjectScalarWhereInput = {
    AND?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    OR?: ProjectScalarWhereInput[]
    NOT?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    id?: StringFilter<"Project"> | string
    title?: StringFilter<"Project"> | string
    shortDescription?: StringNullableFilter<"Project"> | string | null
    description?: StringFilter<"Project"> | string
    imageUrl?: StringNullableFilter<"Project"> | string | null
    tags?: StringNullableFilter<"Project"> | string | null
    liveLink?: StringNullableFilter<"Project"> | string | null
    githubLink?: StringNullableFilter<"Project"> | string | null
    sorting?: IntFilter<"Project"> | number
    serviceId?: StringNullableFilter<"Project"> | string | null
    status?: BoolFilter<"Project"> | boolean
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
  }

  export type BlogSubCategoryCreateWithoutCategoryInput = {
    id?: string
    name: string
    slug: string
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    blogs?: BlogCreateNestedManyWithoutSubcategoryInput
  }

  export type BlogSubCategoryUncheckedCreateWithoutCategoryInput = {
    id?: string
    name: string
    slug: string
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    blogs?: BlogUncheckedCreateNestedManyWithoutSubcategoryInput
  }

  export type BlogSubCategoryCreateOrConnectWithoutCategoryInput = {
    where: BlogSubCategoryWhereUniqueInput
    create: XOR<BlogSubCategoryCreateWithoutCategoryInput, BlogSubCategoryUncheckedCreateWithoutCategoryInput>
  }

  export type BlogSubCategoryCreateManyCategoryInputEnvelope = {
    data: BlogSubCategoryCreateManyCategoryInput | BlogSubCategoryCreateManyCategoryInput[]
  }

  export type BlogCreateWithoutCategoryInput = {
    id?: string
    title: string
    slug: string
    mainImage?: string | null
    metaTitle?: string | null
    metaDescription?: string | null
    keywords?: string | null
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    subcategory?: BlogSubCategoryCreateNestedOneWithoutBlogsInput
    contentBlocks?: BlogContentBlockCreateNestedManyWithoutBlogInput
  }

  export type BlogUncheckedCreateWithoutCategoryInput = {
    id?: string
    title: string
    slug: string
    mainImage?: string | null
    subcategoryId?: string | null
    metaTitle?: string | null
    metaDescription?: string | null
    keywords?: string | null
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    contentBlocks?: BlogContentBlockUncheckedCreateNestedManyWithoutBlogInput
  }

  export type BlogCreateOrConnectWithoutCategoryInput = {
    where: BlogWhereUniqueInput
    create: XOR<BlogCreateWithoutCategoryInput, BlogUncheckedCreateWithoutCategoryInput>
  }

  export type BlogCreateManyCategoryInputEnvelope = {
    data: BlogCreateManyCategoryInput | BlogCreateManyCategoryInput[]
  }

  export type BlogSubCategoryUpsertWithWhereUniqueWithoutCategoryInput = {
    where: BlogSubCategoryWhereUniqueInput
    update: XOR<BlogSubCategoryUpdateWithoutCategoryInput, BlogSubCategoryUncheckedUpdateWithoutCategoryInput>
    create: XOR<BlogSubCategoryCreateWithoutCategoryInput, BlogSubCategoryUncheckedCreateWithoutCategoryInput>
  }

  export type BlogSubCategoryUpdateWithWhereUniqueWithoutCategoryInput = {
    where: BlogSubCategoryWhereUniqueInput
    data: XOR<BlogSubCategoryUpdateWithoutCategoryInput, BlogSubCategoryUncheckedUpdateWithoutCategoryInput>
  }

  export type BlogSubCategoryUpdateManyWithWhereWithoutCategoryInput = {
    where: BlogSubCategoryScalarWhereInput
    data: XOR<BlogSubCategoryUpdateManyMutationInput, BlogSubCategoryUncheckedUpdateManyWithoutCategoryInput>
  }

  export type BlogSubCategoryScalarWhereInput = {
    AND?: BlogSubCategoryScalarWhereInput | BlogSubCategoryScalarWhereInput[]
    OR?: BlogSubCategoryScalarWhereInput[]
    NOT?: BlogSubCategoryScalarWhereInput | BlogSubCategoryScalarWhereInput[]
    id?: StringFilter<"BlogSubCategory"> | string
    name?: StringFilter<"BlogSubCategory"> | string
    slug?: StringFilter<"BlogSubCategory"> | string
    categoryId?: StringFilter<"BlogSubCategory"> | string
    status?: BoolFilter<"BlogSubCategory"> | boolean
    createdAt?: DateTimeFilter<"BlogSubCategory"> | Date | string
    updatedAt?: DateTimeFilter<"BlogSubCategory"> | Date | string
  }

  export type BlogUpsertWithWhereUniqueWithoutCategoryInput = {
    where: BlogWhereUniqueInput
    update: XOR<BlogUpdateWithoutCategoryInput, BlogUncheckedUpdateWithoutCategoryInput>
    create: XOR<BlogCreateWithoutCategoryInput, BlogUncheckedCreateWithoutCategoryInput>
  }

  export type BlogUpdateWithWhereUniqueWithoutCategoryInput = {
    where: BlogWhereUniqueInput
    data: XOR<BlogUpdateWithoutCategoryInput, BlogUncheckedUpdateWithoutCategoryInput>
  }

  export type BlogUpdateManyWithWhereWithoutCategoryInput = {
    where: BlogScalarWhereInput
    data: XOR<BlogUpdateManyMutationInput, BlogUncheckedUpdateManyWithoutCategoryInput>
  }

  export type BlogScalarWhereInput = {
    AND?: BlogScalarWhereInput | BlogScalarWhereInput[]
    OR?: BlogScalarWhereInput[]
    NOT?: BlogScalarWhereInput | BlogScalarWhereInput[]
    id?: StringFilter<"Blog"> | string
    title?: StringFilter<"Blog"> | string
    slug?: StringFilter<"Blog"> | string
    mainImage?: StringNullableFilter<"Blog"> | string | null
    categoryId?: StringFilter<"Blog"> | string
    subcategoryId?: StringNullableFilter<"Blog"> | string | null
    metaTitle?: StringNullableFilter<"Blog"> | string | null
    metaDescription?: StringNullableFilter<"Blog"> | string | null
    keywords?: StringNullableFilter<"Blog"> | string | null
    status?: BoolFilter<"Blog"> | boolean
    createdAt?: DateTimeFilter<"Blog"> | Date | string
    updatedAt?: DateTimeFilter<"Blog"> | Date | string
  }

  export type BlogCategoryCreateWithoutSubcategoriesInput = {
    id?: string
    name: string
    slug: string
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    blogs?: BlogCreateNestedManyWithoutCategoryInput
  }

  export type BlogCategoryUncheckedCreateWithoutSubcategoriesInput = {
    id?: string
    name: string
    slug: string
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    blogs?: BlogUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type BlogCategoryCreateOrConnectWithoutSubcategoriesInput = {
    where: BlogCategoryWhereUniqueInput
    create: XOR<BlogCategoryCreateWithoutSubcategoriesInput, BlogCategoryUncheckedCreateWithoutSubcategoriesInput>
  }

  export type BlogCreateWithoutSubcategoryInput = {
    id?: string
    title: string
    slug: string
    mainImage?: string | null
    metaTitle?: string | null
    metaDescription?: string | null
    keywords?: string | null
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    category: BlogCategoryCreateNestedOneWithoutBlogsInput
    contentBlocks?: BlogContentBlockCreateNestedManyWithoutBlogInput
  }

  export type BlogUncheckedCreateWithoutSubcategoryInput = {
    id?: string
    title: string
    slug: string
    mainImage?: string | null
    categoryId: string
    metaTitle?: string | null
    metaDescription?: string | null
    keywords?: string | null
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    contentBlocks?: BlogContentBlockUncheckedCreateNestedManyWithoutBlogInput
  }

  export type BlogCreateOrConnectWithoutSubcategoryInput = {
    where: BlogWhereUniqueInput
    create: XOR<BlogCreateWithoutSubcategoryInput, BlogUncheckedCreateWithoutSubcategoryInput>
  }

  export type BlogCreateManySubcategoryInputEnvelope = {
    data: BlogCreateManySubcategoryInput | BlogCreateManySubcategoryInput[]
  }

  export type BlogCategoryUpsertWithoutSubcategoriesInput = {
    update: XOR<BlogCategoryUpdateWithoutSubcategoriesInput, BlogCategoryUncheckedUpdateWithoutSubcategoriesInput>
    create: XOR<BlogCategoryCreateWithoutSubcategoriesInput, BlogCategoryUncheckedCreateWithoutSubcategoriesInput>
    where?: BlogCategoryWhereInput
  }

  export type BlogCategoryUpdateToOneWithWhereWithoutSubcategoriesInput = {
    where?: BlogCategoryWhereInput
    data: XOR<BlogCategoryUpdateWithoutSubcategoriesInput, BlogCategoryUncheckedUpdateWithoutSubcategoriesInput>
  }

  export type BlogCategoryUpdateWithoutSubcategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blogs?: BlogUpdateManyWithoutCategoryNestedInput
  }

  export type BlogCategoryUncheckedUpdateWithoutSubcategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blogs?: BlogUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type BlogUpsertWithWhereUniqueWithoutSubcategoryInput = {
    where: BlogWhereUniqueInput
    update: XOR<BlogUpdateWithoutSubcategoryInput, BlogUncheckedUpdateWithoutSubcategoryInput>
    create: XOR<BlogCreateWithoutSubcategoryInput, BlogUncheckedCreateWithoutSubcategoryInput>
  }

  export type BlogUpdateWithWhereUniqueWithoutSubcategoryInput = {
    where: BlogWhereUniqueInput
    data: XOR<BlogUpdateWithoutSubcategoryInput, BlogUncheckedUpdateWithoutSubcategoryInput>
  }

  export type BlogUpdateManyWithWhereWithoutSubcategoryInput = {
    where: BlogScalarWhereInput
    data: XOR<BlogUpdateManyMutationInput, BlogUncheckedUpdateManyWithoutSubcategoryInput>
  }

  export type BlogCategoryCreateWithoutBlogsInput = {
    id?: string
    name: string
    slug: string
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    subcategories?: BlogSubCategoryCreateNestedManyWithoutCategoryInput
  }

  export type BlogCategoryUncheckedCreateWithoutBlogsInput = {
    id?: string
    name: string
    slug: string
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    subcategories?: BlogSubCategoryUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type BlogCategoryCreateOrConnectWithoutBlogsInput = {
    where: BlogCategoryWhereUniqueInput
    create: XOR<BlogCategoryCreateWithoutBlogsInput, BlogCategoryUncheckedCreateWithoutBlogsInput>
  }

  export type BlogSubCategoryCreateWithoutBlogsInput = {
    id?: string
    name: string
    slug: string
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    category: BlogCategoryCreateNestedOneWithoutSubcategoriesInput
  }

  export type BlogSubCategoryUncheckedCreateWithoutBlogsInput = {
    id?: string
    name: string
    slug: string
    categoryId: string
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BlogSubCategoryCreateOrConnectWithoutBlogsInput = {
    where: BlogSubCategoryWhereUniqueInput
    create: XOR<BlogSubCategoryCreateWithoutBlogsInput, BlogSubCategoryUncheckedCreateWithoutBlogsInput>
  }

  export type BlogContentBlockCreateWithoutBlogInput = {
    id?: string
    subTitle?: string | null
    images?: string | null
    layoutStyle?: string
    content?: string | null
    sorting?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BlogContentBlockUncheckedCreateWithoutBlogInput = {
    id?: string
    subTitle?: string | null
    images?: string | null
    layoutStyle?: string
    content?: string | null
    sorting?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BlogContentBlockCreateOrConnectWithoutBlogInput = {
    where: BlogContentBlockWhereUniqueInput
    create: XOR<BlogContentBlockCreateWithoutBlogInput, BlogContentBlockUncheckedCreateWithoutBlogInput>
  }

  export type BlogContentBlockCreateManyBlogInputEnvelope = {
    data: BlogContentBlockCreateManyBlogInput | BlogContentBlockCreateManyBlogInput[]
  }

  export type BlogCategoryUpsertWithoutBlogsInput = {
    update: XOR<BlogCategoryUpdateWithoutBlogsInput, BlogCategoryUncheckedUpdateWithoutBlogsInput>
    create: XOR<BlogCategoryCreateWithoutBlogsInput, BlogCategoryUncheckedCreateWithoutBlogsInput>
    where?: BlogCategoryWhereInput
  }

  export type BlogCategoryUpdateToOneWithWhereWithoutBlogsInput = {
    where?: BlogCategoryWhereInput
    data: XOR<BlogCategoryUpdateWithoutBlogsInput, BlogCategoryUncheckedUpdateWithoutBlogsInput>
  }

  export type BlogCategoryUpdateWithoutBlogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subcategories?: BlogSubCategoryUpdateManyWithoutCategoryNestedInput
  }

  export type BlogCategoryUncheckedUpdateWithoutBlogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subcategories?: BlogSubCategoryUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type BlogSubCategoryUpsertWithoutBlogsInput = {
    update: XOR<BlogSubCategoryUpdateWithoutBlogsInput, BlogSubCategoryUncheckedUpdateWithoutBlogsInput>
    create: XOR<BlogSubCategoryCreateWithoutBlogsInput, BlogSubCategoryUncheckedCreateWithoutBlogsInput>
    where?: BlogSubCategoryWhereInput
  }

  export type BlogSubCategoryUpdateToOneWithWhereWithoutBlogsInput = {
    where?: BlogSubCategoryWhereInput
    data: XOR<BlogSubCategoryUpdateWithoutBlogsInput, BlogSubCategoryUncheckedUpdateWithoutBlogsInput>
  }

  export type BlogSubCategoryUpdateWithoutBlogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: BlogCategoryUpdateOneRequiredWithoutSubcategoriesNestedInput
  }

  export type BlogSubCategoryUncheckedUpdateWithoutBlogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogContentBlockUpsertWithWhereUniqueWithoutBlogInput = {
    where: BlogContentBlockWhereUniqueInput
    update: XOR<BlogContentBlockUpdateWithoutBlogInput, BlogContentBlockUncheckedUpdateWithoutBlogInput>
    create: XOR<BlogContentBlockCreateWithoutBlogInput, BlogContentBlockUncheckedCreateWithoutBlogInput>
  }

  export type BlogContentBlockUpdateWithWhereUniqueWithoutBlogInput = {
    where: BlogContentBlockWhereUniqueInput
    data: XOR<BlogContentBlockUpdateWithoutBlogInput, BlogContentBlockUncheckedUpdateWithoutBlogInput>
  }

  export type BlogContentBlockUpdateManyWithWhereWithoutBlogInput = {
    where: BlogContentBlockScalarWhereInput
    data: XOR<BlogContentBlockUpdateManyMutationInput, BlogContentBlockUncheckedUpdateManyWithoutBlogInput>
  }

  export type BlogContentBlockScalarWhereInput = {
    AND?: BlogContentBlockScalarWhereInput | BlogContentBlockScalarWhereInput[]
    OR?: BlogContentBlockScalarWhereInput[]
    NOT?: BlogContentBlockScalarWhereInput | BlogContentBlockScalarWhereInput[]
    id?: StringFilter<"BlogContentBlock"> | string
    blogId?: StringFilter<"BlogContentBlock"> | string
    subTitle?: StringNullableFilter<"BlogContentBlock"> | string | null
    images?: StringNullableFilter<"BlogContentBlock"> | string | null
    layoutStyle?: StringFilter<"BlogContentBlock"> | string
    content?: StringNullableFilter<"BlogContentBlock"> | string | null
    sorting?: IntFilter<"BlogContentBlock"> | number
    createdAt?: DateTimeFilter<"BlogContentBlock"> | Date | string
    updatedAt?: DateTimeFilter<"BlogContentBlock"> | Date | string
  }

  export type BlogCreateWithoutContentBlocksInput = {
    id?: string
    title: string
    slug: string
    mainImage?: string | null
    metaTitle?: string | null
    metaDescription?: string | null
    keywords?: string | null
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    category: BlogCategoryCreateNestedOneWithoutBlogsInput
    subcategory?: BlogSubCategoryCreateNestedOneWithoutBlogsInput
  }

  export type BlogUncheckedCreateWithoutContentBlocksInput = {
    id?: string
    title: string
    slug: string
    mainImage?: string | null
    categoryId: string
    subcategoryId?: string | null
    metaTitle?: string | null
    metaDescription?: string | null
    keywords?: string | null
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BlogCreateOrConnectWithoutContentBlocksInput = {
    where: BlogWhereUniqueInput
    create: XOR<BlogCreateWithoutContentBlocksInput, BlogUncheckedCreateWithoutContentBlocksInput>
  }

  export type BlogUpsertWithoutContentBlocksInput = {
    update: XOR<BlogUpdateWithoutContentBlocksInput, BlogUncheckedUpdateWithoutContentBlocksInput>
    create: XOR<BlogCreateWithoutContentBlocksInput, BlogUncheckedCreateWithoutContentBlocksInput>
    where?: BlogWhereInput
  }

  export type BlogUpdateToOneWithWhereWithoutContentBlocksInput = {
    where?: BlogWhereInput
    data: XOR<BlogUpdateWithoutContentBlocksInput, BlogUncheckedUpdateWithoutContentBlocksInput>
  }

  export type BlogUpdateWithoutContentBlocksInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    mainImage?: NullableStringFieldUpdateOperationsInput | string | null
    metaTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    keywords?: NullableStringFieldUpdateOperationsInput | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: BlogCategoryUpdateOneRequiredWithoutBlogsNestedInput
    subcategory?: BlogSubCategoryUpdateOneWithoutBlogsNestedInput
  }

  export type BlogUncheckedUpdateWithoutContentBlocksInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    mainImage?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: StringFieldUpdateOperationsInput | string
    subcategoryId?: NullableStringFieldUpdateOperationsInput | string | null
    metaTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    keywords?: NullableStringFieldUpdateOperationsInput | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectCreateManyServiceInput = {
    id?: string
    title: string
    shortDescription?: string | null
    description: string
    imageUrl?: string | null
    tags?: string | null
    liveLink?: string | null
    githubLink?: string | null
    sorting?: number
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectUpdateWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    liveLink?: NullableStringFieldUpdateOperationsInput | string | null
    githubLink?: NullableStringFieldUpdateOperationsInput | string | null
    sorting?: IntFieldUpdateOperationsInput | number
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUncheckedUpdateWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    liveLink?: NullableStringFieldUpdateOperationsInput | string | null
    githubLink?: NullableStringFieldUpdateOperationsInput | string | null
    sorting?: IntFieldUpdateOperationsInput | number
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUncheckedUpdateManyWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    liveLink?: NullableStringFieldUpdateOperationsInput | string | null
    githubLink?: NullableStringFieldUpdateOperationsInput | string | null
    sorting?: IntFieldUpdateOperationsInput | number
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogSubCategoryCreateManyCategoryInput = {
    id?: string
    name: string
    slug: string
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BlogCreateManyCategoryInput = {
    id?: string
    title: string
    slug: string
    mainImage?: string | null
    subcategoryId?: string | null
    metaTitle?: string | null
    metaDescription?: string | null
    keywords?: string | null
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BlogSubCategoryUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blogs?: BlogUpdateManyWithoutSubcategoryNestedInput
  }

  export type BlogSubCategoryUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blogs?: BlogUncheckedUpdateManyWithoutSubcategoryNestedInput
  }

  export type BlogSubCategoryUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    mainImage?: NullableStringFieldUpdateOperationsInput | string | null
    metaTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    keywords?: NullableStringFieldUpdateOperationsInput | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subcategory?: BlogSubCategoryUpdateOneWithoutBlogsNestedInput
    contentBlocks?: BlogContentBlockUpdateManyWithoutBlogNestedInput
  }

  export type BlogUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    mainImage?: NullableStringFieldUpdateOperationsInput | string | null
    subcategoryId?: NullableStringFieldUpdateOperationsInput | string | null
    metaTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    keywords?: NullableStringFieldUpdateOperationsInput | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contentBlocks?: BlogContentBlockUncheckedUpdateManyWithoutBlogNestedInput
  }

  export type BlogUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    mainImage?: NullableStringFieldUpdateOperationsInput | string | null
    subcategoryId?: NullableStringFieldUpdateOperationsInput | string | null
    metaTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    keywords?: NullableStringFieldUpdateOperationsInput | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogCreateManySubcategoryInput = {
    id?: string
    title: string
    slug: string
    mainImage?: string | null
    categoryId: string
    metaTitle?: string | null
    metaDescription?: string | null
    keywords?: string | null
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BlogUpdateWithoutSubcategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    mainImage?: NullableStringFieldUpdateOperationsInput | string | null
    metaTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    keywords?: NullableStringFieldUpdateOperationsInput | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: BlogCategoryUpdateOneRequiredWithoutBlogsNestedInput
    contentBlocks?: BlogContentBlockUpdateManyWithoutBlogNestedInput
  }

  export type BlogUncheckedUpdateWithoutSubcategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    mainImage?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: StringFieldUpdateOperationsInput | string
    metaTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    keywords?: NullableStringFieldUpdateOperationsInput | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contentBlocks?: BlogContentBlockUncheckedUpdateManyWithoutBlogNestedInput
  }

  export type BlogUncheckedUpdateManyWithoutSubcategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    mainImage?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: StringFieldUpdateOperationsInput | string
    metaTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    keywords?: NullableStringFieldUpdateOperationsInput | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogContentBlockCreateManyBlogInput = {
    id?: string
    subTitle?: string | null
    images?: string | null
    layoutStyle?: string
    content?: string | null
    sorting?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BlogContentBlockUpdateWithoutBlogInput = {
    id?: StringFieldUpdateOperationsInput | string
    subTitle?: NullableStringFieldUpdateOperationsInput | string | null
    images?: NullableStringFieldUpdateOperationsInput | string | null
    layoutStyle?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    sorting?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogContentBlockUncheckedUpdateWithoutBlogInput = {
    id?: StringFieldUpdateOperationsInput | string
    subTitle?: NullableStringFieldUpdateOperationsInput | string | null
    images?: NullableStringFieldUpdateOperationsInput | string | null
    layoutStyle?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    sorting?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogContentBlockUncheckedUpdateManyWithoutBlogInput = {
    id?: StringFieldUpdateOperationsInput | string
    subTitle?: NullableStringFieldUpdateOperationsInput | string | null
    images?: NullableStringFieldUpdateOperationsInput | string | null
    layoutStyle?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    sorting?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use ServiceCountOutputTypeDefaultArgs instead
     */
    export type ServiceCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ServiceCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BlogCategoryCountOutputTypeDefaultArgs instead
     */
    export type BlogCategoryCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BlogCategoryCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BlogSubCategoryCountOutputTypeDefaultArgs instead
     */
    export type BlogSubCategoryCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BlogSubCategoryCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BlogCountOutputTypeDefaultArgs instead
     */
    export type BlogCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BlogCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ContactInquiryDefaultArgs instead
     */
    export type ContactInquiryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ContactInquiryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AuditRequestDefaultArgs instead
     */
    export type AuditRequestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AuditRequestDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PageContentDefaultArgs instead
     */
    export type PageContentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PageContentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProjectDefaultArgs instead
     */
    export type ProjectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProjectDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ServiceDefaultArgs instead
     */
    export type ServiceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ServiceDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SliderContentDefaultArgs instead
     */
    export type SliderContentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SliderContentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AdminDefaultArgs instead
     */
    export type AdminArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AdminDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SiteVisitDefaultArgs instead
     */
    export type SiteVisitArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SiteVisitDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BlogCategoryDefaultArgs instead
     */
    export type BlogCategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BlogCategoryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BlogSubCategoryDefaultArgs instead
     */
    export type BlogSubCategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BlogSubCategoryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BlogDefaultArgs instead
     */
    export type BlogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BlogDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BlogContentBlockDefaultArgs instead
     */
    export type BlogContentBlockArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BlogContentBlockDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}
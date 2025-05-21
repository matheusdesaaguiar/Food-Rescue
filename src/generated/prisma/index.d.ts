
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
 * Model Donor
 * 
 */
export type Donor = $Result.DefaultSelection<Prisma.$DonorPayload>
/**
 * Model Beneficiary
 * 
 */
export type Beneficiary = $Result.DefaultSelection<Prisma.$BeneficiaryPayload>
/**
 * Model CollectionPoints
 * 
 */
export type CollectionPoints = $Result.DefaultSelection<Prisma.$CollectionPointsPayload>
/**
 * Model CampaigsAwareness
 * 
 */
export type CampaigsAwareness = $Result.DefaultSelection<Prisma.$CampaigsAwarenessPayload>
/**
 * Model NotificationEngagement
 * 
 */
export type NotificationEngagement = $Result.DefaultSelection<Prisma.$NotificationEngagementPayload>
/**
 * Model Food
 * 
 */
export type Food = $Result.DefaultSelection<Prisma.$FoodPayload>
/**
 * Model ImpactReport
 * 
 */
export type ImpactReport = $Result.DefaultSelection<Prisma.$ImpactReportPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const NotificationType: {
  sent: 'sent',
  received: 'received'
};

export type NotificationType = (typeof NotificationType)[keyof typeof NotificationType]

}

export type NotificationType = $Enums.NotificationType

export const NotificationType: typeof $Enums.NotificationType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Donors
 * const donors = await prisma.donor.findMany()
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
   * // Fetch zero or more Donors
   * const donors = await prisma.donor.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.donor`: Exposes CRUD operations for the **Donor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Donors
    * const donors = await prisma.donor.findMany()
    * ```
    */
  get donor(): Prisma.DonorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.beneficiary`: Exposes CRUD operations for the **Beneficiary** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Beneficiaries
    * const beneficiaries = await prisma.beneficiary.findMany()
    * ```
    */
  get beneficiary(): Prisma.BeneficiaryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.collectionPoints`: Exposes CRUD operations for the **CollectionPoints** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CollectionPoints
    * const collectionPoints = await prisma.collectionPoints.findMany()
    * ```
    */
  get collectionPoints(): Prisma.CollectionPointsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.campaigsAwareness`: Exposes CRUD operations for the **CampaigsAwareness** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CampaigsAwarenesses
    * const campaigsAwarenesses = await prisma.campaigsAwareness.findMany()
    * ```
    */
  get campaigsAwareness(): Prisma.CampaigsAwarenessDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notificationEngagement`: Exposes CRUD operations for the **NotificationEngagement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NotificationEngagements
    * const notificationEngagements = await prisma.notificationEngagement.findMany()
    * ```
    */
  get notificationEngagement(): Prisma.NotificationEngagementDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.food`: Exposes CRUD operations for the **Food** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Foods
    * const foods = await prisma.food.findMany()
    * ```
    */
  get food(): Prisma.FoodDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.impactReport`: Exposes CRUD operations for the **ImpactReport** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ImpactReports
    * const impactReports = await prisma.impactReport.findMany()
    * ```
    */
  get impactReport(): Prisma.ImpactReportDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    Donor: 'Donor',
    Beneficiary: 'Beneficiary',
    CollectionPoints: 'CollectionPoints',
    CampaigsAwareness: 'CampaigsAwareness',
    NotificationEngagement: 'NotificationEngagement',
    Food: 'Food',
    ImpactReport: 'ImpactReport'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "donor" | "beneficiary" | "collectionPoints" | "campaigsAwareness" | "notificationEngagement" | "food" | "impactReport"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Donor: {
        payload: Prisma.$DonorPayload<ExtArgs>
        fields: Prisma.DonorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DonorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DonorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonorPayload>
          }
          findFirst: {
            args: Prisma.DonorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DonorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonorPayload>
          }
          findMany: {
            args: Prisma.DonorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonorPayload>[]
          }
          create: {
            args: Prisma.DonorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonorPayload>
          }
          createMany: {
            args: Prisma.DonorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DonorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonorPayload>[]
          }
          delete: {
            args: Prisma.DonorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonorPayload>
          }
          update: {
            args: Prisma.DonorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonorPayload>
          }
          deleteMany: {
            args: Prisma.DonorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DonorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DonorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonorPayload>[]
          }
          upsert: {
            args: Prisma.DonorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonorPayload>
          }
          aggregate: {
            args: Prisma.DonorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDonor>
          }
          groupBy: {
            args: Prisma.DonorGroupByArgs<ExtArgs>
            result: $Utils.Optional<DonorGroupByOutputType>[]
          }
          count: {
            args: Prisma.DonorCountArgs<ExtArgs>
            result: $Utils.Optional<DonorCountAggregateOutputType> | number
          }
        }
      }
      Beneficiary: {
        payload: Prisma.$BeneficiaryPayload<ExtArgs>
        fields: Prisma.BeneficiaryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BeneficiaryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BeneficiaryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BeneficiaryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BeneficiaryPayload>
          }
          findFirst: {
            args: Prisma.BeneficiaryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BeneficiaryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BeneficiaryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BeneficiaryPayload>
          }
          findMany: {
            args: Prisma.BeneficiaryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BeneficiaryPayload>[]
          }
          create: {
            args: Prisma.BeneficiaryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BeneficiaryPayload>
          }
          createMany: {
            args: Prisma.BeneficiaryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BeneficiaryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BeneficiaryPayload>[]
          }
          delete: {
            args: Prisma.BeneficiaryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BeneficiaryPayload>
          }
          update: {
            args: Prisma.BeneficiaryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BeneficiaryPayload>
          }
          deleteMany: {
            args: Prisma.BeneficiaryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BeneficiaryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BeneficiaryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BeneficiaryPayload>[]
          }
          upsert: {
            args: Prisma.BeneficiaryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BeneficiaryPayload>
          }
          aggregate: {
            args: Prisma.BeneficiaryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBeneficiary>
          }
          groupBy: {
            args: Prisma.BeneficiaryGroupByArgs<ExtArgs>
            result: $Utils.Optional<BeneficiaryGroupByOutputType>[]
          }
          count: {
            args: Prisma.BeneficiaryCountArgs<ExtArgs>
            result: $Utils.Optional<BeneficiaryCountAggregateOutputType> | number
          }
        }
      }
      CollectionPoints: {
        payload: Prisma.$CollectionPointsPayload<ExtArgs>
        fields: Prisma.CollectionPointsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CollectionPointsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPointsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CollectionPointsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPointsPayload>
          }
          findFirst: {
            args: Prisma.CollectionPointsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPointsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CollectionPointsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPointsPayload>
          }
          findMany: {
            args: Prisma.CollectionPointsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPointsPayload>[]
          }
          create: {
            args: Prisma.CollectionPointsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPointsPayload>
          }
          createMany: {
            args: Prisma.CollectionPointsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CollectionPointsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPointsPayload>[]
          }
          delete: {
            args: Prisma.CollectionPointsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPointsPayload>
          }
          update: {
            args: Prisma.CollectionPointsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPointsPayload>
          }
          deleteMany: {
            args: Prisma.CollectionPointsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CollectionPointsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CollectionPointsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPointsPayload>[]
          }
          upsert: {
            args: Prisma.CollectionPointsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPointsPayload>
          }
          aggregate: {
            args: Prisma.CollectionPointsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCollectionPoints>
          }
          groupBy: {
            args: Prisma.CollectionPointsGroupByArgs<ExtArgs>
            result: $Utils.Optional<CollectionPointsGroupByOutputType>[]
          }
          count: {
            args: Prisma.CollectionPointsCountArgs<ExtArgs>
            result: $Utils.Optional<CollectionPointsCountAggregateOutputType> | number
          }
        }
      }
      CampaigsAwareness: {
        payload: Prisma.$CampaigsAwarenessPayload<ExtArgs>
        fields: Prisma.CampaigsAwarenessFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CampaigsAwarenessFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaigsAwarenessPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CampaigsAwarenessFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaigsAwarenessPayload>
          }
          findFirst: {
            args: Prisma.CampaigsAwarenessFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaigsAwarenessPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CampaigsAwarenessFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaigsAwarenessPayload>
          }
          findMany: {
            args: Prisma.CampaigsAwarenessFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaigsAwarenessPayload>[]
          }
          create: {
            args: Prisma.CampaigsAwarenessCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaigsAwarenessPayload>
          }
          createMany: {
            args: Prisma.CampaigsAwarenessCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CampaigsAwarenessCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaigsAwarenessPayload>[]
          }
          delete: {
            args: Prisma.CampaigsAwarenessDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaigsAwarenessPayload>
          }
          update: {
            args: Prisma.CampaigsAwarenessUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaigsAwarenessPayload>
          }
          deleteMany: {
            args: Prisma.CampaigsAwarenessDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CampaigsAwarenessUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CampaigsAwarenessUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaigsAwarenessPayload>[]
          }
          upsert: {
            args: Prisma.CampaigsAwarenessUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaigsAwarenessPayload>
          }
          aggregate: {
            args: Prisma.CampaigsAwarenessAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCampaigsAwareness>
          }
          groupBy: {
            args: Prisma.CampaigsAwarenessGroupByArgs<ExtArgs>
            result: $Utils.Optional<CampaigsAwarenessGroupByOutputType>[]
          }
          count: {
            args: Prisma.CampaigsAwarenessCountArgs<ExtArgs>
            result: $Utils.Optional<CampaigsAwarenessCountAggregateOutputType> | number
          }
        }
      }
      NotificationEngagement: {
        payload: Prisma.$NotificationEngagementPayload<ExtArgs>
        fields: Prisma.NotificationEngagementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationEngagementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationEngagementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationEngagementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationEngagementPayload>
          }
          findFirst: {
            args: Prisma.NotificationEngagementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationEngagementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationEngagementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationEngagementPayload>
          }
          findMany: {
            args: Prisma.NotificationEngagementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationEngagementPayload>[]
          }
          create: {
            args: Prisma.NotificationEngagementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationEngagementPayload>
          }
          createMany: {
            args: Prisma.NotificationEngagementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotificationEngagementCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationEngagementPayload>[]
          }
          delete: {
            args: Prisma.NotificationEngagementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationEngagementPayload>
          }
          update: {
            args: Prisma.NotificationEngagementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationEngagementPayload>
          }
          deleteMany: {
            args: Prisma.NotificationEngagementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationEngagementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NotificationEngagementUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationEngagementPayload>[]
          }
          upsert: {
            args: Prisma.NotificationEngagementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationEngagementPayload>
          }
          aggregate: {
            args: Prisma.NotificationEngagementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotificationEngagement>
          }
          groupBy: {
            args: Prisma.NotificationEngagementGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationEngagementGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationEngagementCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationEngagementCountAggregateOutputType> | number
          }
        }
      }
      Food: {
        payload: Prisma.$FoodPayload<ExtArgs>
        fields: Prisma.FoodFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FoodFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FoodFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodPayload>
          }
          findFirst: {
            args: Prisma.FoodFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FoodFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodPayload>
          }
          findMany: {
            args: Prisma.FoodFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodPayload>[]
          }
          create: {
            args: Prisma.FoodCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodPayload>
          }
          createMany: {
            args: Prisma.FoodCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FoodCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodPayload>[]
          }
          delete: {
            args: Prisma.FoodDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodPayload>
          }
          update: {
            args: Prisma.FoodUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodPayload>
          }
          deleteMany: {
            args: Prisma.FoodDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FoodUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FoodUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodPayload>[]
          }
          upsert: {
            args: Prisma.FoodUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodPayload>
          }
          aggregate: {
            args: Prisma.FoodAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFood>
          }
          groupBy: {
            args: Prisma.FoodGroupByArgs<ExtArgs>
            result: $Utils.Optional<FoodGroupByOutputType>[]
          }
          count: {
            args: Prisma.FoodCountArgs<ExtArgs>
            result: $Utils.Optional<FoodCountAggregateOutputType> | number
          }
        }
      }
      ImpactReport: {
        payload: Prisma.$ImpactReportPayload<ExtArgs>
        fields: Prisma.ImpactReportFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ImpactReportFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImpactReportPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ImpactReportFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImpactReportPayload>
          }
          findFirst: {
            args: Prisma.ImpactReportFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImpactReportPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ImpactReportFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImpactReportPayload>
          }
          findMany: {
            args: Prisma.ImpactReportFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImpactReportPayload>[]
          }
          create: {
            args: Prisma.ImpactReportCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImpactReportPayload>
          }
          createMany: {
            args: Prisma.ImpactReportCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ImpactReportCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImpactReportPayload>[]
          }
          delete: {
            args: Prisma.ImpactReportDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImpactReportPayload>
          }
          update: {
            args: Prisma.ImpactReportUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImpactReportPayload>
          }
          deleteMany: {
            args: Prisma.ImpactReportDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ImpactReportUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ImpactReportUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImpactReportPayload>[]
          }
          upsert: {
            args: Prisma.ImpactReportUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImpactReportPayload>
          }
          aggregate: {
            args: Prisma.ImpactReportAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateImpactReport>
          }
          groupBy: {
            args: Prisma.ImpactReportGroupByArgs<ExtArgs>
            result: $Utils.Optional<ImpactReportGroupByOutputType>[]
          }
          count: {
            args: Prisma.ImpactReportCountArgs<ExtArgs>
            result: $Utils.Optional<ImpactReportCountAggregateOutputType> | number
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
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    donor?: DonorOmit
    beneficiary?: BeneficiaryOmit
    collectionPoints?: CollectionPointsOmit
    campaigsAwareness?: CampaigsAwarenessOmit
    notificationEngagement?: NotificationEngagementOmit
    food?: FoodOmit
    impactReport?: ImpactReportOmit
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
    | 'updateManyAndReturn'
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
   * Count Type DonorCountOutputType
   */

  export type DonorCountOutputType = {
    Food: number
    ImpactReport: number
  }

  export type DonorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Food?: boolean | DonorCountOutputTypeCountFoodArgs
    ImpactReport?: boolean | DonorCountOutputTypeCountImpactReportArgs
  }

  // Custom InputTypes
  /**
   * DonorCountOutputType without action
   */
  export type DonorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonorCountOutputType
     */
    select?: DonorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DonorCountOutputType without action
   */
  export type DonorCountOutputTypeCountFoodArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FoodWhereInput
  }

  /**
   * DonorCountOutputType without action
   */
  export type DonorCountOutputTypeCountImpactReportArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImpactReportWhereInput
  }


  /**
   * Count Type BeneficiaryCountOutputType
   */

  export type BeneficiaryCountOutputType = {
    collectionPoints: number
    notificationEngagements: number
  }

  export type BeneficiaryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    collectionPoints?: boolean | BeneficiaryCountOutputTypeCountCollectionPointsArgs
    notificationEngagements?: boolean | BeneficiaryCountOutputTypeCountNotificationEngagementsArgs
  }

  // Custom InputTypes
  /**
   * BeneficiaryCountOutputType without action
   */
  export type BeneficiaryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BeneficiaryCountOutputType
     */
    select?: BeneficiaryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BeneficiaryCountOutputType without action
   */
  export type BeneficiaryCountOutputTypeCountCollectionPointsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CollectionPointsWhereInput
  }

  /**
   * BeneficiaryCountOutputType without action
   */
  export type BeneficiaryCountOutputTypeCountNotificationEngagementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationEngagementWhereInput
  }


  /**
   * Count Type CollectionPointsCountOutputType
   */

  export type CollectionPointsCountOutputType = {
    food: number
  }

  export type CollectionPointsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    food?: boolean | CollectionPointsCountOutputTypeCountFoodArgs
  }

  // Custom InputTypes
  /**
   * CollectionPointsCountOutputType without action
   */
  export type CollectionPointsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollectionPointsCountOutputType
     */
    select?: CollectionPointsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CollectionPointsCountOutputType without action
   */
  export type CollectionPointsCountOutputTypeCountFoodArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FoodWhereInput
  }


  /**
   * Count Type CampaigsAwarenessCountOutputType
   */

  export type CampaigsAwarenessCountOutputType = {
    food: number
    collectionPoints: number
  }

  export type CampaigsAwarenessCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    food?: boolean | CampaigsAwarenessCountOutputTypeCountFoodArgs
    collectionPoints?: boolean | CampaigsAwarenessCountOutputTypeCountCollectionPointsArgs
  }

  // Custom InputTypes
  /**
   * CampaigsAwarenessCountOutputType without action
   */
  export type CampaigsAwarenessCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaigsAwarenessCountOutputType
     */
    select?: CampaigsAwarenessCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CampaigsAwarenessCountOutputType without action
   */
  export type CampaigsAwarenessCountOutputTypeCountFoodArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FoodWhereInput
  }

  /**
   * CampaigsAwarenessCountOutputType without action
   */
  export type CampaigsAwarenessCountOutputTypeCountCollectionPointsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CollectionPointsWhereInput
  }


  /**
   * Count Type FoodCountOutputType
   */

  export type FoodCountOutputType = {
    notificationEngagements: number
  }

  export type FoodCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    notificationEngagements?: boolean | FoodCountOutputTypeCountNotificationEngagementsArgs
  }

  // Custom InputTypes
  /**
   * FoodCountOutputType without action
   */
  export type FoodCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodCountOutputType
     */
    select?: FoodCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FoodCountOutputType without action
   */
  export type FoodCountOutputTypeCountNotificationEngagementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationEngagementWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Donor
   */

  export type AggregateDonor = {
    _count: DonorCountAggregateOutputType | null
    _avg: DonorAvgAggregateOutputType | null
    _sum: DonorSumAggregateOutputType | null
    _min: DonorMinAggregateOutputType | null
    _max: DonorMaxAggregateOutputType | null
  }

  export type DonorAvgAggregateOutputType = {
    id: number | null
  }

  export type DonorSumAggregateOutputType = {
    id: number | null
  }

  export type DonorMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    phone: string | null
    address: string | null
    cnpj: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DonorMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    phone: string | null
    address: string | null
    cnpj: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DonorCountAggregateOutputType = {
    id: number
    name: number
    email: number
    phone: number
    address: number
    cnpj: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DonorAvgAggregateInputType = {
    id?: true
  }

  export type DonorSumAggregateInputType = {
    id?: true
  }

  export type DonorMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    address?: true
    cnpj?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DonorMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    address?: true
    cnpj?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DonorCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    address?: true
    cnpj?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DonorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Donor to aggregate.
     */
    where?: DonorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Donors to fetch.
     */
    orderBy?: DonorOrderByWithRelationInput | DonorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DonorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Donors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Donors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Donors
    **/
    _count?: true | DonorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DonorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DonorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DonorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DonorMaxAggregateInputType
  }

  export type GetDonorAggregateType<T extends DonorAggregateArgs> = {
        [P in keyof T & keyof AggregateDonor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDonor[P]>
      : GetScalarType<T[P], AggregateDonor[P]>
  }




  export type DonorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DonorWhereInput
    orderBy?: DonorOrderByWithAggregationInput | DonorOrderByWithAggregationInput[]
    by: DonorScalarFieldEnum[] | DonorScalarFieldEnum
    having?: DonorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DonorCountAggregateInputType | true
    _avg?: DonorAvgAggregateInputType
    _sum?: DonorSumAggregateInputType
    _min?: DonorMinAggregateInputType
    _max?: DonorMaxAggregateInputType
  }

  export type DonorGroupByOutputType = {
    id: number
    name: string
    email: string
    phone: string
    address: string
    cnpj: string
    createdAt: Date
    updatedAt: Date
    _count: DonorCountAggregateOutputType | null
    _avg: DonorAvgAggregateOutputType | null
    _sum: DonorSumAggregateOutputType | null
    _min: DonorMinAggregateOutputType | null
    _max: DonorMaxAggregateOutputType | null
  }

  type GetDonorGroupByPayload<T extends DonorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DonorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DonorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DonorGroupByOutputType[P]>
            : GetScalarType<T[P], DonorGroupByOutputType[P]>
        }
      >
    >


  export type DonorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    cnpj?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Food?: boolean | Donor$FoodArgs<ExtArgs>
    ImpactReport?: boolean | Donor$ImpactReportArgs<ExtArgs>
    _count?: boolean | DonorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["donor"]>

  export type DonorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    cnpj?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["donor"]>

  export type DonorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    cnpj?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["donor"]>

  export type DonorSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    cnpj?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DonorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "phone" | "address" | "cnpj" | "createdAt" | "updatedAt", ExtArgs["result"]["donor"]>
  export type DonorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Food?: boolean | Donor$FoodArgs<ExtArgs>
    ImpactReport?: boolean | Donor$ImpactReportArgs<ExtArgs>
    _count?: boolean | DonorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DonorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type DonorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DonorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Donor"
    objects: {
      Food: Prisma.$FoodPayload<ExtArgs>[]
      ImpactReport: Prisma.$ImpactReportPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      phone: string
      address: string
      cnpj: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["donor"]>
    composites: {}
  }

  type DonorGetPayload<S extends boolean | null | undefined | DonorDefaultArgs> = $Result.GetResult<Prisma.$DonorPayload, S>

  type DonorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DonorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DonorCountAggregateInputType | true
    }

  export interface DonorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Donor'], meta: { name: 'Donor' } }
    /**
     * Find zero or one Donor that matches the filter.
     * @param {DonorFindUniqueArgs} args - Arguments to find a Donor
     * @example
     * // Get one Donor
     * const donor = await prisma.donor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DonorFindUniqueArgs>(args: SelectSubset<T, DonorFindUniqueArgs<ExtArgs>>): Prisma__DonorClient<$Result.GetResult<Prisma.$DonorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Donor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DonorFindUniqueOrThrowArgs} args - Arguments to find a Donor
     * @example
     * // Get one Donor
     * const donor = await prisma.donor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DonorFindUniqueOrThrowArgs>(args: SelectSubset<T, DonorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DonorClient<$Result.GetResult<Prisma.$DonorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Donor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonorFindFirstArgs} args - Arguments to find a Donor
     * @example
     * // Get one Donor
     * const donor = await prisma.donor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DonorFindFirstArgs>(args?: SelectSubset<T, DonorFindFirstArgs<ExtArgs>>): Prisma__DonorClient<$Result.GetResult<Prisma.$DonorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Donor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonorFindFirstOrThrowArgs} args - Arguments to find a Donor
     * @example
     * // Get one Donor
     * const donor = await prisma.donor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DonorFindFirstOrThrowArgs>(args?: SelectSubset<T, DonorFindFirstOrThrowArgs<ExtArgs>>): Prisma__DonorClient<$Result.GetResult<Prisma.$DonorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Donors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Donors
     * const donors = await prisma.donor.findMany()
     * 
     * // Get first 10 Donors
     * const donors = await prisma.donor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const donorWithIdOnly = await prisma.donor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DonorFindManyArgs>(args?: SelectSubset<T, DonorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DonorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Donor.
     * @param {DonorCreateArgs} args - Arguments to create a Donor.
     * @example
     * // Create one Donor
     * const Donor = await prisma.donor.create({
     *   data: {
     *     // ... data to create a Donor
     *   }
     * })
     * 
     */
    create<T extends DonorCreateArgs>(args: SelectSubset<T, DonorCreateArgs<ExtArgs>>): Prisma__DonorClient<$Result.GetResult<Prisma.$DonorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Donors.
     * @param {DonorCreateManyArgs} args - Arguments to create many Donors.
     * @example
     * // Create many Donors
     * const donor = await prisma.donor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DonorCreateManyArgs>(args?: SelectSubset<T, DonorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Donors and returns the data saved in the database.
     * @param {DonorCreateManyAndReturnArgs} args - Arguments to create many Donors.
     * @example
     * // Create many Donors
     * const donor = await prisma.donor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Donors and only return the `id`
     * const donorWithIdOnly = await prisma.donor.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DonorCreateManyAndReturnArgs>(args?: SelectSubset<T, DonorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DonorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Donor.
     * @param {DonorDeleteArgs} args - Arguments to delete one Donor.
     * @example
     * // Delete one Donor
     * const Donor = await prisma.donor.delete({
     *   where: {
     *     // ... filter to delete one Donor
     *   }
     * })
     * 
     */
    delete<T extends DonorDeleteArgs>(args: SelectSubset<T, DonorDeleteArgs<ExtArgs>>): Prisma__DonorClient<$Result.GetResult<Prisma.$DonorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Donor.
     * @param {DonorUpdateArgs} args - Arguments to update one Donor.
     * @example
     * // Update one Donor
     * const donor = await prisma.donor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DonorUpdateArgs>(args: SelectSubset<T, DonorUpdateArgs<ExtArgs>>): Prisma__DonorClient<$Result.GetResult<Prisma.$DonorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Donors.
     * @param {DonorDeleteManyArgs} args - Arguments to filter Donors to delete.
     * @example
     * // Delete a few Donors
     * const { count } = await prisma.donor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DonorDeleteManyArgs>(args?: SelectSubset<T, DonorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Donors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Donors
     * const donor = await prisma.donor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DonorUpdateManyArgs>(args: SelectSubset<T, DonorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Donors and returns the data updated in the database.
     * @param {DonorUpdateManyAndReturnArgs} args - Arguments to update many Donors.
     * @example
     * // Update many Donors
     * const donor = await prisma.donor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Donors and only return the `id`
     * const donorWithIdOnly = await prisma.donor.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DonorUpdateManyAndReturnArgs>(args: SelectSubset<T, DonorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DonorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Donor.
     * @param {DonorUpsertArgs} args - Arguments to update or create a Donor.
     * @example
     * // Update or create a Donor
     * const donor = await prisma.donor.upsert({
     *   create: {
     *     // ... data to create a Donor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Donor we want to update
     *   }
     * })
     */
    upsert<T extends DonorUpsertArgs>(args: SelectSubset<T, DonorUpsertArgs<ExtArgs>>): Prisma__DonorClient<$Result.GetResult<Prisma.$DonorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Donors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonorCountArgs} args - Arguments to filter Donors to count.
     * @example
     * // Count the number of Donors
     * const count = await prisma.donor.count({
     *   where: {
     *     // ... the filter for the Donors we want to count
     *   }
     * })
    **/
    count<T extends DonorCountArgs>(
      args?: Subset<T, DonorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DonorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Donor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DonorAggregateArgs>(args: Subset<T, DonorAggregateArgs>): Prisma.PrismaPromise<GetDonorAggregateType<T>>

    /**
     * Group by Donor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonorGroupByArgs} args - Group by arguments.
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
      T extends DonorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DonorGroupByArgs['orderBy'] }
        : { orderBy?: DonorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DonorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDonorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Donor model
   */
  readonly fields: DonorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Donor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DonorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Food<T extends Donor$FoodArgs<ExtArgs> = {}>(args?: Subset<T, Donor$FoodArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ImpactReport<T extends Donor$ImpactReportArgs<ExtArgs> = {}>(args?: Subset<T, Donor$ImpactReportArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImpactReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Donor model
   */
  interface DonorFieldRefs {
    readonly id: FieldRef<"Donor", 'Int'>
    readonly name: FieldRef<"Donor", 'String'>
    readonly email: FieldRef<"Donor", 'String'>
    readonly phone: FieldRef<"Donor", 'String'>
    readonly address: FieldRef<"Donor", 'String'>
    readonly cnpj: FieldRef<"Donor", 'String'>
    readonly createdAt: FieldRef<"Donor", 'DateTime'>
    readonly updatedAt: FieldRef<"Donor", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Donor findUnique
   */
  export type DonorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donor
     */
    select?: DonorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donor
     */
    omit?: DonorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonorInclude<ExtArgs> | null
    /**
     * Filter, which Donor to fetch.
     */
    where: DonorWhereUniqueInput
  }

  /**
   * Donor findUniqueOrThrow
   */
  export type DonorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donor
     */
    select?: DonorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donor
     */
    omit?: DonorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonorInclude<ExtArgs> | null
    /**
     * Filter, which Donor to fetch.
     */
    where: DonorWhereUniqueInput
  }

  /**
   * Donor findFirst
   */
  export type DonorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donor
     */
    select?: DonorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donor
     */
    omit?: DonorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonorInclude<ExtArgs> | null
    /**
     * Filter, which Donor to fetch.
     */
    where?: DonorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Donors to fetch.
     */
    orderBy?: DonorOrderByWithRelationInput | DonorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Donors.
     */
    cursor?: DonorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Donors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Donors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Donors.
     */
    distinct?: DonorScalarFieldEnum | DonorScalarFieldEnum[]
  }

  /**
   * Donor findFirstOrThrow
   */
  export type DonorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donor
     */
    select?: DonorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donor
     */
    omit?: DonorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonorInclude<ExtArgs> | null
    /**
     * Filter, which Donor to fetch.
     */
    where?: DonorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Donors to fetch.
     */
    orderBy?: DonorOrderByWithRelationInput | DonorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Donors.
     */
    cursor?: DonorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Donors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Donors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Donors.
     */
    distinct?: DonorScalarFieldEnum | DonorScalarFieldEnum[]
  }

  /**
   * Donor findMany
   */
  export type DonorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donor
     */
    select?: DonorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donor
     */
    omit?: DonorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonorInclude<ExtArgs> | null
    /**
     * Filter, which Donors to fetch.
     */
    where?: DonorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Donors to fetch.
     */
    orderBy?: DonorOrderByWithRelationInput | DonorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Donors.
     */
    cursor?: DonorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Donors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Donors.
     */
    skip?: number
    distinct?: DonorScalarFieldEnum | DonorScalarFieldEnum[]
  }

  /**
   * Donor create
   */
  export type DonorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donor
     */
    select?: DonorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donor
     */
    omit?: DonorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonorInclude<ExtArgs> | null
    /**
     * The data needed to create a Donor.
     */
    data: XOR<DonorCreateInput, DonorUncheckedCreateInput>
  }

  /**
   * Donor createMany
   */
  export type DonorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Donors.
     */
    data: DonorCreateManyInput | DonorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Donor createManyAndReturn
   */
  export type DonorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donor
     */
    select?: DonorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Donor
     */
    omit?: DonorOmit<ExtArgs> | null
    /**
     * The data used to create many Donors.
     */
    data: DonorCreateManyInput | DonorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Donor update
   */
  export type DonorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donor
     */
    select?: DonorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donor
     */
    omit?: DonorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonorInclude<ExtArgs> | null
    /**
     * The data needed to update a Donor.
     */
    data: XOR<DonorUpdateInput, DonorUncheckedUpdateInput>
    /**
     * Choose, which Donor to update.
     */
    where: DonorWhereUniqueInput
  }

  /**
   * Donor updateMany
   */
  export type DonorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Donors.
     */
    data: XOR<DonorUpdateManyMutationInput, DonorUncheckedUpdateManyInput>
    /**
     * Filter which Donors to update
     */
    where?: DonorWhereInput
    /**
     * Limit how many Donors to update.
     */
    limit?: number
  }

  /**
   * Donor updateManyAndReturn
   */
  export type DonorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donor
     */
    select?: DonorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Donor
     */
    omit?: DonorOmit<ExtArgs> | null
    /**
     * The data used to update Donors.
     */
    data: XOR<DonorUpdateManyMutationInput, DonorUncheckedUpdateManyInput>
    /**
     * Filter which Donors to update
     */
    where?: DonorWhereInput
    /**
     * Limit how many Donors to update.
     */
    limit?: number
  }

  /**
   * Donor upsert
   */
  export type DonorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donor
     */
    select?: DonorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donor
     */
    omit?: DonorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonorInclude<ExtArgs> | null
    /**
     * The filter to search for the Donor to update in case it exists.
     */
    where: DonorWhereUniqueInput
    /**
     * In case the Donor found by the `where` argument doesn't exist, create a new Donor with this data.
     */
    create: XOR<DonorCreateInput, DonorUncheckedCreateInput>
    /**
     * In case the Donor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DonorUpdateInput, DonorUncheckedUpdateInput>
  }

  /**
   * Donor delete
   */
  export type DonorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donor
     */
    select?: DonorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donor
     */
    omit?: DonorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonorInclude<ExtArgs> | null
    /**
     * Filter which Donor to delete.
     */
    where: DonorWhereUniqueInput
  }

  /**
   * Donor deleteMany
   */
  export type DonorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Donors to delete
     */
    where?: DonorWhereInput
    /**
     * Limit how many Donors to delete.
     */
    limit?: number
  }

  /**
   * Donor.Food
   */
  export type Donor$FoodArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food
     */
    select?: FoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Food
     */
    omit?: FoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodInclude<ExtArgs> | null
    where?: FoodWhereInput
    orderBy?: FoodOrderByWithRelationInput | FoodOrderByWithRelationInput[]
    cursor?: FoodWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FoodScalarFieldEnum | FoodScalarFieldEnum[]
  }

  /**
   * Donor.ImpactReport
   */
  export type Donor$ImpactReportArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImpactReport
     */
    select?: ImpactReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImpactReport
     */
    omit?: ImpactReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImpactReportInclude<ExtArgs> | null
    where?: ImpactReportWhereInput
    orderBy?: ImpactReportOrderByWithRelationInput | ImpactReportOrderByWithRelationInput[]
    cursor?: ImpactReportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ImpactReportScalarFieldEnum | ImpactReportScalarFieldEnum[]
  }

  /**
   * Donor without action
   */
  export type DonorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donor
     */
    select?: DonorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donor
     */
    omit?: DonorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonorInclude<ExtArgs> | null
  }


  /**
   * Model Beneficiary
   */

  export type AggregateBeneficiary = {
    _count: BeneficiaryCountAggregateOutputType | null
    _avg: BeneficiaryAvgAggregateOutputType | null
    _sum: BeneficiarySumAggregateOutputType | null
    _min: BeneficiaryMinAggregateOutputType | null
    _max: BeneficiaryMaxAggregateOutputType | null
  }

  export type BeneficiaryAvgAggregateOutputType = {
    id: number | null
  }

  export type BeneficiarySumAggregateOutputType = {
    id: number | null
  }

  export type BeneficiaryMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    phone: string | null
    address: string | null
    cpf: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BeneficiaryMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    phone: string | null
    address: string | null
    cpf: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BeneficiaryCountAggregateOutputType = {
    id: number
    name: number
    email: number
    phone: number
    address: number
    cpf: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BeneficiaryAvgAggregateInputType = {
    id?: true
  }

  export type BeneficiarySumAggregateInputType = {
    id?: true
  }

  export type BeneficiaryMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    address?: true
    cpf?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BeneficiaryMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    address?: true
    cpf?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BeneficiaryCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    address?: true
    cpf?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BeneficiaryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Beneficiary to aggregate.
     */
    where?: BeneficiaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Beneficiaries to fetch.
     */
    orderBy?: BeneficiaryOrderByWithRelationInput | BeneficiaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BeneficiaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Beneficiaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Beneficiaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Beneficiaries
    **/
    _count?: true | BeneficiaryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BeneficiaryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BeneficiarySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BeneficiaryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BeneficiaryMaxAggregateInputType
  }

  export type GetBeneficiaryAggregateType<T extends BeneficiaryAggregateArgs> = {
        [P in keyof T & keyof AggregateBeneficiary]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBeneficiary[P]>
      : GetScalarType<T[P], AggregateBeneficiary[P]>
  }




  export type BeneficiaryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BeneficiaryWhereInput
    orderBy?: BeneficiaryOrderByWithAggregationInput | BeneficiaryOrderByWithAggregationInput[]
    by: BeneficiaryScalarFieldEnum[] | BeneficiaryScalarFieldEnum
    having?: BeneficiaryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BeneficiaryCountAggregateInputType | true
    _avg?: BeneficiaryAvgAggregateInputType
    _sum?: BeneficiarySumAggregateInputType
    _min?: BeneficiaryMinAggregateInputType
    _max?: BeneficiaryMaxAggregateInputType
  }

  export type BeneficiaryGroupByOutputType = {
    id: number
    name: string
    email: string
    phone: string
    address: string
    cpf: string
    createdAt: Date
    updatedAt: Date
    _count: BeneficiaryCountAggregateOutputType | null
    _avg: BeneficiaryAvgAggregateOutputType | null
    _sum: BeneficiarySumAggregateOutputType | null
    _min: BeneficiaryMinAggregateOutputType | null
    _max: BeneficiaryMaxAggregateOutputType | null
  }

  type GetBeneficiaryGroupByPayload<T extends BeneficiaryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BeneficiaryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BeneficiaryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BeneficiaryGroupByOutputType[P]>
            : GetScalarType<T[P], BeneficiaryGroupByOutputType[P]>
        }
      >
    >


  export type BeneficiarySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    cpf?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    collectionPoints?: boolean | Beneficiary$collectionPointsArgs<ExtArgs>
    notificationEngagements?: boolean | Beneficiary$notificationEngagementsArgs<ExtArgs>
    _count?: boolean | BeneficiaryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["beneficiary"]>

  export type BeneficiarySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    cpf?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["beneficiary"]>

  export type BeneficiarySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    cpf?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["beneficiary"]>

  export type BeneficiarySelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    cpf?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BeneficiaryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "phone" | "address" | "cpf" | "createdAt" | "updatedAt", ExtArgs["result"]["beneficiary"]>
  export type BeneficiaryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    collectionPoints?: boolean | Beneficiary$collectionPointsArgs<ExtArgs>
    notificationEngagements?: boolean | Beneficiary$notificationEngagementsArgs<ExtArgs>
    _count?: boolean | BeneficiaryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BeneficiaryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type BeneficiaryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $BeneficiaryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Beneficiary"
    objects: {
      collectionPoints: Prisma.$CollectionPointsPayload<ExtArgs>[]
      notificationEngagements: Prisma.$NotificationEngagementPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      phone: string
      address: string
      cpf: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["beneficiary"]>
    composites: {}
  }

  type BeneficiaryGetPayload<S extends boolean | null | undefined | BeneficiaryDefaultArgs> = $Result.GetResult<Prisma.$BeneficiaryPayload, S>

  type BeneficiaryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BeneficiaryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BeneficiaryCountAggregateInputType | true
    }

  export interface BeneficiaryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Beneficiary'], meta: { name: 'Beneficiary' } }
    /**
     * Find zero or one Beneficiary that matches the filter.
     * @param {BeneficiaryFindUniqueArgs} args - Arguments to find a Beneficiary
     * @example
     * // Get one Beneficiary
     * const beneficiary = await prisma.beneficiary.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BeneficiaryFindUniqueArgs>(args: SelectSubset<T, BeneficiaryFindUniqueArgs<ExtArgs>>): Prisma__BeneficiaryClient<$Result.GetResult<Prisma.$BeneficiaryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Beneficiary that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BeneficiaryFindUniqueOrThrowArgs} args - Arguments to find a Beneficiary
     * @example
     * // Get one Beneficiary
     * const beneficiary = await prisma.beneficiary.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BeneficiaryFindUniqueOrThrowArgs>(args: SelectSubset<T, BeneficiaryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BeneficiaryClient<$Result.GetResult<Prisma.$BeneficiaryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Beneficiary that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BeneficiaryFindFirstArgs} args - Arguments to find a Beneficiary
     * @example
     * // Get one Beneficiary
     * const beneficiary = await prisma.beneficiary.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BeneficiaryFindFirstArgs>(args?: SelectSubset<T, BeneficiaryFindFirstArgs<ExtArgs>>): Prisma__BeneficiaryClient<$Result.GetResult<Prisma.$BeneficiaryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Beneficiary that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BeneficiaryFindFirstOrThrowArgs} args - Arguments to find a Beneficiary
     * @example
     * // Get one Beneficiary
     * const beneficiary = await prisma.beneficiary.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BeneficiaryFindFirstOrThrowArgs>(args?: SelectSubset<T, BeneficiaryFindFirstOrThrowArgs<ExtArgs>>): Prisma__BeneficiaryClient<$Result.GetResult<Prisma.$BeneficiaryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Beneficiaries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BeneficiaryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Beneficiaries
     * const beneficiaries = await prisma.beneficiary.findMany()
     * 
     * // Get first 10 Beneficiaries
     * const beneficiaries = await prisma.beneficiary.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const beneficiaryWithIdOnly = await prisma.beneficiary.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BeneficiaryFindManyArgs>(args?: SelectSubset<T, BeneficiaryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BeneficiaryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Beneficiary.
     * @param {BeneficiaryCreateArgs} args - Arguments to create a Beneficiary.
     * @example
     * // Create one Beneficiary
     * const Beneficiary = await prisma.beneficiary.create({
     *   data: {
     *     // ... data to create a Beneficiary
     *   }
     * })
     * 
     */
    create<T extends BeneficiaryCreateArgs>(args: SelectSubset<T, BeneficiaryCreateArgs<ExtArgs>>): Prisma__BeneficiaryClient<$Result.GetResult<Prisma.$BeneficiaryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Beneficiaries.
     * @param {BeneficiaryCreateManyArgs} args - Arguments to create many Beneficiaries.
     * @example
     * // Create many Beneficiaries
     * const beneficiary = await prisma.beneficiary.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BeneficiaryCreateManyArgs>(args?: SelectSubset<T, BeneficiaryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Beneficiaries and returns the data saved in the database.
     * @param {BeneficiaryCreateManyAndReturnArgs} args - Arguments to create many Beneficiaries.
     * @example
     * // Create many Beneficiaries
     * const beneficiary = await prisma.beneficiary.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Beneficiaries and only return the `id`
     * const beneficiaryWithIdOnly = await prisma.beneficiary.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BeneficiaryCreateManyAndReturnArgs>(args?: SelectSubset<T, BeneficiaryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BeneficiaryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Beneficiary.
     * @param {BeneficiaryDeleteArgs} args - Arguments to delete one Beneficiary.
     * @example
     * // Delete one Beneficiary
     * const Beneficiary = await prisma.beneficiary.delete({
     *   where: {
     *     // ... filter to delete one Beneficiary
     *   }
     * })
     * 
     */
    delete<T extends BeneficiaryDeleteArgs>(args: SelectSubset<T, BeneficiaryDeleteArgs<ExtArgs>>): Prisma__BeneficiaryClient<$Result.GetResult<Prisma.$BeneficiaryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Beneficiary.
     * @param {BeneficiaryUpdateArgs} args - Arguments to update one Beneficiary.
     * @example
     * // Update one Beneficiary
     * const beneficiary = await prisma.beneficiary.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BeneficiaryUpdateArgs>(args: SelectSubset<T, BeneficiaryUpdateArgs<ExtArgs>>): Prisma__BeneficiaryClient<$Result.GetResult<Prisma.$BeneficiaryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Beneficiaries.
     * @param {BeneficiaryDeleteManyArgs} args - Arguments to filter Beneficiaries to delete.
     * @example
     * // Delete a few Beneficiaries
     * const { count } = await prisma.beneficiary.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BeneficiaryDeleteManyArgs>(args?: SelectSubset<T, BeneficiaryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Beneficiaries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BeneficiaryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Beneficiaries
     * const beneficiary = await prisma.beneficiary.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BeneficiaryUpdateManyArgs>(args: SelectSubset<T, BeneficiaryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Beneficiaries and returns the data updated in the database.
     * @param {BeneficiaryUpdateManyAndReturnArgs} args - Arguments to update many Beneficiaries.
     * @example
     * // Update many Beneficiaries
     * const beneficiary = await prisma.beneficiary.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Beneficiaries and only return the `id`
     * const beneficiaryWithIdOnly = await prisma.beneficiary.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BeneficiaryUpdateManyAndReturnArgs>(args: SelectSubset<T, BeneficiaryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BeneficiaryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Beneficiary.
     * @param {BeneficiaryUpsertArgs} args - Arguments to update or create a Beneficiary.
     * @example
     * // Update or create a Beneficiary
     * const beneficiary = await prisma.beneficiary.upsert({
     *   create: {
     *     // ... data to create a Beneficiary
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Beneficiary we want to update
     *   }
     * })
     */
    upsert<T extends BeneficiaryUpsertArgs>(args: SelectSubset<T, BeneficiaryUpsertArgs<ExtArgs>>): Prisma__BeneficiaryClient<$Result.GetResult<Prisma.$BeneficiaryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Beneficiaries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BeneficiaryCountArgs} args - Arguments to filter Beneficiaries to count.
     * @example
     * // Count the number of Beneficiaries
     * const count = await prisma.beneficiary.count({
     *   where: {
     *     // ... the filter for the Beneficiaries we want to count
     *   }
     * })
    **/
    count<T extends BeneficiaryCountArgs>(
      args?: Subset<T, BeneficiaryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BeneficiaryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Beneficiary.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BeneficiaryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BeneficiaryAggregateArgs>(args: Subset<T, BeneficiaryAggregateArgs>): Prisma.PrismaPromise<GetBeneficiaryAggregateType<T>>

    /**
     * Group by Beneficiary.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BeneficiaryGroupByArgs} args - Group by arguments.
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
      T extends BeneficiaryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BeneficiaryGroupByArgs['orderBy'] }
        : { orderBy?: BeneficiaryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BeneficiaryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBeneficiaryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Beneficiary model
   */
  readonly fields: BeneficiaryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Beneficiary.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BeneficiaryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    collectionPoints<T extends Beneficiary$collectionPointsArgs<ExtArgs> = {}>(args?: Subset<T, Beneficiary$collectionPointsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollectionPointsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notificationEngagements<T extends Beneficiary$notificationEngagementsArgs<ExtArgs> = {}>(args?: Subset<T, Beneficiary$notificationEngagementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationEngagementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Beneficiary model
   */
  interface BeneficiaryFieldRefs {
    readonly id: FieldRef<"Beneficiary", 'Int'>
    readonly name: FieldRef<"Beneficiary", 'String'>
    readonly email: FieldRef<"Beneficiary", 'String'>
    readonly phone: FieldRef<"Beneficiary", 'String'>
    readonly address: FieldRef<"Beneficiary", 'String'>
    readonly cpf: FieldRef<"Beneficiary", 'String'>
    readonly createdAt: FieldRef<"Beneficiary", 'DateTime'>
    readonly updatedAt: FieldRef<"Beneficiary", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Beneficiary findUnique
   */
  export type BeneficiaryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Beneficiary
     */
    select?: BeneficiarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Beneficiary
     */
    omit?: BeneficiaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BeneficiaryInclude<ExtArgs> | null
    /**
     * Filter, which Beneficiary to fetch.
     */
    where: BeneficiaryWhereUniqueInput
  }

  /**
   * Beneficiary findUniqueOrThrow
   */
  export type BeneficiaryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Beneficiary
     */
    select?: BeneficiarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Beneficiary
     */
    omit?: BeneficiaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BeneficiaryInclude<ExtArgs> | null
    /**
     * Filter, which Beneficiary to fetch.
     */
    where: BeneficiaryWhereUniqueInput
  }

  /**
   * Beneficiary findFirst
   */
  export type BeneficiaryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Beneficiary
     */
    select?: BeneficiarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Beneficiary
     */
    omit?: BeneficiaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BeneficiaryInclude<ExtArgs> | null
    /**
     * Filter, which Beneficiary to fetch.
     */
    where?: BeneficiaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Beneficiaries to fetch.
     */
    orderBy?: BeneficiaryOrderByWithRelationInput | BeneficiaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Beneficiaries.
     */
    cursor?: BeneficiaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Beneficiaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Beneficiaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Beneficiaries.
     */
    distinct?: BeneficiaryScalarFieldEnum | BeneficiaryScalarFieldEnum[]
  }

  /**
   * Beneficiary findFirstOrThrow
   */
  export type BeneficiaryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Beneficiary
     */
    select?: BeneficiarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Beneficiary
     */
    omit?: BeneficiaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BeneficiaryInclude<ExtArgs> | null
    /**
     * Filter, which Beneficiary to fetch.
     */
    where?: BeneficiaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Beneficiaries to fetch.
     */
    orderBy?: BeneficiaryOrderByWithRelationInput | BeneficiaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Beneficiaries.
     */
    cursor?: BeneficiaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Beneficiaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Beneficiaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Beneficiaries.
     */
    distinct?: BeneficiaryScalarFieldEnum | BeneficiaryScalarFieldEnum[]
  }

  /**
   * Beneficiary findMany
   */
  export type BeneficiaryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Beneficiary
     */
    select?: BeneficiarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Beneficiary
     */
    omit?: BeneficiaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BeneficiaryInclude<ExtArgs> | null
    /**
     * Filter, which Beneficiaries to fetch.
     */
    where?: BeneficiaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Beneficiaries to fetch.
     */
    orderBy?: BeneficiaryOrderByWithRelationInput | BeneficiaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Beneficiaries.
     */
    cursor?: BeneficiaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Beneficiaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Beneficiaries.
     */
    skip?: number
    distinct?: BeneficiaryScalarFieldEnum | BeneficiaryScalarFieldEnum[]
  }

  /**
   * Beneficiary create
   */
  export type BeneficiaryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Beneficiary
     */
    select?: BeneficiarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Beneficiary
     */
    omit?: BeneficiaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BeneficiaryInclude<ExtArgs> | null
    /**
     * The data needed to create a Beneficiary.
     */
    data: XOR<BeneficiaryCreateInput, BeneficiaryUncheckedCreateInput>
  }

  /**
   * Beneficiary createMany
   */
  export type BeneficiaryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Beneficiaries.
     */
    data: BeneficiaryCreateManyInput | BeneficiaryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Beneficiary createManyAndReturn
   */
  export type BeneficiaryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Beneficiary
     */
    select?: BeneficiarySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Beneficiary
     */
    omit?: BeneficiaryOmit<ExtArgs> | null
    /**
     * The data used to create many Beneficiaries.
     */
    data: BeneficiaryCreateManyInput | BeneficiaryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Beneficiary update
   */
  export type BeneficiaryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Beneficiary
     */
    select?: BeneficiarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Beneficiary
     */
    omit?: BeneficiaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BeneficiaryInclude<ExtArgs> | null
    /**
     * The data needed to update a Beneficiary.
     */
    data: XOR<BeneficiaryUpdateInput, BeneficiaryUncheckedUpdateInput>
    /**
     * Choose, which Beneficiary to update.
     */
    where: BeneficiaryWhereUniqueInput
  }

  /**
   * Beneficiary updateMany
   */
  export type BeneficiaryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Beneficiaries.
     */
    data: XOR<BeneficiaryUpdateManyMutationInput, BeneficiaryUncheckedUpdateManyInput>
    /**
     * Filter which Beneficiaries to update
     */
    where?: BeneficiaryWhereInput
    /**
     * Limit how many Beneficiaries to update.
     */
    limit?: number
  }

  /**
   * Beneficiary updateManyAndReturn
   */
  export type BeneficiaryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Beneficiary
     */
    select?: BeneficiarySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Beneficiary
     */
    omit?: BeneficiaryOmit<ExtArgs> | null
    /**
     * The data used to update Beneficiaries.
     */
    data: XOR<BeneficiaryUpdateManyMutationInput, BeneficiaryUncheckedUpdateManyInput>
    /**
     * Filter which Beneficiaries to update
     */
    where?: BeneficiaryWhereInput
    /**
     * Limit how many Beneficiaries to update.
     */
    limit?: number
  }

  /**
   * Beneficiary upsert
   */
  export type BeneficiaryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Beneficiary
     */
    select?: BeneficiarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Beneficiary
     */
    omit?: BeneficiaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BeneficiaryInclude<ExtArgs> | null
    /**
     * The filter to search for the Beneficiary to update in case it exists.
     */
    where: BeneficiaryWhereUniqueInput
    /**
     * In case the Beneficiary found by the `where` argument doesn't exist, create a new Beneficiary with this data.
     */
    create: XOR<BeneficiaryCreateInput, BeneficiaryUncheckedCreateInput>
    /**
     * In case the Beneficiary was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BeneficiaryUpdateInput, BeneficiaryUncheckedUpdateInput>
  }

  /**
   * Beneficiary delete
   */
  export type BeneficiaryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Beneficiary
     */
    select?: BeneficiarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Beneficiary
     */
    omit?: BeneficiaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BeneficiaryInclude<ExtArgs> | null
    /**
     * Filter which Beneficiary to delete.
     */
    where: BeneficiaryWhereUniqueInput
  }

  /**
   * Beneficiary deleteMany
   */
  export type BeneficiaryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Beneficiaries to delete
     */
    where?: BeneficiaryWhereInput
    /**
     * Limit how many Beneficiaries to delete.
     */
    limit?: number
  }

  /**
   * Beneficiary.collectionPoints
   */
  export type Beneficiary$collectionPointsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollectionPoints
     */
    select?: CollectionPointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollectionPoints
     */
    omit?: CollectionPointsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionPointsInclude<ExtArgs> | null
    where?: CollectionPointsWhereInput
    orderBy?: CollectionPointsOrderByWithRelationInput | CollectionPointsOrderByWithRelationInput[]
    cursor?: CollectionPointsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CollectionPointsScalarFieldEnum | CollectionPointsScalarFieldEnum[]
  }

  /**
   * Beneficiary.notificationEngagements
   */
  export type Beneficiary$notificationEngagementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationEngagement
     */
    select?: NotificationEngagementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationEngagement
     */
    omit?: NotificationEngagementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationEngagementInclude<ExtArgs> | null
    where?: NotificationEngagementWhereInput
    orderBy?: NotificationEngagementOrderByWithRelationInput | NotificationEngagementOrderByWithRelationInput[]
    cursor?: NotificationEngagementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationEngagementScalarFieldEnum | NotificationEngagementScalarFieldEnum[]
  }

  /**
   * Beneficiary without action
   */
  export type BeneficiaryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Beneficiary
     */
    select?: BeneficiarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Beneficiary
     */
    omit?: BeneficiaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BeneficiaryInclude<ExtArgs> | null
  }


  /**
   * Model CollectionPoints
   */

  export type AggregateCollectionPoints = {
    _count: CollectionPointsCountAggregateOutputType | null
    _avg: CollectionPointsAvgAggregateOutputType | null
    _sum: CollectionPointsSumAggregateOutputType | null
    _min: CollectionPointsMinAggregateOutputType | null
    _max: CollectionPointsMaxAggregateOutputType | null
  }

  export type CollectionPointsAvgAggregateOutputType = {
    id: number | null
    beneficiaryId: number | null
    campaigsAwarenessId: number | null
  }

  export type CollectionPointsSumAggregateOutputType = {
    id: number | null
    beneficiaryId: number | null
    campaigsAwarenessId: number | null
  }

  export type CollectionPointsMinAggregateOutputType = {
    id: number | null
    beneficiaryId: number | null
    campaigsAwarenessId: number | null
    name: string | null
    address: string | null
    phone: string | null
    hoursOfOperetion: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CollectionPointsMaxAggregateOutputType = {
    id: number | null
    beneficiaryId: number | null
    campaigsAwarenessId: number | null
    name: string | null
    address: string | null
    phone: string | null
    hoursOfOperetion: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CollectionPointsCountAggregateOutputType = {
    id: number
    beneficiaryId: number
    campaigsAwarenessId: number
    name: number
    address: number
    phone: number
    hoursOfOperetion: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CollectionPointsAvgAggregateInputType = {
    id?: true
    beneficiaryId?: true
    campaigsAwarenessId?: true
  }

  export type CollectionPointsSumAggregateInputType = {
    id?: true
    beneficiaryId?: true
    campaigsAwarenessId?: true
  }

  export type CollectionPointsMinAggregateInputType = {
    id?: true
    beneficiaryId?: true
    campaigsAwarenessId?: true
    name?: true
    address?: true
    phone?: true
    hoursOfOperetion?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CollectionPointsMaxAggregateInputType = {
    id?: true
    beneficiaryId?: true
    campaigsAwarenessId?: true
    name?: true
    address?: true
    phone?: true
    hoursOfOperetion?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CollectionPointsCountAggregateInputType = {
    id?: true
    beneficiaryId?: true
    campaigsAwarenessId?: true
    name?: true
    address?: true
    phone?: true
    hoursOfOperetion?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CollectionPointsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CollectionPoints to aggregate.
     */
    where?: CollectionPointsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CollectionPoints to fetch.
     */
    orderBy?: CollectionPointsOrderByWithRelationInput | CollectionPointsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CollectionPointsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CollectionPoints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CollectionPoints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CollectionPoints
    **/
    _count?: true | CollectionPointsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CollectionPointsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CollectionPointsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CollectionPointsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CollectionPointsMaxAggregateInputType
  }

  export type GetCollectionPointsAggregateType<T extends CollectionPointsAggregateArgs> = {
        [P in keyof T & keyof AggregateCollectionPoints]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCollectionPoints[P]>
      : GetScalarType<T[P], AggregateCollectionPoints[P]>
  }




  export type CollectionPointsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CollectionPointsWhereInput
    orderBy?: CollectionPointsOrderByWithAggregationInput | CollectionPointsOrderByWithAggregationInput[]
    by: CollectionPointsScalarFieldEnum[] | CollectionPointsScalarFieldEnum
    having?: CollectionPointsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CollectionPointsCountAggregateInputType | true
    _avg?: CollectionPointsAvgAggregateInputType
    _sum?: CollectionPointsSumAggregateInputType
    _min?: CollectionPointsMinAggregateInputType
    _max?: CollectionPointsMaxAggregateInputType
  }

  export type CollectionPointsGroupByOutputType = {
    id: number
    beneficiaryId: number
    campaigsAwarenessId: number
    name: string
    address: string
    phone: string
    hoursOfOperetion: Date
    createdAt: Date
    updatedAt: Date
    _count: CollectionPointsCountAggregateOutputType | null
    _avg: CollectionPointsAvgAggregateOutputType | null
    _sum: CollectionPointsSumAggregateOutputType | null
    _min: CollectionPointsMinAggregateOutputType | null
    _max: CollectionPointsMaxAggregateOutputType | null
  }

  type GetCollectionPointsGroupByPayload<T extends CollectionPointsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CollectionPointsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CollectionPointsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CollectionPointsGroupByOutputType[P]>
            : GetScalarType<T[P], CollectionPointsGroupByOutputType[P]>
        }
      >
    >


  export type CollectionPointsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    beneficiaryId?: boolean
    campaigsAwarenessId?: boolean
    name?: boolean
    address?: boolean
    phone?: boolean
    hoursOfOperetion?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    food?: boolean | CollectionPoints$foodArgs<ExtArgs>
    beneficiary?: boolean | BeneficiaryDefaultArgs<ExtArgs>
    campaigsAwareness?: boolean | CampaigsAwarenessDefaultArgs<ExtArgs>
    _count?: boolean | CollectionPointsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["collectionPoints"]>

  export type CollectionPointsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    beneficiaryId?: boolean
    campaigsAwarenessId?: boolean
    name?: boolean
    address?: boolean
    phone?: boolean
    hoursOfOperetion?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    beneficiary?: boolean | BeneficiaryDefaultArgs<ExtArgs>
    campaigsAwareness?: boolean | CampaigsAwarenessDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["collectionPoints"]>

  export type CollectionPointsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    beneficiaryId?: boolean
    campaigsAwarenessId?: boolean
    name?: boolean
    address?: boolean
    phone?: boolean
    hoursOfOperetion?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    beneficiary?: boolean | BeneficiaryDefaultArgs<ExtArgs>
    campaigsAwareness?: boolean | CampaigsAwarenessDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["collectionPoints"]>

  export type CollectionPointsSelectScalar = {
    id?: boolean
    beneficiaryId?: boolean
    campaigsAwarenessId?: boolean
    name?: boolean
    address?: boolean
    phone?: boolean
    hoursOfOperetion?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CollectionPointsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "beneficiaryId" | "campaigsAwarenessId" | "name" | "address" | "phone" | "hoursOfOperetion" | "createdAt" | "updatedAt", ExtArgs["result"]["collectionPoints"]>
  export type CollectionPointsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    food?: boolean | CollectionPoints$foodArgs<ExtArgs>
    beneficiary?: boolean | BeneficiaryDefaultArgs<ExtArgs>
    campaigsAwareness?: boolean | CampaigsAwarenessDefaultArgs<ExtArgs>
    _count?: boolean | CollectionPointsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CollectionPointsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    beneficiary?: boolean | BeneficiaryDefaultArgs<ExtArgs>
    campaigsAwareness?: boolean | CampaigsAwarenessDefaultArgs<ExtArgs>
  }
  export type CollectionPointsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    beneficiary?: boolean | BeneficiaryDefaultArgs<ExtArgs>
    campaigsAwareness?: boolean | CampaigsAwarenessDefaultArgs<ExtArgs>
  }

  export type $CollectionPointsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CollectionPoints"
    objects: {
      food: Prisma.$FoodPayload<ExtArgs>[]
      beneficiary: Prisma.$BeneficiaryPayload<ExtArgs>
      campaigsAwareness: Prisma.$CampaigsAwarenessPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      beneficiaryId: number
      campaigsAwarenessId: number
      name: string
      address: string
      phone: string
      hoursOfOperetion: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["collectionPoints"]>
    composites: {}
  }

  type CollectionPointsGetPayload<S extends boolean | null | undefined | CollectionPointsDefaultArgs> = $Result.GetResult<Prisma.$CollectionPointsPayload, S>

  type CollectionPointsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CollectionPointsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CollectionPointsCountAggregateInputType | true
    }

  export interface CollectionPointsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CollectionPoints'], meta: { name: 'CollectionPoints' } }
    /**
     * Find zero or one CollectionPoints that matches the filter.
     * @param {CollectionPointsFindUniqueArgs} args - Arguments to find a CollectionPoints
     * @example
     * // Get one CollectionPoints
     * const collectionPoints = await prisma.collectionPoints.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CollectionPointsFindUniqueArgs>(args: SelectSubset<T, CollectionPointsFindUniqueArgs<ExtArgs>>): Prisma__CollectionPointsClient<$Result.GetResult<Prisma.$CollectionPointsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CollectionPoints that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CollectionPointsFindUniqueOrThrowArgs} args - Arguments to find a CollectionPoints
     * @example
     * // Get one CollectionPoints
     * const collectionPoints = await prisma.collectionPoints.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CollectionPointsFindUniqueOrThrowArgs>(args: SelectSubset<T, CollectionPointsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CollectionPointsClient<$Result.GetResult<Prisma.$CollectionPointsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CollectionPoints that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionPointsFindFirstArgs} args - Arguments to find a CollectionPoints
     * @example
     * // Get one CollectionPoints
     * const collectionPoints = await prisma.collectionPoints.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CollectionPointsFindFirstArgs>(args?: SelectSubset<T, CollectionPointsFindFirstArgs<ExtArgs>>): Prisma__CollectionPointsClient<$Result.GetResult<Prisma.$CollectionPointsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CollectionPoints that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionPointsFindFirstOrThrowArgs} args - Arguments to find a CollectionPoints
     * @example
     * // Get one CollectionPoints
     * const collectionPoints = await prisma.collectionPoints.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CollectionPointsFindFirstOrThrowArgs>(args?: SelectSubset<T, CollectionPointsFindFirstOrThrowArgs<ExtArgs>>): Prisma__CollectionPointsClient<$Result.GetResult<Prisma.$CollectionPointsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CollectionPoints that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionPointsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CollectionPoints
     * const collectionPoints = await prisma.collectionPoints.findMany()
     * 
     * // Get first 10 CollectionPoints
     * const collectionPoints = await prisma.collectionPoints.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const collectionPointsWithIdOnly = await prisma.collectionPoints.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CollectionPointsFindManyArgs>(args?: SelectSubset<T, CollectionPointsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollectionPointsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CollectionPoints.
     * @param {CollectionPointsCreateArgs} args - Arguments to create a CollectionPoints.
     * @example
     * // Create one CollectionPoints
     * const CollectionPoints = await prisma.collectionPoints.create({
     *   data: {
     *     // ... data to create a CollectionPoints
     *   }
     * })
     * 
     */
    create<T extends CollectionPointsCreateArgs>(args: SelectSubset<T, CollectionPointsCreateArgs<ExtArgs>>): Prisma__CollectionPointsClient<$Result.GetResult<Prisma.$CollectionPointsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CollectionPoints.
     * @param {CollectionPointsCreateManyArgs} args - Arguments to create many CollectionPoints.
     * @example
     * // Create many CollectionPoints
     * const collectionPoints = await prisma.collectionPoints.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CollectionPointsCreateManyArgs>(args?: SelectSubset<T, CollectionPointsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CollectionPoints and returns the data saved in the database.
     * @param {CollectionPointsCreateManyAndReturnArgs} args - Arguments to create many CollectionPoints.
     * @example
     * // Create many CollectionPoints
     * const collectionPoints = await prisma.collectionPoints.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CollectionPoints and only return the `id`
     * const collectionPointsWithIdOnly = await prisma.collectionPoints.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CollectionPointsCreateManyAndReturnArgs>(args?: SelectSubset<T, CollectionPointsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollectionPointsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CollectionPoints.
     * @param {CollectionPointsDeleteArgs} args - Arguments to delete one CollectionPoints.
     * @example
     * // Delete one CollectionPoints
     * const CollectionPoints = await prisma.collectionPoints.delete({
     *   where: {
     *     // ... filter to delete one CollectionPoints
     *   }
     * })
     * 
     */
    delete<T extends CollectionPointsDeleteArgs>(args: SelectSubset<T, CollectionPointsDeleteArgs<ExtArgs>>): Prisma__CollectionPointsClient<$Result.GetResult<Prisma.$CollectionPointsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CollectionPoints.
     * @param {CollectionPointsUpdateArgs} args - Arguments to update one CollectionPoints.
     * @example
     * // Update one CollectionPoints
     * const collectionPoints = await prisma.collectionPoints.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CollectionPointsUpdateArgs>(args: SelectSubset<T, CollectionPointsUpdateArgs<ExtArgs>>): Prisma__CollectionPointsClient<$Result.GetResult<Prisma.$CollectionPointsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CollectionPoints.
     * @param {CollectionPointsDeleteManyArgs} args - Arguments to filter CollectionPoints to delete.
     * @example
     * // Delete a few CollectionPoints
     * const { count } = await prisma.collectionPoints.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CollectionPointsDeleteManyArgs>(args?: SelectSubset<T, CollectionPointsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CollectionPoints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionPointsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CollectionPoints
     * const collectionPoints = await prisma.collectionPoints.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CollectionPointsUpdateManyArgs>(args: SelectSubset<T, CollectionPointsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CollectionPoints and returns the data updated in the database.
     * @param {CollectionPointsUpdateManyAndReturnArgs} args - Arguments to update many CollectionPoints.
     * @example
     * // Update many CollectionPoints
     * const collectionPoints = await prisma.collectionPoints.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CollectionPoints and only return the `id`
     * const collectionPointsWithIdOnly = await prisma.collectionPoints.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CollectionPointsUpdateManyAndReturnArgs>(args: SelectSubset<T, CollectionPointsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollectionPointsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CollectionPoints.
     * @param {CollectionPointsUpsertArgs} args - Arguments to update or create a CollectionPoints.
     * @example
     * // Update or create a CollectionPoints
     * const collectionPoints = await prisma.collectionPoints.upsert({
     *   create: {
     *     // ... data to create a CollectionPoints
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CollectionPoints we want to update
     *   }
     * })
     */
    upsert<T extends CollectionPointsUpsertArgs>(args: SelectSubset<T, CollectionPointsUpsertArgs<ExtArgs>>): Prisma__CollectionPointsClient<$Result.GetResult<Prisma.$CollectionPointsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CollectionPoints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionPointsCountArgs} args - Arguments to filter CollectionPoints to count.
     * @example
     * // Count the number of CollectionPoints
     * const count = await prisma.collectionPoints.count({
     *   where: {
     *     // ... the filter for the CollectionPoints we want to count
     *   }
     * })
    **/
    count<T extends CollectionPointsCountArgs>(
      args?: Subset<T, CollectionPointsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CollectionPointsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CollectionPoints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionPointsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CollectionPointsAggregateArgs>(args: Subset<T, CollectionPointsAggregateArgs>): Prisma.PrismaPromise<GetCollectionPointsAggregateType<T>>

    /**
     * Group by CollectionPoints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionPointsGroupByArgs} args - Group by arguments.
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
      T extends CollectionPointsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CollectionPointsGroupByArgs['orderBy'] }
        : { orderBy?: CollectionPointsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CollectionPointsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCollectionPointsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CollectionPoints model
   */
  readonly fields: CollectionPointsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CollectionPoints.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CollectionPointsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    food<T extends CollectionPoints$foodArgs<ExtArgs> = {}>(args?: Subset<T, CollectionPoints$foodArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    beneficiary<T extends BeneficiaryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BeneficiaryDefaultArgs<ExtArgs>>): Prisma__BeneficiaryClient<$Result.GetResult<Prisma.$BeneficiaryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    campaigsAwareness<T extends CampaigsAwarenessDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CampaigsAwarenessDefaultArgs<ExtArgs>>): Prisma__CampaigsAwarenessClient<$Result.GetResult<Prisma.$CampaigsAwarenessPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the CollectionPoints model
   */
  interface CollectionPointsFieldRefs {
    readonly id: FieldRef<"CollectionPoints", 'Int'>
    readonly beneficiaryId: FieldRef<"CollectionPoints", 'Int'>
    readonly campaigsAwarenessId: FieldRef<"CollectionPoints", 'Int'>
    readonly name: FieldRef<"CollectionPoints", 'String'>
    readonly address: FieldRef<"CollectionPoints", 'String'>
    readonly phone: FieldRef<"CollectionPoints", 'String'>
    readonly hoursOfOperetion: FieldRef<"CollectionPoints", 'DateTime'>
    readonly createdAt: FieldRef<"CollectionPoints", 'DateTime'>
    readonly updatedAt: FieldRef<"CollectionPoints", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CollectionPoints findUnique
   */
  export type CollectionPointsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollectionPoints
     */
    select?: CollectionPointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollectionPoints
     */
    omit?: CollectionPointsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionPointsInclude<ExtArgs> | null
    /**
     * Filter, which CollectionPoints to fetch.
     */
    where: CollectionPointsWhereUniqueInput
  }

  /**
   * CollectionPoints findUniqueOrThrow
   */
  export type CollectionPointsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollectionPoints
     */
    select?: CollectionPointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollectionPoints
     */
    omit?: CollectionPointsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionPointsInclude<ExtArgs> | null
    /**
     * Filter, which CollectionPoints to fetch.
     */
    where: CollectionPointsWhereUniqueInput
  }

  /**
   * CollectionPoints findFirst
   */
  export type CollectionPointsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollectionPoints
     */
    select?: CollectionPointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollectionPoints
     */
    omit?: CollectionPointsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionPointsInclude<ExtArgs> | null
    /**
     * Filter, which CollectionPoints to fetch.
     */
    where?: CollectionPointsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CollectionPoints to fetch.
     */
    orderBy?: CollectionPointsOrderByWithRelationInput | CollectionPointsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CollectionPoints.
     */
    cursor?: CollectionPointsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CollectionPoints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CollectionPoints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CollectionPoints.
     */
    distinct?: CollectionPointsScalarFieldEnum | CollectionPointsScalarFieldEnum[]
  }

  /**
   * CollectionPoints findFirstOrThrow
   */
  export type CollectionPointsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollectionPoints
     */
    select?: CollectionPointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollectionPoints
     */
    omit?: CollectionPointsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionPointsInclude<ExtArgs> | null
    /**
     * Filter, which CollectionPoints to fetch.
     */
    where?: CollectionPointsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CollectionPoints to fetch.
     */
    orderBy?: CollectionPointsOrderByWithRelationInput | CollectionPointsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CollectionPoints.
     */
    cursor?: CollectionPointsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CollectionPoints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CollectionPoints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CollectionPoints.
     */
    distinct?: CollectionPointsScalarFieldEnum | CollectionPointsScalarFieldEnum[]
  }

  /**
   * CollectionPoints findMany
   */
  export type CollectionPointsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollectionPoints
     */
    select?: CollectionPointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollectionPoints
     */
    omit?: CollectionPointsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionPointsInclude<ExtArgs> | null
    /**
     * Filter, which CollectionPoints to fetch.
     */
    where?: CollectionPointsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CollectionPoints to fetch.
     */
    orderBy?: CollectionPointsOrderByWithRelationInput | CollectionPointsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CollectionPoints.
     */
    cursor?: CollectionPointsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CollectionPoints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CollectionPoints.
     */
    skip?: number
    distinct?: CollectionPointsScalarFieldEnum | CollectionPointsScalarFieldEnum[]
  }

  /**
   * CollectionPoints create
   */
  export type CollectionPointsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollectionPoints
     */
    select?: CollectionPointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollectionPoints
     */
    omit?: CollectionPointsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionPointsInclude<ExtArgs> | null
    /**
     * The data needed to create a CollectionPoints.
     */
    data: XOR<CollectionPointsCreateInput, CollectionPointsUncheckedCreateInput>
  }

  /**
   * CollectionPoints createMany
   */
  export type CollectionPointsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CollectionPoints.
     */
    data: CollectionPointsCreateManyInput | CollectionPointsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CollectionPoints createManyAndReturn
   */
  export type CollectionPointsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollectionPoints
     */
    select?: CollectionPointsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CollectionPoints
     */
    omit?: CollectionPointsOmit<ExtArgs> | null
    /**
     * The data used to create many CollectionPoints.
     */
    data: CollectionPointsCreateManyInput | CollectionPointsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionPointsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CollectionPoints update
   */
  export type CollectionPointsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollectionPoints
     */
    select?: CollectionPointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollectionPoints
     */
    omit?: CollectionPointsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionPointsInclude<ExtArgs> | null
    /**
     * The data needed to update a CollectionPoints.
     */
    data: XOR<CollectionPointsUpdateInput, CollectionPointsUncheckedUpdateInput>
    /**
     * Choose, which CollectionPoints to update.
     */
    where: CollectionPointsWhereUniqueInput
  }

  /**
   * CollectionPoints updateMany
   */
  export type CollectionPointsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CollectionPoints.
     */
    data: XOR<CollectionPointsUpdateManyMutationInput, CollectionPointsUncheckedUpdateManyInput>
    /**
     * Filter which CollectionPoints to update
     */
    where?: CollectionPointsWhereInput
    /**
     * Limit how many CollectionPoints to update.
     */
    limit?: number
  }

  /**
   * CollectionPoints updateManyAndReturn
   */
  export type CollectionPointsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollectionPoints
     */
    select?: CollectionPointsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CollectionPoints
     */
    omit?: CollectionPointsOmit<ExtArgs> | null
    /**
     * The data used to update CollectionPoints.
     */
    data: XOR<CollectionPointsUpdateManyMutationInput, CollectionPointsUncheckedUpdateManyInput>
    /**
     * Filter which CollectionPoints to update
     */
    where?: CollectionPointsWhereInput
    /**
     * Limit how many CollectionPoints to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionPointsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CollectionPoints upsert
   */
  export type CollectionPointsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollectionPoints
     */
    select?: CollectionPointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollectionPoints
     */
    omit?: CollectionPointsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionPointsInclude<ExtArgs> | null
    /**
     * The filter to search for the CollectionPoints to update in case it exists.
     */
    where: CollectionPointsWhereUniqueInput
    /**
     * In case the CollectionPoints found by the `where` argument doesn't exist, create a new CollectionPoints with this data.
     */
    create: XOR<CollectionPointsCreateInput, CollectionPointsUncheckedCreateInput>
    /**
     * In case the CollectionPoints was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CollectionPointsUpdateInput, CollectionPointsUncheckedUpdateInput>
  }

  /**
   * CollectionPoints delete
   */
  export type CollectionPointsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollectionPoints
     */
    select?: CollectionPointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollectionPoints
     */
    omit?: CollectionPointsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionPointsInclude<ExtArgs> | null
    /**
     * Filter which CollectionPoints to delete.
     */
    where: CollectionPointsWhereUniqueInput
  }

  /**
   * CollectionPoints deleteMany
   */
  export type CollectionPointsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CollectionPoints to delete
     */
    where?: CollectionPointsWhereInput
    /**
     * Limit how many CollectionPoints to delete.
     */
    limit?: number
  }

  /**
   * CollectionPoints.food
   */
  export type CollectionPoints$foodArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food
     */
    select?: FoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Food
     */
    omit?: FoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodInclude<ExtArgs> | null
    where?: FoodWhereInput
    orderBy?: FoodOrderByWithRelationInput | FoodOrderByWithRelationInput[]
    cursor?: FoodWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FoodScalarFieldEnum | FoodScalarFieldEnum[]
  }

  /**
   * CollectionPoints without action
   */
  export type CollectionPointsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollectionPoints
     */
    select?: CollectionPointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollectionPoints
     */
    omit?: CollectionPointsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionPointsInclude<ExtArgs> | null
  }


  /**
   * Model CampaigsAwareness
   */

  export type AggregateCampaigsAwareness = {
    _count: CampaigsAwarenessCountAggregateOutputType | null
    _avg: CampaigsAwarenessAvgAggregateOutputType | null
    _sum: CampaigsAwarenessSumAggregateOutputType | null
    _min: CampaigsAwarenessMinAggregateOutputType | null
    _max: CampaigsAwarenessMaxAggregateOutputType | null
  }

  export type CampaigsAwarenessAvgAggregateOutputType = {
    id: number | null
  }

  export type CampaigsAwarenessSumAggregateOutputType = {
    id: number | null
  }

  export type CampaigsAwarenessMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    startDate: Date | null
    endDate: Date | null
    loction: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CampaigsAwarenessMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    startDate: Date | null
    endDate: Date | null
    loction: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CampaigsAwarenessCountAggregateOutputType = {
    id: number
    name: number
    description: number
    startDate: number
    endDate: number
    loction: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CampaigsAwarenessAvgAggregateInputType = {
    id?: true
  }

  export type CampaigsAwarenessSumAggregateInputType = {
    id?: true
  }

  export type CampaigsAwarenessMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    startDate?: true
    endDate?: true
    loction?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CampaigsAwarenessMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    startDate?: true
    endDate?: true
    loction?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CampaigsAwarenessCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    startDate?: true
    endDate?: true
    loction?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CampaigsAwarenessAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CampaigsAwareness to aggregate.
     */
    where?: CampaigsAwarenessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CampaigsAwarenesses to fetch.
     */
    orderBy?: CampaigsAwarenessOrderByWithRelationInput | CampaigsAwarenessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CampaigsAwarenessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CampaigsAwarenesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CampaigsAwarenesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CampaigsAwarenesses
    **/
    _count?: true | CampaigsAwarenessCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CampaigsAwarenessAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CampaigsAwarenessSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CampaigsAwarenessMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CampaigsAwarenessMaxAggregateInputType
  }

  export type GetCampaigsAwarenessAggregateType<T extends CampaigsAwarenessAggregateArgs> = {
        [P in keyof T & keyof AggregateCampaigsAwareness]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCampaigsAwareness[P]>
      : GetScalarType<T[P], AggregateCampaigsAwareness[P]>
  }




  export type CampaigsAwarenessGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CampaigsAwarenessWhereInput
    orderBy?: CampaigsAwarenessOrderByWithAggregationInput | CampaigsAwarenessOrderByWithAggregationInput[]
    by: CampaigsAwarenessScalarFieldEnum[] | CampaigsAwarenessScalarFieldEnum
    having?: CampaigsAwarenessScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CampaigsAwarenessCountAggregateInputType | true
    _avg?: CampaigsAwarenessAvgAggregateInputType
    _sum?: CampaigsAwarenessSumAggregateInputType
    _min?: CampaigsAwarenessMinAggregateInputType
    _max?: CampaigsAwarenessMaxAggregateInputType
  }

  export type CampaigsAwarenessGroupByOutputType = {
    id: number
    name: string
    description: string
    startDate: Date
    endDate: Date
    loction: string
    createdAt: Date
    updatedAt: Date
    _count: CampaigsAwarenessCountAggregateOutputType | null
    _avg: CampaigsAwarenessAvgAggregateOutputType | null
    _sum: CampaigsAwarenessSumAggregateOutputType | null
    _min: CampaigsAwarenessMinAggregateOutputType | null
    _max: CampaigsAwarenessMaxAggregateOutputType | null
  }

  type GetCampaigsAwarenessGroupByPayload<T extends CampaigsAwarenessGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CampaigsAwarenessGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CampaigsAwarenessGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CampaigsAwarenessGroupByOutputType[P]>
            : GetScalarType<T[P], CampaigsAwarenessGroupByOutputType[P]>
        }
      >
    >


  export type CampaigsAwarenessSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    startDate?: boolean
    endDate?: boolean
    loction?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    food?: boolean | CampaigsAwareness$foodArgs<ExtArgs>
    collectionPoints?: boolean | CampaigsAwareness$collectionPointsArgs<ExtArgs>
    _count?: boolean | CampaigsAwarenessCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["campaigsAwareness"]>

  export type CampaigsAwarenessSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    startDate?: boolean
    endDate?: boolean
    loction?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["campaigsAwareness"]>

  export type CampaigsAwarenessSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    startDate?: boolean
    endDate?: boolean
    loction?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["campaigsAwareness"]>

  export type CampaigsAwarenessSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    startDate?: boolean
    endDate?: boolean
    loction?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CampaigsAwarenessOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "startDate" | "endDate" | "loction" | "createdAt" | "updatedAt", ExtArgs["result"]["campaigsAwareness"]>
  export type CampaigsAwarenessInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    food?: boolean | CampaigsAwareness$foodArgs<ExtArgs>
    collectionPoints?: boolean | CampaigsAwareness$collectionPointsArgs<ExtArgs>
    _count?: boolean | CampaigsAwarenessCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CampaigsAwarenessIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CampaigsAwarenessIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CampaigsAwarenessPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CampaigsAwareness"
    objects: {
      food: Prisma.$FoodPayload<ExtArgs>[]
      collectionPoints: Prisma.$CollectionPointsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string
      startDate: Date
      endDate: Date
      loction: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["campaigsAwareness"]>
    composites: {}
  }

  type CampaigsAwarenessGetPayload<S extends boolean | null | undefined | CampaigsAwarenessDefaultArgs> = $Result.GetResult<Prisma.$CampaigsAwarenessPayload, S>

  type CampaigsAwarenessCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CampaigsAwarenessFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CampaigsAwarenessCountAggregateInputType | true
    }

  export interface CampaigsAwarenessDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CampaigsAwareness'], meta: { name: 'CampaigsAwareness' } }
    /**
     * Find zero or one CampaigsAwareness that matches the filter.
     * @param {CampaigsAwarenessFindUniqueArgs} args - Arguments to find a CampaigsAwareness
     * @example
     * // Get one CampaigsAwareness
     * const campaigsAwareness = await prisma.campaigsAwareness.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CampaigsAwarenessFindUniqueArgs>(args: SelectSubset<T, CampaigsAwarenessFindUniqueArgs<ExtArgs>>): Prisma__CampaigsAwarenessClient<$Result.GetResult<Prisma.$CampaigsAwarenessPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CampaigsAwareness that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CampaigsAwarenessFindUniqueOrThrowArgs} args - Arguments to find a CampaigsAwareness
     * @example
     * // Get one CampaigsAwareness
     * const campaigsAwareness = await prisma.campaigsAwareness.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CampaigsAwarenessFindUniqueOrThrowArgs>(args: SelectSubset<T, CampaigsAwarenessFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CampaigsAwarenessClient<$Result.GetResult<Prisma.$CampaigsAwarenessPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CampaigsAwareness that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaigsAwarenessFindFirstArgs} args - Arguments to find a CampaigsAwareness
     * @example
     * // Get one CampaigsAwareness
     * const campaigsAwareness = await prisma.campaigsAwareness.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CampaigsAwarenessFindFirstArgs>(args?: SelectSubset<T, CampaigsAwarenessFindFirstArgs<ExtArgs>>): Prisma__CampaigsAwarenessClient<$Result.GetResult<Prisma.$CampaigsAwarenessPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CampaigsAwareness that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaigsAwarenessFindFirstOrThrowArgs} args - Arguments to find a CampaigsAwareness
     * @example
     * // Get one CampaigsAwareness
     * const campaigsAwareness = await prisma.campaigsAwareness.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CampaigsAwarenessFindFirstOrThrowArgs>(args?: SelectSubset<T, CampaigsAwarenessFindFirstOrThrowArgs<ExtArgs>>): Prisma__CampaigsAwarenessClient<$Result.GetResult<Prisma.$CampaigsAwarenessPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CampaigsAwarenesses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaigsAwarenessFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CampaigsAwarenesses
     * const campaigsAwarenesses = await prisma.campaigsAwareness.findMany()
     * 
     * // Get first 10 CampaigsAwarenesses
     * const campaigsAwarenesses = await prisma.campaigsAwareness.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const campaigsAwarenessWithIdOnly = await prisma.campaigsAwareness.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CampaigsAwarenessFindManyArgs>(args?: SelectSubset<T, CampaigsAwarenessFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaigsAwarenessPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CampaigsAwareness.
     * @param {CampaigsAwarenessCreateArgs} args - Arguments to create a CampaigsAwareness.
     * @example
     * // Create one CampaigsAwareness
     * const CampaigsAwareness = await prisma.campaigsAwareness.create({
     *   data: {
     *     // ... data to create a CampaigsAwareness
     *   }
     * })
     * 
     */
    create<T extends CampaigsAwarenessCreateArgs>(args: SelectSubset<T, CampaigsAwarenessCreateArgs<ExtArgs>>): Prisma__CampaigsAwarenessClient<$Result.GetResult<Prisma.$CampaigsAwarenessPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CampaigsAwarenesses.
     * @param {CampaigsAwarenessCreateManyArgs} args - Arguments to create many CampaigsAwarenesses.
     * @example
     * // Create many CampaigsAwarenesses
     * const campaigsAwareness = await prisma.campaigsAwareness.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CampaigsAwarenessCreateManyArgs>(args?: SelectSubset<T, CampaigsAwarenessCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CampaigsAwarenesses and returns the data saved in the database.
     * @param {CampaigsAwarenessCreateManyAndReturnArgs} args - Arguments to create many CampaigsAwarenesses.
     * @example
     * // Create many CampaigsAwarenesses
     * const campaigsAwareness = await prisma.campaigsAwareness.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CampaigsAwarenesses and only return the `id`
     * const campaigsAwarenessWithIdOnly = await prisma.campaigsAwareness.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CampaigsAwarenessCreateManyAndReturnArgs>(args?: SelectSubset<T, CampaigsAwarenessCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaigsAwarenessPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CampaigsAwareness.
     * @param {CampaigsAwarenessDeleteArgs} args - Arguments to delete one CampaigsAwareness.
     * @example
     * // Delete one CampaigsAwareness
     * const CampaigsAwareness = await prisma.campaigsAwareness.delete({
     *   where: {
     *     // ... filter to delete one CampaigsAwareness
     *   }
     * })
     * 
     */
    delete<T extends CampaigsAwarenessDeleteArgs>(args: SelectSubset<T, CampaigsAwarenessDeleteArgs<ExtArgs>>): Prisma__CampaigsAwarenessClient<$Result.GetResult<Prisma.$CampaigsAwarenessPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CampaigsAwareness.
     * @param {CampaigsAwarenessUpdateArgs} args - Arguments to update one CampaigsAwareness.
     * @example
     * // Update one CampaigsAwareness
     * const campaigsAwareness = await prisma.campaigsAwareness.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CampaigsAwarenessUpdateArgs>(args: SelectSubset<T, CampaigsAwarenessUpdateArgs<ExtArgs>>): Prisma__CampaigsAwarenessClient<$Result.GetResult<Prisma.$CampaigsAwarenessPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CampaigsAwarenesses.
     * @param {CampaigsAwarenessDeleteManyArgs} args - Arguments to filter CampaigsAwarenesses to delete.
     * @example
     * // Delete a few CampaigsAwarenesses
     * const { count } = await prisma.campaigsAwareness.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CampaigsAwarenessDeleteManyArgs>(args?: SelectSubset<T, CampaigsAwarenessDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CampaigsAwarenesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaigsAwarenessUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CampaigsAwarenesses
     * const campaigsAwareness = await prisma.campaigsAwareness.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CampaigsAwarenessUpdateManyArgs>(args: SelectSubset<T, CampaigsAwarenessUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CampaigsAwarenesses and returns the data updated in the database.
     * @param {CampaigsAwarenessUpdateManyAndReturnArgs} args - Arguments to update many CampaigsAwarenesses.
     * @example
     * // Update many CampaigsAwarenesses
     * const campaigsAwareness = await prisma.campaigsAwareness.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CampaigsAwarenesses and only return the `id`
     * const campaigsAwarenessWithIdOnly = await prisma.campaigsAwareness.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CampaigsAwarenessUpdateManyAndReturnArgs>(args: SelectSubset<T, CampaigsAwarenessUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaigsAwarenessPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CampaigsAwareness.
     * @param {CampaigsAwarenessUpsertArgs} args - Arguments to update or create a CampaigsAwareness.
     * @example
     * // Update or create a CampaigsAwareness
     * const campaigsAwareness = await prisma.campaigsAwareness.upsert({
     *   create: {
     *     // ... data to create a CampaigsAwareness
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CampaigsAwareness we want to update
     *   }
     * })
     */
    upsert<T extends CampaigsAwarenessUpsertArgs>(args: SelectSubset<T, CampaigsAwarenessUpsertArgs<ExtArgs>>): Prisma__CampaigsAwarenessClient<$Result.GetResult<Prisma.$CampaigsAwarenessPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CampaigsAwarenesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaigsAwarenessCountArgs} args - Arguments to filter CampaigsAwarenesses to count.
     * @example
     * // Count the number of CampaigsAwarenesses
     * const count = await prisma.campaigsAwareness.count({
     *   where: {
     *     // ... the filter for the CampaigsAwarenesses we want to count
     *   }
     * })
    **/
    count<T extends CampaigsAwarenessCountArgs>(
      args?: Subset<T, CampaigsAwarenessCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CampaigsAwarenessCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CampaigsAwareness.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaigsAwarenessAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CampaigsAwarenessAggregateArgs>(args: Subset<T, CampaigsAwarenessAggregateArgs>): Prisma.PrismaPromise<GetCampaigsAwarenessAggregateType<T>>

    /**
     * Group by CampaigsAwareness.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaigsAwarenessGroupByArgs} args - Group by arguments.
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
      T extends CampaigsAwarenessGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CampaigsAwarenessGroupByArgs['orderBy'] }
        : { orderBy?: CampaigsAwarenessGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CampaigsAwarenessGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCampaigsAwarenessGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CampaigsAwareness model
   */
  readonly fields: CampaigsAwarenessFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CampaigsAwareness.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CampaigsAwarenessClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    food<T extends CampaigsAwareness$foodArgs<ExtArgs> = {}>(args?: Subset<T, CampaigsAwareness$foodArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    collectionPoints<T extends CampaigsAwareness$collectionPointsArgs<ExtArgs> = {}>(args?: Subset<T, CampaigsAwareness$collectionPointsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollectionPointsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the CampaigsAwareness model
   */
  interface CampaigsAwarenessFieldRefs {
    readonly id: FieldRef<"CampaigsAwareness", 'Int'>
    readonly name: FieldRef<"CampaigsAwareness", 'String'>
    readonly description: FieldRef<"CampaigsAwareness", 'String'>
    readonly startDate: FieldRef<"CampaigsAwareness", 'DateTime'>
    readonly endDate: FieldRef<"CampaigsAwareness", 'DateTime'>
    readonly loction: FieldRef<"CampaigsAwareness", 'String'>
    readonly createdAt: FieldRef<"CampaigsAwareness", 'DateTime'>
    readonly updatedAt: FieldRef<"CampaigsAwareness", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CampaigsAwareness findUnique
   */
  export type CampaigsAwarenessFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaigsAwareness
     */
    select?: CampaigsAwarenessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaigsAwareness
     */
    omit?: CampaigsAwarenessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaigsAwarenessInclude<ExtArgs> | null
    /**
     * Filter, which CampaigsAwareness to fetch.
     */
    where: CampaigsAwarenessWhereUniqueInput
  }

  /**
   * CampaigsAwareness findUniqueOrThrow
   */
  export type CampaigsAwarenessFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaigsAwareness
     */
    select?: CampaigsAwarenessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaigsAwareness
     */
    omit?: CampaigsAwarenessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaigsAwarenessInclude<ExtArgs> | null
    /**
     * Filter, which CampaigsAwareness to fetch.
     */
    where: CampaigsAwarenessWhereUniqueInput
  }

  /**
   * CampaigsAwareness findFirst
   */
  export type CampaigsAwarenessFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaigsAwareness
     */
    select?: CampaigsAwarenessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaigsAwareness
     */
    omit?: CampaigsAwarenessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaigsAwarenessInclude<ExtArgs> | null
    /**
     * Filter, which CampaigsAwareness to fetch.
     */
    where?: CampaigsAwarenessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CampaigsAwarenesses to fetch.
     */
    orderBy?: CampaigsAwarenessOrderByWithRelationInput | CampaigsAwarenessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CampaigsAwarenesses.
     */
    cursor?: CampaigsAwarenessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CampaigsAwarenesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CampaigsAwarenesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CampaigsAwarenesses.
     */
    distinct?: CampaigsAwarenessScalarFieldEnum | CampaigsAwarenessScalarFieldEnum[]
  }

  /**
   * CampaigsAwareness findFirstOrThrow
   */
  export type CampaigsAwarenessFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaigsAwareness
     */
    select?: CampaigsAwarenessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaigsAwareness
     */
    omit?: CampaigsAwarenessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaigsAwarenessInclude<ExtArgs> | null
    /**
     * Filter, which CampaigsAwareness to fetch.
     */
    where?: CampaigsAwarenessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CampaigsAwarenesses to fetch.
     */
    orderBy?: CampaigsAwarenessOrderByWithRelationInput | CampaigsAwarenessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CampaigsAwarenesses.
     */
    cursor?: CampaigsAwarenessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CampaigsAwarenesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CampaigsAwarenesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CampaigsAwarenesses.
     */
    distinct?: CampaigsAwarenessScalarFieldEnum | CampaigsAwarenessScalarFieldEnum[]
  }

  /**
   * CampaigsAwareness findMany
   */
  export type CampaigsAwarenessFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaigsAwareness
     */
    select?: CampaigsAwarenessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaigsAwareness
     */
    omit?: CampaigsAwarenessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaigsAwarenessInclude<ExtArgs> | null
    /**
     * Filter, which CampaigsAwarenesses to fetch.
     */
    where?: CampaigsAwarenessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CampaigsAwarenesses to fetch.
     */
    orderBy?: CampaigsAwarenessOrderByWithRelationInput | CampaigsAwarenessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CampaigsAwarenesses.
     */
    cursor?: CampaigsAwarenessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CampaigsAwarenesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CampaigsAwarenesses.
     */
    skip?: number
    distinct?: CampaigsAwarenessScalarFieldEnum | CampaigsAwarenessScalarFieldEnum[]
  }

  /**
   * CampaigsAwareness create
   */
  export type CampaigsAwarenessCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaigsAwareness
     */
    select?: CampaigsAwarenessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaigsAwareness
     */
    omit?: CampaigsAwarenessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaigsAwarenessInclude<ExtArgs> | null
    /**
     * The data needed to create a CampaigsAwareness.
     */
    data: XOR<CampaigsAwarenessCreateInput, CampaigsAwarenessUncheckedCreateInput>
  }

  /**
   * CampaigsAwareness createMany
   */
  export type CampaigsAwarenessCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CampaigsAwarenesses.
     */
    data: CampaigsAwarenessCreateManyInput | CampaigsAwarenessCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CampaigsAwareness createManyAndReturn
   */
  export type CampaigsAwarenessCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaigsAwareness
     */
    select?: CampaigsAwarenessSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CampaigsAwareness
     */
    omit?: CampaigsAwarenessOmit<ExtArgs> | null
    /**
     * The data used to create many CampaigsAwarenesses.
     */
    data: CampaigsAwarenessCreateManyInput | CampaigsAwarenessCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CampaigsAwareness update
   */
  export type CampaigsAwarenessUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaigsAwareness
     */
    select?: CampaigsAwarenessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaigsAwareness
     */
    omit?: CampaigsAwarenessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaigsAwarenessInclude<ExtArgs> | null
    /**
     * The data needed to update a CampaigsAwareness.
     */
    data: XOR<CampaigsAwarenessUpdateInput, CampaigsAwarenessUncheckedUpdateInput>
    /**
     * Choose, which CampaigsAwareness to update.
     */
    where: CampaigsAwarenessWhereUniqueInput
  }

  /**
   * CampaigsAwareness updateMany
   */
  export type CampaigsAwarenessUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CampaigsAwarenesses.
     */
    data: XOR<CampaigsAwarenessUpdateManyMutationInput, CampaigsAwarenessUncheckedUpdateManyInput>
    /**
     * Filter which CampaigsAwarenesses to update
     */
    where?: CampaigsAwarenessWhereInput
    /**
     * Limit how many CampaigsAwarenesses to update.
     */
    limit?: number
  }

  /**
   * CampaigsAwareness updateManyAndReturn
   */
  export type CampaigsAwarenessUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaigsAwareness
     */
    select?: CampaigsAwarenessSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CampaigsAwareness
     */
    omit?: CampaigsAwarenessOmit<ExtArgs> | null
    /**
     * The data used to update CampaigsAwarenesses.
     */
    data: XOR<CampaigsAwarenessUpdateManyMutationInput, CampaigsAwarenessUncheckedUpdateManyInput>
    /**
     * Filter which CampaigsAwarenesses to update
     */
    where?: CampaigsAwarenessWhereInput
    /**
     * Limit how many CampaigsAwarenesses to update.
     */
    limit?: number
  }

  /**
   * CampaigsAwareness upsert
   */
  export type CampaigsAwarenessUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaigsAwareness
     */
    select?: CampaigsAwarenessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaigsAwareness
     */
    omit?: CampaigsAwarenessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaigsAwarenessInclude<ExtArgs> | null
    /**
     * The filter to search for the CampaigsAwareness to update in case it exists.
     */
    where: CampaigsAwarenessWhereUniqueInput
    /**
     * In case the CampaigsAwareness found by the `where` argument doesn't exist, create a new CampaigsAwareness with this data.
     */
    create: XOR<CampaigsAwarenessCreateInput, CampaigsAwarenessUncheckedCreateInput>
    /**
     * In case the CampaigsAwareness was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CampaigsAwarenessUpdateInput, CampaigsAwarenessUncheckedUpdateInput>
  }

  /**
   * CampaigsAwareness delete
   */
  export type CampaigsAwarenessDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaigsAwareness
     */
    select?: CampaigsAwarenessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaigsAwareness
     */
    omit?: CampaigsAwarenessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaigsAwarenessInclude<ExtArgs> | null
    /**
     * Filter which CampaigsAwareness to delete.
     */
    where: CampaigsAwarenessWhereUniqueInput
  }

  /**
   * CampaigsAwareness deleteMany
   */
  export type CampaigsAwarenessDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CampaigsAwarenesses to delete
     */
    where?: CampaigsAwarenessWhereInput
    /**
     * Limit how many CampaigsAwarenesses to delete.
     */
    limit?: number
  }

  /**
   * CampaigsAwareness.food
   */
  export type CampaigsAwareness$foodArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food
     */
    select?: FoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Food
     */
    omit?: FoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodInclude<ExtArgs> | null
    where?: FoodWhereInput
    orderBy?: FoodOrderByWithRelationInput | FoodOrderByWithRelationInput[]
    cursor?: FoodWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FoodScalarFieldEnum | FoodScalarFieldEnum[]
  }

  /**
   * CampaigsAwareness.collectionPoints
   */
  export type CampaigsAwareness$collectionPointsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollectionPoints
     */
    select?: CollectionPointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollectionPoints
     */
    omit?: CollectionPointsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionPointsInclude<ExtArgs> | null
    where?: CollectionPointsWhereInput
    orderBy?: CollectionPointsOrderByWithRelationInput | CollectionPointsOrderByWithRelationInput[]
    cursor?: CollectionPointsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CollectionPointsScalarFieldEnum | CollectionPointsScalarFieldEnum[]
  }

  /**
   * CampaigsAwareness without action
   */
  export type CampaigsAwarenessDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaigsAwareness
     */
    select?: CampaigsAwarenessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaigsAwareness
     */
    omit?: CampaigsAwarenessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaigsAwarenessInclude<ExtArgs> | null
  }


  /**
   * Model NotificationEngagement
   */

  export type AggregateNotificationEngagement = {
    _count: NotificationEngagementCountAggregateOutputType | null
    _avg: NotificationEngagementAvgAggregateOutputType | null
    _sum: NotificationEngagementSumAggregateOutputType | null
    _min: NotificationEngagementMinAggregateOutputType | null
    _max: NotificationEngagementMaxAggregateOutputType | null
  }

  export type NotificationEngagementAvgAggregateOutputType = {
    id: number | null
    foodId: number | null
    beneficiaryId: number | null
  }

  export type NotificationEngagementSumAggregateOutputType = {
    id: number | null
    foodId: number | null
    beneficiaryId: number | null
  }

  export type NotificationEngagementMinAggregateOutputType = {
    id: number | null
    foodId: number | null
    beneficiaryId: number | null
    NotificationType: $Enums.NotificationType | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NotificationEngagementMaxAggregateOutputType = {
    id: number | null
    foodId: number | null
    beneficiaryId: number | null
    NotificationType: $Enums.NotificationType | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NotificationEngagementCountAggregateOutputType = {
    id: number
    foodId: number
    beneficiaryId: number
    NotificationType: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type NotificationEngagementAvgAggregateInputType = {
    id?: true
    foodId?: true
    beneficiaryId?: true
  }

  export type NotificationEngagementSumAggregateInputType = {
    id?: true
    foodId?: true
    beneficiaryId?: true
  }

  export type NotificationEngagementMinAggregateInputType = {
    id?: true
    foodId?: true
    beneficiaryId?: true
    NotificationType?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NotificationEngagementMaxAggregateInputType = {
    id?: true
    foodId?: true
    beneficiaryId?: true
    NotificationType?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NotificationEngagementCountAggregateInputType = {
    id?: true
    foodId?: true
    beneficiaryId?: true
    NotificationType?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type NotificationEngagementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NotificationEngagement to aggregate.
     */
    where?: NotificationEngagementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationEngagements to fetch.
     */
    orderBy?: NotificationEngagementOrderByWithRelationInput | NotificationEngagementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationEngagementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationEngagements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationEngagements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NotificationEngagements
    **/
    _count?: true | NotificationEngagementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NotificationEngagementAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NotificationEngagementSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationEngagementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationEngagementMaxAggregateInputType
  }

  export type GetNotificationEngagementAggregateType<T extends NotificationEngagementAggregateArgs> = {
        [P in keyof T & keyof AggregateNotificationEngagement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotificationEngagement[P]>
      : GetScalarType<T[P], AggregateNotificationEngagement[P]>
  }




  export type NotificationEngagementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationEngagementWhereInput
    orderBy?: NotificationEngagementOrderByWithAggregationInput | NotificationEngagementOrderByWithAggregationInput[]
    by: NotificationEngagementScalarFieldEnum[] | NotificationEngagementScalarFieldEnum
    having?: NotificationEngagementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationEngagementCountAggregateInputType | true
    _avg?: NotificationEngagementAvgAggregateInputType
    _sum?: NotificationEngagementSumAggregateInputType
    _min?: NotificationEngagementMinAggregateInputType
    _max?: NotificationEngagementMaxAggregateInputType
  }

  export type NotificationEngagementGroupByOutputType = {
    id: number
    foodId: number
    beneficiaryId: number
    NotificationType: $Enums.NotificationType
    createdAt: Date
    updatedAt: Date
    _count: NotificationEngagementCountAggregateOutputType | null
    _avg: NotificationEngagementAvgAggregateOutputType | null
    _sum: NotificationEngagementSumAggregateOutputType | null
    _min: NotificationEngagementMinAggregateOutputType | null
    _max: NotificationEngagementMaxAggregateOutputType | null
  }

  type GetNotificationEngagementGroupByPayload<T extends NotificationEngagementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationEngagementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationEngagementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationEngagementGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationEngagementGroupByOutputType[P]>
        }
      >
    >


  export type NotificationEngagementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    foodId?: boolean
    beneficiaryId?: boolean
    NotificationType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    food?: boolean | FoodDefaultArgs<ExtArgs>
    beneficiary?: boolean | BeneficiaryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notificationEngagement"]>

  export type NotificationEngagementSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    foodId?: boolean
    beneficiaryId?: boolean
    NotificationType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    food?: boolean | FoodDefaultArgs<ExtArgs>
    beneficiary?: boolean | BeneficiaryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notificationEngagement"]>

  export type NotificationEngagementSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    foodId?: boolean
    beneficiaryId?: boolean
    NotificationType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    food?: boolean | FoodDefaultArgs<ExtArgs>
    beneficiary?: boolean | BeneficiaryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notificationEngagement"]>

  export type NotificationEngagementSelectScalar = {
    id?: boolean
    foodId?: boolean
    beneficiaryId?: boolean
    NotificationType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type NotificationEngagementOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "foodId" | "beneficiaryId" | "NotificationType" | "createdAt" | "updatedAt", ExtArgs["result"]["notificationEngagement"]>
  export type NotificationEngagementInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    food?: boolean | FoodDefaultArgs<ExtArgs>
    beneficiary?: boolean | BeneficiaryDefaultArgs<ExtArgs>
  }
  export type NotificationEngagementIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    food?: boolean | FoodDefaultArgs<ExtArgs>
    beneficiary?: boolean | BeneficiaryDefaultArgs<ExtArgs>
  }
  export type NotificationEngagementIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    food?: boolean | FoodDefaultArgs<ExtArgs>
    beneficiary?: boolean | BeneficiaryDefaultArgs<ExtArgs>
  }

  export type $NotificationEngagementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NotificationEngagement"
    objects: {
      food: Prisma.$FoodPayload<ExtArgs>
      beneficiary: Prisma.$BeneficiaryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      foodId: number
      beneficiaryId: number
      NotificationType: $Enums.NotificationType
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["notificationEngagement"]>
    composites: {}
  }

  type NotificationEngagementGetPayload<S extends boolean | null | undefined | NotificationEngagementDefaultArgs> = $Result.GetResult<Prisma.$NotificationEngagementPayload, S>

  type NotificationEngagementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificationEngagementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationEngagementCountAggregateInputType | true
    }

  export interface NotificationEngagementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NotificationEngagement'], meta: { name: 'NotificationEngagement' } }
    /**
     * Find zero or one NotificationEngagement that matches the filter.
     * @param {NotificationEngagementFindUniqueArgs} args - Arguments to find a NotificationEngagement
     * @example
     * // Get one NotificationEngagement
     * const notificationEngagement = await prisma.notificationEngagement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationEngagementFindUniqueArgs>(args: SelectSubset<T, NotificationEngagementFindUniqueArgs<ExtArgs>>): Prisma__NotificationEngagementClient<$Result.GetResult<Prisma.$NotificationEngagementPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one NotificationEngagement that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificationEngagementFindUniqueOrThrowArgs} args - Arguments to find a NotificationEngagement
     * @example
     * // Get one NotificationEngagement
     * const notificationEngagement = await prisma.notificationEngagement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationEngagementFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationEngagementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationEngagementClient<$Result.GetResult<Prisma.$NotificationEngagementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NotificationEngagement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationEngagementFindFirstArgs} args - Arguments to find a NotificationEngagement
     * @example
     * // Get one NotificationEngagement
     * const notificationEngagement = await prisma.notificationEngagement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationEngagementFindFirstArgs>(args?: SelectSubset<T, NotificationEngagementFindFirstArgs<ExtArgs>>): Prisma__NotificationEngagementClient<$Result.GetResult<Prisma.$NotificationEngagementPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NotificationEngagement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationEngagementFindFirstOrThrowArgs} args - Arguments to find a NotificationEngagement
     * @example
     * // Get one NotificationEngagement
     * const notificationEngagement = await prisma.notificationEngagement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationEngagementFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationEngagementFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationEngagementClient<$Result.GetResult<Prisma.$NotificationEngagementPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more NotificationEngagements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationEngagementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NotificationEngagements
     * const notificationEngagements = await prisma.notificationEngagement.findMany()
     * 
     * // Get first 10 NotificationEngagements
     * const notificationEngagements = await prisma.notificationEngagement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationEngagementWithIdOnly = await prisma.notificationEngagement.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificationEngagementFindManyArgs>(args?: SelectSubset<T, NotificationEngagementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationEngagementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a NotificationEngagement.
     * @param {NotificationEngagementCreateArgs} args - Arguments to create a NotificationEngagement.
     * @example
     * // Create one NotificationEngagement
     * const NotificationEngagement = await prisma.notificationEngagement.create({
     *   data: {
     *     // ... data to create a NotificationEngagement
     *   }
     * })
     * 
     */
    create<T extends NotificationEngagementCreateArgs>(args: SelectSubset<T, NotificationEngagementCreateArgs<ExtArgs>>): Prisma__NotificationEngagementClient<$Result.GetResult<Prisma.$NotificationEngagementPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many NotificationEngagements.
     * @param {NotificationEngagementCreateManyArgs} args - Arguments to create many NotificationEngagements.
     * @example
     * // Create many NotificationEngagements
     * const notificationEngagement = await prisma.notificationEngagement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationEngagementCreateManyArgs>(args?: SelectSubset<T, NotificationEngagementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NotificationEngagements and returns the data saved in the database.
     * @param {NotificationEngagementCreateManyAndReturnArgs} args - Arguments to create many NotificationEngagements.
     * @example
     * // Create many NotificationEngagements
     * const notificationEngagement = await prisma.notificationEngagement.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NotificationEngagements and only return the `id`
     * const notificationEngagementWithIdOnly = await prisma.notificationEngagement.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NotificationEngagementCreateManyAndReturnArgs>(args?: SelectSubset<T, NotificationEngagementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationEngagementPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a NotificationEngagement.
     * @param {NotificationEngagementDeleteArgs} args - Arguments to delete one NotificationEngagement.
     * @example
     * // Delete one NotificationEngagement
     * const NotificationEngagement = await prisma.notificationEngagement.delete({
     *   where: {
     *     // ... filter to delete one NotificationEngagement
     *   }
     * })
     * 
     */
    delete<T extends NotificationEngagementDeleteArgs>(args: SelectSubset<T, NotificationEngagementDeleteArgs<ExtArgs>>): Prisma__NotificationEngagementClient<$Result.GetResult<Prisma.$NotificationEngagementPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one NotificationEngagement.
     * @param {NotificationEngagementUpdateArgs} args - Arguments to update one NotificationEngagement.
     * @example
     * // Update one NotificationEngagement
     * const notificationEngagement = await prisma.notificationEngagement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationEngagementUpdateArgs>(args: SelectSubset<T, NotificationEngagementUpdateArgs<ExtArgs>>): Prisma__NotificationEngagementClient<$Result.GetResult<Prisma.$NotificationEngagementPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more NotificationEngagements.
     * @param {NotificationEngagementDeleteManyArgs} args - Arguments to filter NotificationEngagements to delete.
     * @example
     * // Delete a few NotificationEngagements
     * const { count } = await prisma.notificationEngagement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationEngagementDeleteManyArgs>(args?: SelectSubset<T, NotificationEngagementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NotificationEngagements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationEngagementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NotificationEngagements
     * const notificationEngagement = await prisma.notificationEngagement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationEngagementUpdateManyArgs>(args: SelectSubset<T, NotificationEngagementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NotificationEngagements and returns the data updated in the database.
     * @param {NotificationEngagementUpdateManyAndReturnArgs} args - Arguments to update many NotificationEngagements.
     * @example
     * // Update many NotificationEngagements
     * const notificationEngagement = await prisma.notificationEngagement.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more NotificationEngagements and only return the `id`
     * const notificationEngagementWithIdOnly = await prisma.notificationEngagement.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NotificationEngagementUpdateManyAndReturnArgs>(args: SelectSubset<T, NotificationEngagementUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationEngagementPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one NotificationEngagement.
     * @param {NotificationEngagementUpsertArgs} args - Arguments to update or create a NotificationEngagement.
     * @example
     * // Update or create a NotificationEngagement
     * const notificationEngagement = await prisma.notificationEngagement.upsert({
     *   create: {
     *     // ... data to create a NotificationEngagement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NotificationEngagement we want to update
     *   }
     * })
     */
    upsert<T extends NotificationEngagementUpsertArgs>(args: SelectSubset<T, NotificationEngagementUpsertArgs<ExtArgs>>): Prisma__NotificationEngagementClient<$Result.GetResult<Prisma.$NotificationEngagementPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of NotificationEngagements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationEngagementCountArgs} args - Arguments to filter NotificationEngagements to count.
     * @example
     * // Count the number of NotificationEngagements
     * const count = await prisma.notificationEngagement.count({
     *   where: {
     *     // ... the filter for the NotificationEngagements we want to count
     *   }
     * })
    **/
    count<T extends NotificationEngagementCountArgs>(
      args?: Subset<T, NotificationEngagementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationEngagementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NotificationEngagement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationEngagementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NotificationEngagementAggregateArgs>(args: Subset<T, NotificationEngagementAggregateArgs>): Prisma.PrismaPromise<GetNotificationEngagementAggregateType<T>>

    /**
     * Group by NotificationEngagement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationEngagementGroupByArgs} args - Group by arguments.
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
      T extends NotificationEngagementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationEngagementGroupByArgs['orderBy'] }
        : { orderBy?: NotificationEngagementGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NotificationEngagementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationEngagementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NotificationEngagement model
   */
  readonly fields: NotificationEngagementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NotificationEngagement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationEngagementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    food<T extends FoodDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FoodDefaultArgs<ExtArgs>>): Prisma__FoodClient<$Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    beneficiary<T extends BeneficiaryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BeneficiaryDefaultArgs<ExtArgs>>): Prisma__BeneficiaryClient<$Result.GetResult<Prisma.$BeneficiaryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the NotificationEngagement model
   */
  interface NotificationEngagementFieldRefs {
    readonly id: FieldRef<"NotificationEngagement", 'Int'>
    readonly foodId: FieldRef<"NotificationEngagement", 'Int'>
    readonly beneficiaryId: FieldRef<"NotificationEngagement", 'Int'>
    readonly NotificationType: FieldRef<"NotificationEngagement", 'NotificationType'>
    readonly createdAt: FieldRef<"NotificationEngagement", 'DateTime'>
    readonly updatedAt: FieldRef<"NotificationEngagement", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * NotificationEngagement findUnique
   */
  export type NotificationEngagementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationEngagement
     */
    select?: NotificationEngagementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationEngagement
     */
    omit?: NotificationEngagementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationEngagementInclude<ExtArgs> | null
    /**
     * Filter, which NotificationEngagement to fetch.
     */
    where: NotificationEngagementWhereUniqueInput
  }

  /**
   * NotificationEngagement findUniqueOrThrow
   */
  export type NotificationEngagementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationEngagement
     */
    select?: NotificationEngagementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationEngagement
     */
    omit?: NotificationEngagementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationEngagementInclude<ExtArgs> | null
    /**
     * Filter, which NotificationEngagement to fetch.
     */
    where: NotificationEngagementWhereUniqueInput
  }

  /**
   * NotificationEngagement findFirst
   */
  export type NotificationEngagementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationEngagement
     */
    select?: NotificationEngagementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationEngagement
     */
    omit?: NotificationEngagementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationEngagementInclude<ExtArgs> | null
    /**
     * Filter, which NotificationEngagement to fetch.
     */
    where?: NotificationEngagementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationEngagements to fetch.
     */
    orderBy?: NotificationEngagementOrderByWithRelationInput | NotificationEngagementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NotificationEngagements.
     */
    cursor?: NotificationEngagementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationEngagements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationEngagements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NotificationEngagements.
     */
    distinct?: NotificationEngagementScalarFieldEnum | NotificationEngagementScalarFieldEnum[]
  }

  /**
   * NotificationEngagement findFirstOrThrow
   */
  export type NotificationEngagementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationEngagement
     */
    select?: NotificationEngagementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationEngagement
     */
    omit?: NotificationEngagementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationEngagementInclude<ExtArgs> | null
    /**
     * Filter, which NotificationEngagement to fetch.
     */
    where?: NotificationEngagementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationEngagements to fetch.
     */
    orderBy?: NotificationEngagementOrderByWithRelationInput | NotificationEngagementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NotificationEngagements.
     */
    cursor?: NotificationEngagementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationEngagements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationEngagements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NotificationEngagements.
     */
    distinct?: NotificationEngagementScalarFieldEnum | NotificationEngagementScalarFieldEnum[]
  }

  /**
   * NotificationEngagement findMany
   */
  export type NotificationEngagementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationEngagement
     */
    select?: NotificationEngagementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationEngagement
     */
    omit?: NotificationEngagementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationEngagementInclude<ExtArgs> | null
    /**
     * Filter, which NotificationEngagements to fetch.
     */
    where?: NotificationEngagementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationEngagements to fetch.
     */
    orderBy?: NotificationEngagementOrderByWithRelationInput | NotificationEngagementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NotificationEngagements.
     */
    cursor?: NotificationEngagementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationEngagements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationEngagements.
     */
    skip?: number
    distinct?: NotificationEngagementScalarFieldEnum | NotificationEngagementScalarFieldEnum[]
  }

  /**
   * NotificationEngagement create
   */
  export type NotificationEngagementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationEngagement
     */
    select?: NotificationEngagementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationEngagement
     */
    omit?: NotificationEngagementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationEngagementInclude<ExtArgs> | null
    /**
     * The data needed to create a NotificationEngagement.
     */
    data: XOR<NotificationEngagementCreateInput, NotificationEngagementUncheckedCreateInput>
  }

  /**
   * NotificationEngagement createMany
   */
  export type NotificationEngagementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NotificationEngagements.
     */
    data: NotificationEngagementCreateManyInput | NotificationEngagementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NotificationEngagement createManyAndReturn
   */
  export type NotificationEngagementCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationEngagement
     */
    select?: NotificationEngagementSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationEngagement
     */
    omit?: NotificationEngagementOmit<ExtArgs> | null
    /**
     * The data used to create many NotificationEngagements.
     */
    data: NotificationEngagementCreateManyInput | NotificationEngagementCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationEngagementIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * NotificationEngagement update
   */
  export type NotificationEngagementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationEngagement
     */
    select?: NotificationEngagementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationEngagement
     */
    omit?: NotificationEngagementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationEngagementInclude<ExtArgs> | null
    /**
     * The data needed to update a NotificationEngagement.
     */
    data: XOR<NotificationEngagementUpdateInput, NotificationEngagementUncheckedUpdateInput>
    /**
     * Choose, which NotificationEngagement to update.
     */
    where: NotificationEngagementWhereUniqueInput
  }

  /**
   * NotificationEngagement updateMany
   */
  export type NotificationEngagementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NotificationEngagements.
     */
    data: XOR<NotificationEngagementUpdateManyMutationInput, NotificationEngagementUncheckedUpdateManyInput>
    /**
     * Filter which NotificationEngagements to update
     */
    where?: NotificationEngagementWhereInput
    /**
     * Limit how many NotificationEngagements to update.
     */
    limit?: number
  }

  /**
   * NotificationEngagement updateManyAndReturn
   */
  export type NotificationEngagementUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationEngagement
     */
    select?: NotificationEngagementSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationEngagement
     */
    omit?: NotificationEngagementOmit<ExtArgs> | null
    /**
     * The data used to update NotificationEngagements.
     */
    data: XOR<NotificationEngagementUpdateManyMutationInput, NotificationEngagementUncheckedUpdateManyInput>
    /**
     * Filter which NotificationEngagements to update
     */
    where?: NotificationEngagementWhereInput
    /**
     * Limit how many NotificationEngagements to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationEngagementIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * NotificationEngagement upsert
   */
  export type NotificationEngagementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationEngagement
     */
    select?: NotificationEngagementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationEngagement
     */
    omit?: NotificationEngagementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationEngagementInclude<ExtArgs> | null
    /**
     * The filter to search for the NotificationEngagement to update in case it exists.
     */
    where: NotificationEngagementWhereUniqueInput
    /**
     * In case the NotificationEngagement found by the `where` argument doesn't exist, create a new NotificationEngagement with this data.
     */
    create: XOR<NotificationEngagementCreateInput, NotificationEngagementUncheckedCreateInput>
    /**
     * In case the NotificationEngagement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationEngagementUpdateInput, NotificationEngagementUncheckedUpdateInput>
  }

  /**
   * NotificationEngagement delete
   */
  export type NotificationEngagementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationEngagement
     */
    select?: NotificationEngagementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationEngagement
     */
    omit?: NotificationEngagementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationEngagementInclude<ExtArgs> | null
    /**
     * Filter which NotificationEngagement to delete.
     */
    where: NotificationEngagementWhereUniqueInput
  }

  /**
   * NotificationEngagement deleteMany
   */
  export type NotificationEngagementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NotificationEngagements to delete
     */
    where?: NotificationEngagementWhereInput
    /**
     * Limit how many NotificationEngagements to delete.
     */
    limit?: number
  }

  /**
   * NotificationEngagement without action
   */
  export type NotificationEngagementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationEngagement
     */
    select?: NotificationEngagementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationEngagement
     */
    omit?: NotificationEngagementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationEngagementInclude<ExtArgs> | null
  }


  /**
   * Model Food
   */

  export type AggregateFood = {
    _count: FoodCountAggregateOutputType | null
    _avg: FoodAvgAggregateOutputType | null
    _sum: FoodSumAggregateOutputType | null
    _min: FoodMinAggregateOutputType | null
    _max: FoodMaxAggregateOutputType | null
  }

  export type FoodAvgAggregateOutputType = {
    id: number | null
    donorId: number | null
    collectionPointsId: number | null
    AwarenessId: number | null
    quantity: number | null
  }

  export type FoodSumAggregateOutputType = {
    id: number | null
    donorId: number | null
    collectionPointsId: number | null
    AwarenessId: number | null
    quantity: number | null
  }

  export type FoodMinAggregateOutputType = {
    id: number | null
    donorId: number | null
    collectionPointsId: number | null
    AwarenessId: number | null
    name: string | null
    validity: Date | null
    quantity: number | null
    category: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FoodMaxAggregateOutputType = {
    id: number | null
    donorId: number | null
    collectionPointsId: number | null
    AwarenessId: number | null
    name: string | null
    validity: Date | null
    quantity: number | null
    category: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FoodCountAggregateOutputType = {
    id: number
    donorId: number
    collectionPointsId: number
    AwarenessId: number
    name: number
    validity: number
    quantity: number
    category: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FoodAvgAggregateInputType = {
    id?: true
    donorId?: true
    collectionPointsId?: true
    AwarenessId?: true
    quantity?: true
  }

  export type FoodSumAggregateInputType = {
    id?: true
    donorId?: true
    collectionPointsId?: true
    AwarenessId?: true
    quantity?: true
  }

  export type FoodMinAggregateInputType = {
    id?: true
    donorId?: true
    collectionPointsId?: true
    AwarenessId?: true
    name?: true
    validity?: true
    quantity?: true
    category?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FoodMaxAggregateInputType = {
    id?: true
    donorId?: true
    collectionPointsId?: true
    AwarenessId?: true
    name?: true
    validity?: true
    quantity?: true
    category?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FoodCountAggregateInputType = {
    id?: true
    donorId?: true
    collectionPointsId?: true
    AwarenessId?: true
    name?: true
    validity?: true
    quantity?: true
    category?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FoodAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Food to aggregate.
     */
    where?: FoodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Foods to fetch.
     */
    orderBy?: FoodOrderByWithRelationInput | FoodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FoodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Foods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Foods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Foods
    **/
    _count?: true | FoodCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FoodAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FoodSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FoodMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FoodMaxAggregateInputType
  }

  export type GetFoodAggregateType<T extends FoodAggregateArgs> = {
        [P in keyof T & keyof AggregateFood]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFood[P]>
      : GetScalarType<T[P], AggregateFood[P]>
  }




  export type FoodGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FoodWhereInput
    orderBy?: FoodOrderByWithAggregationInput | FoodOrderByWithAggregationInput[]
    by: FoodScalarFieldEnum[] | FoodScalarFieldEnum
    having?: FoodScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FoodCountAggregateInputType | true
    _avg?: FoodAvgAggregateInputType
    _sum?: FoodSumAggregateInputType
    _min?: FoodMinAggregateInputType
    _max?: FoodMaxAggregateInputType
  }

  export type FoodGroupByOutputType = {
    id: number
    donorId: number
    collectionPointsId: number
    AwarenessId: number
    name: string
    validity: Date
    quantity: number
    category: string
    description: string
    createdAt: Date
    updatedAt: Date
    _count: FoodCountAggregateOutputType | null
    _avg: FoodAvgAggregateOutputType | null
    _sum: FoodSumAggregateOutputType | null
    _min: FoodMinAggregateOutputType | null
    _max: FoodMaxAggregateOutputType | null
  }

  type GetFoodGroupByPayload<T extends FoodGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FoodGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FoodGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FoodGroupByOutputType[P]>
            : GetScalarType<T[P], FoodGroupByOutputType[P]>
        }
      >
    >


  export type FoodSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    donorId?: boolean
    collectionPointsId?: boolean
    AwarenessId?: boolean
    name?: boolean
    validity?: boolean
    quantity?: boolean
    category?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    donor?: boolean | DonorDefaultArgs<ExtArgs>
    collectionPoints?: boolean | CollectionPointsDefaultArgs<ExtArgs>
    Awareness?: boolean | CampaigsAwarenessDefaultArgs<ExtArgs>
    notificationEngagements?: boolean | Food$notificationEngagementsArgs<ExtArgs>
    _count?: boolean | FoodCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["food"]>

  export type FoodSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    donorId?: boolean
    collectionPointsId?: boolean
    AwarenessId?: boolean
    name?: boolean
    validity?: boolean
    quantity?: boolean
    category?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    donor?: boolean | DonorDefaultArgs<ExtArgs>
    collectionPoints?: boolean | CollectionPointsDefaultArgs<ExtArgs>
    Awareness?: boolean | CampaigsAwarenessDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["food"]>

  export type FoodSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    donorId?: boolean
    collectionPointsId?: boolean
    AwarenessId?: boolean
    name?: boolean
    validity?: boolean
    quantity?: boolean
    category?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    donor?: boolean | DonorDefaultArgs<ExtArgs>
    collectionPoints?: boolean | CollectionPointsDefaultArgs<ExtArgs>
    Awareness?: boolean | CampaigsAwarenessDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["food"]>

  export type FoodSelectScalar = {
    id?: boolean
    donorId?: boolean
    collectionPointsId?: boolean
    AwarenessId?: boolean
    name?: boolean
    validity?: boolean
    quantity?: boolean
    category?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FoodOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "donorId" | "collectionPointsId" | "AwarenessId" | "name" | "validity" | "quantity" | "category" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["food"]>
  export type FoodInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    donor?: boolean | DonorDefaultArgs<ExtArgs>
    collectionPoints?: boolean | CollectionPointsDefaultArgs<ExtArgs>
    Awareness?: boolean | CampaigsAwarenessDefaultArgs<ExtArgs>
    notificationEngagements?: boolean | Food$notificationEngagementsArgs<ExtArgs>
    _count?: boolean | FoodCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FoodIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    donor?: boolean | DonorDefaultArgs<ExtArgs>
    collectionPoints?: boolean | CollectionPointsDefaultArgs<ExtArgs>
    Awareness?: boolean | CampaigsAwarenessDefaultArgs<ExtArgs>
  }
  export type FoodIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    donor?: boolean | DonorDefaultArgs<ExtArgs>
    collectionPoints?: boolean | CollectionPointsDefaultArgs<ExtArgs>
    Awareness?: boolean | CampaigsAwarenessDefaultArgs<ExtArgs>
  }

  export type $FoodPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Food"
    objects: {
      donor: Prisma.$DonorPayload<ExtArgs>
      collectionPoints: Prisma.$CollectionPointsPayload<ExtArgs>
      Awareness: Prisma.$CampaigsAwarenessPayload<ExtArgs>
      notificationEngagements: Prisma.$NotificationEngagementPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      donorId: number
      collectionPointsId: number
      AwarenessId: number
      name: string
      validity: Date
      quantity: number
      category: string
      description: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["food"]>
    composites: {}
  }

  type FoodGetPayload<S extends boolean | null | undefined | FoodDefaultArgs> = $Result.GetResult<Prisma.$FoodPayload, S>

  type FoodCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FoodFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FoodCountAggregateInputType | true
    }

  export interface FoodDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Food'], meta: { name: 'Food' } }
    /**
     * Find zero or one Food that matches the filter.
     * @param {FoodFindUniqueArgs} args - Arguments to find a Food
     * @example
     * // Get one Food
     * const food = await prisma.food.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FoodFindUniqueArgs>(args: SelectSubset<T, FoodFindUniqueArgs<ExtArgs>>): Prisma__FoodClient<$Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Food that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FoodFindUniqueOrThrowArgs} args - Arguments to find a Food
     * @example
     * // Get one Food
     * const food = await prisma.food.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FoodFindUniqueOrThrowArgs>(args: SelectSubset<T, FoodFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FoodClient<$Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Food that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodFindFirstArgs} args - Arguments to find a Food
     * @example
     * // Get one Food
     * const food = await prisma.food.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FoodFindFirstArgs>(args?: SelectSubset<T, FoodFindFirstArgs<ExtArgs>>): Prisma__FoodClient<$Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Food that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodFindFirstOrThrowArgs} args - Arguments to find a Food
     * @example
     * // Get one Food
     * const food = await prisma.food.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FoodFindFirstOrThrowArgs>(args?: SelectSubset<T, FoodFindFirstOrThrowArgs<ExtArgs>>): Prisma__FoodClient<$Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Foods that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Foods
     * const foods = await prisma.food.findMany()
     * 
     * // Get first 10 Foods
     * const foods = await prisma.food.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const foodWithIdOnly = await prisma.food.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FoodFindManyArgs>(args?: SelectSubset<T, FoodFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Food.
     * @param {FoodCreateArgs} args - Arguments to create a Food.
     * @example
     * // Create one Food
     * const Food = await prisma.food.create({
     *   data: {
     *     // ... data to create a Food
     *   }
     * })
     * 
     */
    create<T extends FoodCreateArgs>(args: SelectSubset<T, FoodCreateArgs<ExtArgs>>): Prisma__FoodClient<$Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Foods.
     * @param {FoodCreateManyArgs} args - Arguments to create many Foods.
     * @example
     * // Create many Foods
     * const food = await prisma.food.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FoodCreateManyArgs>(args?: SelectSubset<T, FoodCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Foods and returns the data saved in the database.
     * @param {FoodCreateManyAndReturnArgs} args - Arguments to create many Foods.
     * @example
     * // Create many Foods
     * const food = await prisma.food.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Foods and only return the `id`
     * const foodWithIdOnly = await prisma.food.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FoodCreateManyAndReturnArgs>(args?: SelectSubset<T, FoodCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Food.
     * @param {FoodDeleteArgs} args - Arguments to delete one Food.
     * @example
     * // Delete one Food
     * const Food = await prisma.food.delete({
     *   where: {
     *     // ... filter to delete one Food
     *   }
     * })
     * 
     */
    delete<T extends FoodDeleteArgs>(args: SelectSubset<T, FoodDeleteArgs<ExtArgs>>): Prisma__FoodClient<$Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Food.
     * @param {FoodUpdateArgs} args - Arguments to update one Food.
     * @example
     * // Update one Food
     * const food = await prisma.food.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FoodUpdateArgs>(args: SelectSubset<T, FoodUpdateArgs<ExtArgs>>): Prisma__FoodClient<$Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Foods.
     * @param {FoodDeleteManyArgs} args - Arguments to filter Foods to delete.
     * @example
     * // Delete a few Foods
     * const { count } = await prisma.food.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FoodDeleteManyArgs>(args?: SelectSubset<T, FoodDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Foods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Foods
     * const food = await prisma.food.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FoodUpdateManyArgs>(args: SelectSubset<T, FoodUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Foods and returns the data updated in the database.
     * @param {FoodUpdateManyAndReturnArgs} args - Arguments to update many Foods.
     * @example
     * // Update many Foods
     * const food = await prisma.food.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Foods and only return the `id`
     * const foodWithIdOnly = await prisma.food.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FoodUpdateManyAndReturnArgs>(args: SelectSubset<T, FoodUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Food.
     * @param {FoodUpsertArgs} args - Arguments to update or create a Food.
     * @example
     * // Update or create a Food
     * const food = await prisma.food.upsert({
     *   create: {
     *     // ... data to create a Food
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Food we want to update
     *   }
     * })
     */
    upsert<T extends FoodUpsertArgs>(args: SelectSubset<T, FoodUpsertArgs<ExtArgs>>): Prisma__FoodClient<$Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Foods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodCountArgs} args - Arguments to filter Foods to count.
     * @example
     * // Count the number of Foods
     * const count = await prisma.food.count({
     *   where: {
     *     // ... the filter for the Foods we want to count
     *   }
     * })
    **/
    count<T extends FoodCountArgs>(
      args?: Subset<T, FoodCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FoodCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Food.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FoodAggregateArgs>(args: Subset<T, FoodAggregateArgs>): Prisma.PrismaPromise<GetFoodAggregateType<T>>

    /**
     * Group by Food.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodGroupByArgs} args - Group by arguments.
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
      T extends FoodGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FoodGroupByArgs['orderBy'] }
        : { orderBy?: FoodGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FoodGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFoodGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Food model
   */
  readonly fields: FoodFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Food.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FoodClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    donor<T extends DonorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DonorDefaultArgs<ExtArgs>>): Prisma__DonorClient<$Result.GetResult<Prisma.$DonorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    collectionPoints<T extends CollectionPointsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CollectionPointsDefaultArgs<ExtArgs>>): Prisma__CollectionPointsClient<$Result.GetResult<Prisma.$CollectionPointsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Awareness<T extends CampaigsAwarenessDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CampaigsAwarenessDefaultArgs<ExtArgs>>): Prisma__CampaigsAwarenessClient<$Result.GetResult<Prisma.$CampaigsAwarenessPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    notificationEngagements<T extends Food$notificationEngagementsArgs<ExtArgs> = {}>(args?: Subset<T, Food$notificationEngagementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationEngagementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Food model
   */
  interface FoodFieldRefs {
    readonly id: FieldRef<"Food", 'Int'>
    readonly donorId: FieldRef<"Food", 'Int'>
    readonly collectionPointsId: FieldRef<"Food", 'Int'>
    readonly AwarenessId: FieldRef<"Food", 'Int'>
    readonly name: FieldRef<"Food", 'String'>
    readonly validity: FieldRef<"Food", 'DateTime'>
    readonly quantity: FieldRef<"Food", 'Int'>
    readonly category: FieldRef<"Food", 'String'>
    readonly description: FieldRef<"Food", 'String'>
    readonly createdAt: FieldRef<"Food", 'DateTime'>
    readonly updatedAt: FieldRef<"Food", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Food findUnique
   */
  export type FoodFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food
     */
    select?: FoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Food
     */
    omit?: FoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodInclude<ExtArgs> | null
    /**
     * Filter, which Food to fetch.
     */
    where: FoodWhereUniqueInput
  }

  /**
   * Food findUniqueOrThrow
   */
  export type FoodFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food
     */
    select?: FoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Food
     */
    omit?: FoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodInclude<ExtArgs> | null
    /**
     * Filter, which Food to fetch.
     */
    where: FoodWhereUniqueInput
  }

  /**
   * Food findFirst
   */
  export type FoodFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food
     */
    select?: FoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Food
     */
    omit?: FoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodInclude<ExtArgs> | null
    /**
     * Filter, which Food to fetch.
     */
    where?: FoodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Foods to fetch.
     */
    orderBy?: FoodOrderByWithRelationInput | FoodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Foods.
     */
    cursor?: FoodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Foods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Foods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Foods.
     */
    distinct?: FoodScalarFieldEnum | FoodScalarFieldEnum[]
  }

  /**
   * Food findFirstOrThrow
   */
  export type FoodFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food
     */
    select?: FoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Food
     */
    omit?: FoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodInclude<ExtArgs> | null
    /**
     * Filter, which Food to fetch.
     */
    where?: FoodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Foods to fetch.
     */
    orderBy?: FoodOrderByWithRelationInput | FoodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Foods.
     */
    cursor?: FoodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Foods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Foods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Foods.
     */
    distinct?: FoodScalarFieldEnum | FoodScalarFieldEnum[]
  }

  /**
   * Food findMany
   */
  export type FoodFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food
     */
    select?: FoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Food
     */
    omit?: FoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodInclude<ExtArgs> | null
    /**
     * Filter, which Foods to fetch.
     */
    where?: FoodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Foods to fetch.
     */
    orderBy?: FoodOrderByWithRelationInput | FoodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Foods.
     */
    cursor?: FoodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Foods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Foods.
     */
    skip?: number
    distinct?: FoodScalarFieldEnum | FoodScalarFieldEnum[]
  }

  /**
   * Food create
   */
  export type FoodCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food
     */
    select?: FoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Food
     */
    omit?: FoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodInclude<ExtArgs> | null
    /**
     * The data needed to create a Food.
     */
    data: XOR<FoodCreateInput, FoodUncheckedCreateInput>
  }

  /**
   * Food createMany
   */
  export type FoodCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Foods.
     */
    data: FoodCreateManyInput | FoodCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Food createManyAndReturn
   */
  export type FoodCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food
     */
    select?: FoodSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Food
     */
    omit?: FoodOmit<ExtArgs> | null
    /**
     * The data used to create many Foods.
     */
    data: FoodCreateManyInput | FoodCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Food update
   */
  export type FoodUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food
     */
    select?: FoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Food
     */
    omit?: FoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodInclude<ExtArgs> | null
    /**
     * The data needed to update a Food.
     */
    data: XOR<FoodUpdateInput, FoodUncheckedUpdateInput>
    /**
     * Choose, which Food to update.
     */
    where: FoodWhereUniqueInput
  }

  /**
   * Food updateMany
   */
  export type FoodUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Foods.
     */
    data: XOR<FoodUpdateManyMutationInput, FoodUncheckedUpdateManyInput>
    /**
     * Filter which Foods to update
     */
    where?: FoodWhereInput
    /**
     * Limit how many Foods to update.
     */
    limit?: number
  }

  /**
   * Food updateManyAndReturn
   */
  export type FoodUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food
     */
    select?: FoodSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Food
     */
    omit?: FoodOmit<ExtArgs> | null
    /**
     * The data used to update Foods.
     */
    data: XOR<FoodUpdateManyMutationInput, FoodUncheckedUpdateManyInput>
    /**
     * Filter which Foods to update
     */
    where?: FoodWhereInput
    /**
     * Limit how many Foods to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Food upsert
   */
  export type FoodUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food
     */
    select?: FoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Food
     */
    omit?: FoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodInclude<ExtArgs> | null
    /**
     * The filter to search for the Food to update in case it exists.
     */
    where: FoodWhereUniqueInput
    /**
     * In case the Food found by the `where` argument doesn't exist, create a new Food with this data.
     */
    create: XOR<FoodCreateInput, FoodUncheckedCreateInput>
    /**
     * In case the Food was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FoodUpdateInput, FoodUncheckedUpdateInput>
  }

  /**
   * Food delete
   */
  export type FoodDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food
     */
    select?: FoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Food
     */
    omit?: FoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodInclude<ExtArgs> | null
    /**
     * Filter which Food to delete.
     */
    where: FoodWhereUniqueInput
  }

  /**
   * Food deleteMany
   */
  export type FoodDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Foods to delete
     */
    where?: FoodWhereInput
    /**
     * Limit how many Foods to delete.
     */
    limit?: number
  }

  /**
   * Food.notificationEngagements
   */
  export type Food$notificationEngagementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationEngagement
     */
    select?: NotificationEngagementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationEngagement
     */
    omit?: NotificationEngagementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationEngagementInclude<ExtArgs> | null
    where?: NotificationEngagementWhereInput
    orderBy?: NotificationEngagementOrderByWithRelationInput | NotificationEngagementOrderByWithRelationInput[]
    cursor?: NotificationEngagementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationEngagementScalarFieldEnum | NotificationEngagementScalarFieldEnum[]
  }

  /**
   * Food without action
   */
  export type FoodDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food
     */
    select?: FoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Food
     */
    omit?: FoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodInclude<ExtArgs> | null
  }


  /**
   * Model ImpactReport
   */

  export type AggregateImpactReport = {
    _count: ImpactReportCountAggregateOutputType | null
    _avg: ImpactReportAvgAggregateOutputType | null
    _sum: ImpactReportSumAggregateOutputType | null
    _min: ImpactReportMinAggregateOutputType | null
    _max: ImpactReportMaxAggregateOutputType | null
  }

  export type ImpactReportAvgAggregateOutputType = {
    id: number | null
    donorId: number | null
    savedFoodKg: number | null
  }

  export type ImpactReportSumAggregateOutputType = {
    id: number | null
    donorId: number | null
    savedFoodKg: number | null
  }

  export type ImpactReportMinAggregateOutputType = {
    id: number | null
    donorId: number | null
    title: string | null
    description: string | null
    savedFoodKg: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ImpactReportMaxAggregateOutputType = {
    id: number | null
    donorId: number | null
    title: string | null
    description: string | null
    savedFoodKg: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ImpactReportCountAggregateOutputType = {
    id: number
    donorId: number
    title: number
    description: number
    savedFoodKg: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ImpactReportAvgAggregateInputType = {
    id?: true
    donorId?: true
    savedFoodKg?: true
  }

  export type ImpactReportSumAggregateInputType = {
    id?: true
    donorId?: true
    savedFoodKg?: true
  }

  export type ImpactReportMinAggregateInputType = {
    id?: true
    donorId?: true
    title?: true
    description?: true
    savedFoodKg?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ImpactReportMaxAggregateInputType = {
    id?: true
    donorId?: true
    title?: true
    description?: true
    savedFoodKg?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ImpactReportCountAggregateInputType = {
    id?: true
    donorId?: true
    title?: true
    description?: true
    savedFoodKg?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ImpactReportAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ImpactReport to aggregate.
     */
    where?: ImpactReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImpactReports to fetch.
     */
    orderBy?: ImpactReportOrderByWithRelationInput | ImpactReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ImpactReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImpactReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImpactReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ImpactReports
    **/
    _count?: true | ImpactReportCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ImpactReportAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ImpactReportSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ImpactReportMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ImpactReportMaxAggregateInputType
  }

  export type GetImpactReportAggregateType<T extends ImpactReportAggregateArgs> = {
        [P in keyof T & keyof AggregateImpactReport]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateImpactReport[P]>
      : GetScalarType<T[P], AggregateImpactReport[P]>
  }




  export type ImpactReportGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImpactReportWhereInput
    orderBy?: ImpactReportOrderByWithAggregationInput | ImpactReportOrderByWithAggregationInput[]
    by: ImpactReportScalarFieldEnum[] | ImpactReportScalarFieldEnum
    having?: ImpactReportScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ImpactReportCountAggregateInputType | true
    _avg?: ImpactReportAvgAggregateInputType
    _sum?: ImpactReportSumAggregateInputType
    _min?: ImpactReportMinAggregateInputType
    _max?: ImpactReportMaxAggregateInputType
  }

  export type ImpactReportGroupByOutputType = {
    id: number
    donorId: number
    title: string
    description: string
    savedFoodKg: number
    createdAt: Date
    updatedAt: Date
    _count: ImpactReportCountAggregateOutputType | null
    _avg: ImpactReportAvgAggregateOutputType | null
    _sum: ImpactReportSumAggregateOutputType | null
    _min: ImpactReportMinAggregateOutputType | null
    _max: ImpactReportMaxAggregateOutputType | null
  }

  type GetImpactReportGroupByPayload<T extends ImpactReportGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ImpactReportGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ImpactReportGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ImpactReportGroupByOutputType[P]>
            : GetScalarType<T[P], ImpactReportGroupByOutputType[P]>
        }
      >
    >


  export type ImpactReportSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    donorId?: boolean
    title?: boolean
    description?: boolean
    savedFoodKg?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    donor?: boolean | DonorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["impactReport"]>

  export type ImpactReportSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    donorId?: boolean
    title?: boolean
    description?: boolean
    savedFoodKg?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    donor?: boolean | DonorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["impactReport"]>

  export type ImpactReportSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    donorId?: boolean
    title?: boolean
    description?: boolean
    savedFoodKg?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    donor?: boolean | DonorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["impactReport"]>

  export type ImpactReportSelectScalar = {
    id?: boolean
    donorId?: boolean
    title?: boolean
    description?: boolean
    savedFoodKg?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ImpactReportOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "donorId" | "title" | "description" | "savedFoodKg" | "createdAt" | "updatedAt", ExtArgs["result"]["impactReport"]>
  export type ImpactReportInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    donor?: boolean | DonorDefaultArgs<ExtArgs>
  }
  export type ImpactReportIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    donor?: boolean | DonorDefaultArgs<ExtArgs>
  }
  export type ImpactReportIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    donor?: boolean | DonorDefaultArgs<ExtArgs>
  }

  export type $ImpactReportPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ImpactReport"
    objects: {
      donor: Prisma.$DonorPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      donorId: number
      title: string
      description: string
      savedFoodKg: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["impactReport"]>
    composites: {}
  }

  type ImpactReportGetPayload<S extends boolean | null | undefined | ImpactReportDefaultArgs> = $Result.GetResult<Prisma.$ImpactReportPayload, S>

  type ImpactReportCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ImpactReportFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ImpactReportCountAggregateInputType | true
    }

  export interface ImpactReportDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ImpactReport'], meta: { name: 'ImpactReport' } }
    /**
     * Find zero or one ImpactReport that matches the filter.
     * @param {ImpactReportFindUniqueArgs} args - Arguments to find a ImpactReport
     * @example
     * // Get one ImpactReport
     * const impactReport = await prisma.impactReport.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ImpactReportFindUniqueArgs>(args: SelectSubset<T, ImpactReportFindUniqueArgs<ExtArgs>>): Prisma__ImpactReportClient<$Result.GetResult<Prisma.$ImpactReportPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ImpactReport that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ImpactReportFindUniqueOrThrowArgs} args - Arguments to find a ImpactReport
     * @example
     * // Get one ImpactReport
     * const impactReport = await prisma.impactReport.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ImpactReportFindUniqueOrThrowArgs>(args: SelectSubset<T, ImpactReportFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ImpactReportClient<$Result.GetResult<Prisma.$ImpactReportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ImpactReport that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImpactReportFindFirstArgs} args - Arguments to find a ImpactReport
     * @example
     * // Get one ImpactReport
     * const impactReport = await prisma.impactReport.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ImpactReportFindFirstArgs>(args?: SelectSubset<T, ImpactReportFindFirstArgs<ExtArgs>>): Prisma__ImpactReportClient<$Result.GetResult<Prisma.$ImpactReportPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ImpactReport that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImpactReportFindFirstOrThrowArgs} args - Arguments to find a ImpactReport
     * @example
     * // Get one ImpactReport
     * const impactReport = await prisma.impactReport.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ImpactReportFindFirstOrThrowArgs>(args?: SelectSubset<T, ImpactReportFindFirstOrThrowArgs<ExtArgs>>): Prisma__ImpactReportClient<$Result.GetResult<Prisma.$ImpactReportPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ImpactReports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImpactReportFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ImpactReports
     * const impactReports = await prisma.impactReport.findMany()
     * 
     * // Get first 10 ImpactReports
     * const impactReports = await prisma.impactReport.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const impactReportWithIdOnly = await prisma.impactReport.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ImpactReportFindManyArgs>(args?: SelectSubset<T, ImpactReportFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImpactReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ImpactReport.
     * @param {ImpactReportCreateArgs} args - Arguments to create a ImpactReport.
     * @example
     * // Create one ImpactReport
     * const ImpactReport = await prisma.impactReport.create({
     *   data: {
     *     // ... data to create a ImpactReport
     *   }
     * })
     * 
     */
    create<T extends ImpactReportCreateArgs>(args: SelectSubset<T, ImpactReportCreateArgs<ExtArgs>>): Prisma__ImpactReportClient<$Result.GetResult<Prisma.$ImpactReportPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ImpactReports.
     * @param {ImpactReportCreateManyArgs} args - Arguments to create many ImpactReports.
     * @example
     * // Create many ImpactReports
     * const impactReport = await prisma.impactReport.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ImpactReportCreateManyArgs>(args?: SelectSubset<T, ImpactReportCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ImpactReports and returns the data saved in the database.
     * @param {ImpactReportCreateManyAndReturnArgs} args - Arguments to create many ImpactReports.
     * @example
     * // Create many ImpactReports
     * const impactReport = await prisma.impactReport.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ImpactReports and only return the `id`
     * const impactReportWithIdOnly = await prisma.impactReport.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ImpactReportCreateManyAndReturnArgs>(args?: SelectSubset<T, ImpactReportCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImpactReportPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ImpactReport.
     * @param {ImpactReportDeleteArgs} args - Arguments to delete one ImpactReport.
     * @example
     * // Delete one ImpactReport
     * const ImpactReport = await prisma.impactReport.delete({
     *   where: {
     *     // ... filter to delete one ImpactReport
     *   }
     * })
     * 
     */
    delete<T extends ImpactReportDeleteArgs>(args: SelectSubset<T, ImpactReportDeleteArgs<ExtArgs>>): Prisma__ImpactReportClient<$Result.GetResult<Prisma.$ImpactReportPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ImpactReport.
     * @param {ImpactReportUpdateArgs} args - Arguments to update one ImpactReport.
     * @example
     * // Update one ImpactReport
     * const impactReport = await prisma.impactReport.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ImpactReportUpdateArgs>(args: SelectSubset<T, ImpactReportUpdateArgs<ExtArgs>>): Prisma__ImpactReportClient<$Result.GetResult<Prisma.$ImpactReportPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ImpactReports.
     * @param {ImpactReportDeleteManyArgs} args - Arguments to filter ImpactReports to delete.
     * @example
     * // Delete a few ImpactReports
     * const { count } = await prisma.impactReport.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ImpactReportDeleteManyArgs>(args?: SelectSubset<T, ImpactReportDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ImpactReports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImpactReportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ImpactReports
     * const impactReport = await prisma.impactReport.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ImpactReportUpdateManyArgs>(args: SelectSubset<T, ImpactReportUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ImpactReports and returns the data updated in the database.
     * @param {ImpactReportUpdateManyAndReturnArgs} args - Arguments to update many ImpactReports.
     * @example
     * // Update many ImpactReports
     * const impactReport = await prisma.impactReport.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ImpactReports and only return the `id`
     * const impactReportWithIdOnly = await prisma.impactReport.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ImpactReportUpdateManyAndReturnArgs>(args: SelectSubset<T, ImpactReportUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImpactReportPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ImpactReport.
     * @param {ImpactReportUpsertArgs} args - Arguments to update or create a ImpactReport.
     * @example
     * // Update or create a ImpactReport
     * const impactReport = await prisma.impactReport.upsert({
     *   create: {
     *     // ... data to create a ImpactReport
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ImpactReport we want to update
     *   }
     * })
     */
    upsert<T extends ImpactReportUpsertArgs>(args: SelectSubset<T, ImpactReportUpsertArgs<ExtArgs>>): Prisma__ImpactReportClient<$Result.GetResult<Prisma.$ImpactReportPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ImpactReports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImpactReportCountArgs} args - Arguments to filter ImpactReports to count.
     * @example
     * // Count the number of ImpactReports
     * const count = await prisma.impactReport.count({
     *   where: {
     *     // ... the filter for the ImpactReports we want to count
     *   }
     * })
    **/
    count<T extends ImpactReportCountArgs>(
      args?: Subset<T, ImpactReportCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ImpactReportCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ImpactReport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImpactReportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ImpactReportAggregateArgs>(args: Subset<T, ImpactReportAggregateArgs>): Prisma.PrismaPromise<GetImpactReportAggregateType<T>>

    /**
     * Group by ImpactReport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImpactReportGroupByArgs} args - Group by arguments.
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
      T extends ImpactReportGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ImpactReportGroupByArgs['orderBy'] }
        : { orderBy?: ImpactReportGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ImpactReportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetImpactReportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ImpactReport model
   */
  readonly fields: ImpactReportFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ImpactReport.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ImpactReportClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    donor<T extends DonorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DonorDefaultArgs<ExtArgs>>): Prisma__DonorClient<$Result.GetResult<Prisma.$DonorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ImpactReport model
   */
  interface ImpactReportFieldRefs {
    readonly id: FieldRef<"ImpactReport", 'Int'>
    readonly donorId: FieldRef<"ImpactReport", 'Int'>
    readonly title: FieldRef<"ImpactReport", 'String'>
    readonly description: FieldRef<"ImpactReport", 'String'>
    readonly savedFoodKg: FieldRef<"ImpactReport", 'Float'>
    readonly createdAt: FieldRef<"ImpactReport", 'DateTime'>
    readonly updatedAt: FieldRef<"ImpactReport", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ImpactReport findUnique
   */
  export type ImpactReportFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImpactReport
     */
    select?: ImpactReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImpactReport
     */
    omit?: ImpactReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImpactReportInclude<ExtArgs> | null
    /**
     * Filter, which ImpactReport to fetch.
     */
    where: ImpactReportWhereUniqueInput
  }

  /**
   * ImpactReport findUniqueOrThrow
   */
  export type ImpactReportFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImpactReport
     */
    select?: ImpactReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImpactReport
     */
    omit?: ImpactReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImpactReportInclude<ExtArgs> | null
    /**
     * Filter, which ImpactReport to fetch.
     */
    where: ImpactReportWhereUniqueInput
  }

  /**
   * ImpactReport findFirst
   */
  export type ImpactReportFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImpactReport
     */
    select?: ImpactReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImpactReport
     */
    omit?: ImpactReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImpactReportInclude<ExtArgs> | null
    /**
     * Filter, which ImpactReport to fetch.
     */
    where?: ImpactReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImpactReports to fetch.
     */
    orderBy?: ImpactReportOrderByWithRelationInput | ImpactReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ImpactReports.
     */
    cursor?: ImpactReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImpactReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImpactReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ImpactReports.
     */
    distinct?: ImpactReportScalarFieldEnum | ImpactReportScalarFieldEnum[]
  }

  /**
   * ImpactReport findFirstOrThrow
   */
  export type ImpactReportFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImpactReport
     */
    select?: ImpactReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImpactReport
     */
    omit?: ImpactReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImpactReportInclude<ExtArgs> | null
    /**
     * Filter, which ImpactReport to fetch.
     */
    where?: ImpactReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImpactReports to fetch.
     */
    orderBy?: ImpactReportOrderByWithRelationInput | ImpactReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ImpactReports.
     */
    cursor?: ImpactReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImpactReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImpactReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ImpactReports.
     */
    distinct?: ImpactReportScalarFieldEnum | ImpactReportScalarFieldEnum[]
  }

  /**
   * ImpactReport findMany
   */
  export type ImpactReportFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImpactReport
     */
    select?: ImpactReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImpactReport
     */
    omit?: ImpactReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImpactReportInclude<ExtArgs> | null
    /**
     * Filter, which ImpactReports to fetch.
     */
    where?: ImpactReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImpactReports to fetch.
     */
    orderBy?: ImpactReportOrderByWithRelationInput | ImpactReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ImpactReports.
     */
    cursor?: ImpactReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImpactReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImpactReports.
     */
    skip?: number
    distinct?: ImpactReportScalarFieldEnum | ImpactReportScalarFieldEnum[]
  }

  /**
   * ImpactReport create
   */
  export type ImpactReportCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImpactReport
     */
    select?: ImpactReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImpactReport
     */
    omit?: ImpactReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImpactReportInclude<ExtArgs> | null
    /**
     * The data needed to create a ImpactReport.
     */
    data: XOR<ImpactReportCreateInput, ImpactReportUncheckedCreateInput>
  }

  /**
   * ImpactReport createMany
   */
  export type ImpactReportCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ImpactReports.
     */
    data: ImpactReportCreateManyInput | ImpactReportCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ImpactReport createManyAndReturn
   */
  export type ImpactReportCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImpactReport
     */
    select?: ImpactReportSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ImpactReport
     */
    omit?: ImpactReportOmit<ExtArgs> | null
    /**
     * The data used to create many ImpactReports.
     */
    data: ImpactReportCreateManyInput | ImpactReportCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImpactReportIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ImpactReport update
   */
  export type ImpactReportUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImpactReport
     */
    select?: ImpactReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImpactReport
     */
    omit?: ImpactReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImpactReportInclude<ExtArgs> | null
    /**
     * The data needed to update a ImpactReport.
     */
    data: XOR<ImpactReportUpdateInput, ImpactReportUncheckedUpdateInput>
    /**
     * Choose, which ImpactReport to update.
     */
    where: ImpactReportWhereUniqueInput
  }

  /**
   * ImpactReport updateMany
   */
  export type ImpactReportUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ImpactReports.
     */
    data: XOR<ImpactReportUpdateManyMutationInput, ImpactReportUncheckedUpdateManyInput>
    /**
     * Filter which ImpactReports to update
     */
    where?: ImpactReportWhereInput
    /**
     * Limit how many ImpactReports to update.
     */
    limit?: number
  }

  /**
   * ImpactReport updateManyAndReturn
   */
  export type ImpactReportUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImpactReport
     */
    select?: ImpactReportSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ImpactReport
     */
    omit?: ImpactReportOmit<ExtArgs> | null
    /**
     * The data used to update ImpactReports.
     */
    data: XOR<ImpactReportUpdateManyMutationInput, ImpactReportUncheckedUpdateManyInput>
    /**
     * Filter which ImpactReports to update
     */
    where?: ImpactReportWhereInput
    /**
     * Limit how many ImpactReports to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImpactReportIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ImpactReport upsert
   */
  export type ImpactReportUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImpactReport
     */
    select?: ImpactReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImpactReport
     */
    omit?: ImpactReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImpactReportInclude<ExtArgs> | null
    /**
     * The filter to search for the ImpactReport to update in case it exists.
     */
    where: ImpactReportWhereUniqueInput
    /**
     * In case the ImpactReport found by the `where` argument doesn't exist, create a new ImpactReport with this data.
     */
    create: XOR<ImpactReportCreateInput, ImpactReportUncheckedCreateInput>
    /**
     * In case the ImpactReport was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ImpactReportUpdateInput, ImpactReportUncheckedUpdateInput>
  }

  /**
   * ImpactReport delete
   */
  export type ImpactReportDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImpactReport
     */
    select?: ImpactReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImpactReport
     */
    omit?: ImpactReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImpactReportInclude<ExtArgs> | null
    /**
     * Filter which ImpactReport to delete.
     */
    where: ImpactReportWhereUniqueInput
  }

  /**
   * ImpactReport deleteMany
   */
  export type ImpactReportDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ImpactReports to delete
     */
    where?: ImpactReportWhereInput
    /**
     * Limit how many ImpactReports to delete.
     */
    limit?: number
  }

  /**
   * ImpactReport without action
   */
  export type ImpactReportDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImpactReport
     */
    select?: ImpactReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImpactReport
     */
    omit?: ImpactReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImpactReportInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const DonorScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    phone: 'phone',
    address: 'address',
    cnpj: 'cnpj',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DonorScalarFieldEnum = (typeof DonorScalarFieldEnum)[keyof typeof DonorScalarFieldEnum]


  export const BeneficiaryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    phone: 'phone',
    address: 'address',
    cpf: 'cpf',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BeneficiaryScalarFieldEnum = (typeof BeneficiaryScalarFieldEnum)[keyof typeof BeneficiaryScalarFieldEnum]


  export const CollectionPointsScalarFieldEnum: {
    id: 'id',
    beneficiaryId: 'beneficiaryId',
    campaigsAwarenessId: 'campaigsAwarenessId',
    name: 'name',
    address: 'address',
    phone: 'phone',
    hoursOfOperetion: 'hoursOfOperetion',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CollectionPointsScalarFieldEnum = (typeof CollectionPointsScalarFieldEnum)[keyof typeof CollectionPointsScalarFieldEnum]


  export const CampaigsAwarenessScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    startDate: 'startDate',
    endDate: 'endDate',
    loction: 'loction',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CampaigsAwarenessScalarFieldEnum = (typeof CampaigsAwarenessScalarFieldEnum)[keyof typeof CampaigsAwarenessScalarFieldEnum]


  export const NotificationEngagementScalarFieldEnum: {
    id: 'id',
    foodId: 'foodId',
    beneficiaryId: 'beneficiaryId',
    NotificationType: 'NotificationType',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type NotificationEngagementScalarFieldEnum = (typeof NotificationEngagementScalarFieldEnum)[keyof typeof NotificationEngagementScalarFieldEnum]


  export const FoodScalarFieldEnum: {
    id: 'id',
    donorId: 'donorId',
    collectionPointsId: 'collectionPointsId',
    AwarenessId: 'AwarenessId',
    name: 'name',
    validity: 'validity',
    quantity: 'quantity',
    category: 'category',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FoodScalarFieldEnum = (typeof FoodScalarFieldEnum)[keyof typeof FoodScalarFieldEnum]


  export const ImpactReportScalarFieldEnum: {
    id: 'id',
    donorId: 'donorId',
    title: 'title',
    description: 'description',
    savedFoodKg: 'savedFoodKg',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ImpactReportScalarFieldEnum = (typeof ImpactReportScalarFieldEnum)[keyof typeof ImpactReportScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'NotificationType'
   */
  export type EnumNotificationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NotificationType'>
    


  /**
   * Reference to a field of type 'NotificationType[]'
   */
  export type ListEnumNotificationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NotificationType[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type DonorWhereInput = {
    AND?: DonorWhereInput | DonorWhereInput[]
    OR?: DonorWhereInput[]
    NOT?: DonorWhereInput | DonorWhereInput[]
    id?: IntFilter<"Donor"> | number
    name?: StringFilter<"Donor"> | string
    email?: StringFilter<"Donor"> | string
    phone?: StringFilter<"Donor"> | string
    address?: StringFilter<"Donor"> | string
    cnpj?: StringFilter<"Donor"> | string
    createdAt?: DateTimeFilter<"Donor"> | Date | string
    updatedAt?: DateTimeFilter<"Donor"> | Date | string
    Food?: FoodListRelationFilter
    ImpactReport?: ImpactReportListRelationFilter
  }

  export type DonorOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    cnpj?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Food?: FoodOrderByRelationAggregateInput
    ImpactReport?: ImpactReportOrderByRelationAggregateInput
  }

  export type DonorWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DonorWhereInput | DonorWhereInput[]
    OR?: DonorWhereInput[]
    NOT?: DonorWhereInput | DonorWhereInput[]
    name?: StringFilter<"Donor"> | string
    email?: StringFilter<"Donor"> | string
    phone?: StringFilter<"Donor"> | string
    address?: StringFilter<"Donor"> | string
    cnpj?: StringFilter<"Donor"> | string
    createdAt?: DateTimeFilter<"Donor"> | Date | string
    updatedAt?: DateTimeFilter<"Donor"> | Date | string
    Food?: FoodListRelationFilter
    ImpactReport?: ImpactReportListRelationFilter
  }, "id">

  export type DonorOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    cnpj?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DonorCountOrderByAggregateInput
    _avg?: DonorAvgOrderByAggregateInput
    _max?: DonorMaxOrderByAggregateInput
    _min?: DonorMinOrderByAggregateInput
    _sum?: DonorSumOrderByAggregateInput
  }

  export type DonorScalarWhereWithAggregatesInput = {
    AND?: DonorScalarWhereWithAggregatesInput | DonorScalarWhereWithAggregatesInput[]
    OR?: DonorScalarWhereWithAggregatesInput[]
    NOT?: DonorScalarWhereWithAggregatesInput | DonorScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Donor"> | number
    name?: StringWithAggregatesFilter<"Donor"> | string
    email?: StringWithAggregatesFilter<"Donor"> | string
    phone?: StringWithAggregatesFilter<"Donor"> | string
    address?: StringWithAggregatesFilter<"Donor"> | string
    cnpj?: StringWithAggregatesFilter<"Donor"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Donor"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Donor"> | Date | string
  }

  export type BeneficiaryWhereInput = {
    AND?: BeneficiaryWhereInput | BeneficiaryWhereInput[]
    OR?: BeneficiaryWhereInput[]
    NOT?: BeneficiaryWhereInput | BeneficiaryWhereInput[]
    id?: IntFilter<"Beneficiary"> | number
    name?: StringFilter<"Beneficiary"> | string
    email?: StringFilter<"Beneficiary"> | string
    phone?: StringFilter<"Beneficiary"> | string
    address?: StringFilter<"Beneficiary"> | string
    cpf?: StringFilter<"Beneficiary"> | string
    createdAt?: DateTimeFilter<"Beneficiary"> | Date | string
    updatedAt?: DateTimeFilter<"Beneficiary"> | Date | string
    collectionPoints?: CollectionPointsListRelationFilter
    notificationEngagements?: NotificationEngagementListRelationFilter
  }

  export type BeneficiaryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    cpf?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    collectionPoints?: CollectionPointsOrderByRelationAggregateInput
    notificationEngagements?: NotificationEngagementOrderByRelationAggregateInput
  }

  export type BeneficiaryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BeneficiaryWhereInput | BeneficiaryWhereInput[]
    OR?: BeneficiaryWhereInput[]
    NOT?: BeneficiaryWhereInput | BeneficiaryWhereInput[]
    name?: StringFilter<"Beneficiary"> | string
    email?: StringFilter<"Beneficiary"> | string
    phone?: StringFilter<"Beneficiary"> | string
    address?: StringFilter<"Beneficiary"> | string
    cpf?: StringFilter<"Beneficiary"> | string
    createdAt?: DateTimeFilter<"Beneficiary"> | Date | string
    updatedAt?: DateTimeFilter<"Beneficiary"> | Date | string
    collectionPoints?: CollectionPointsListRelationFilter
    notificationEngagements?: NotificationEngagementListRelationFilter
  }, "id">

  export type BeneficiaryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    cpf?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BeneficiaryCountOrderByAggregateInput
    _avg?: BeneficiaryAvgOrderByAggregateInput
    _max?: BeneficiaryMaxOrderByAggregateInput
    _min?: BeneficiaryMinOrderByAggregateInput
    _sum?: BeneficiarySumOrderByAggregateInput
  }

  export type BeneficiaryScalarWhereWithAggregatesInput = {
    AND?: BeneficiaryScalarWhereWithAggregatesInput | BeneficiaryScalarWhereWithAggregatesInput[]
    OR?: BeneficiaryScalarWhereWithAggregatesInput[]
    NOT?: BeneficiaryScalarWhereWithAggregatesInput | BeneficiaryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Beneficiary"> | number
    name?: StringWithAggregatesFilter<"Beneficiary"> | string
    email?: StringWithAggregatesFilter<"Beneficiary"> | string
    phone?: StringWithAggregatesFilter<"Beneficiary"> | string
    address?: StringWithAggregatesFilter<"Beneficiary"> | string
    cpf?: StringWithAggregatesFilter<"Beneficiary"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Beneficiary"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Beneficiary"> | Date | string
  }

  export type CollectionPointsWhereInput = {
    AND?: CollectionPointsWhereInput | CollectionPointsWhereInput[]
    OR?: CollectionPointsWhereInput[]
    NOT?: CollectionPointsWhereInput | CollectionPointsWhereInput[]
    id?: IntFilter<"CollectionPoints"> | number
    beneficiaryId?: IntFilter<"CollectionPoints"> | number
    campaigsAwarenessId?: IntFilter<"CollectionPoints"> | number
    name?: StringFilter<"CollectionPoints"> | string
    address?: StringFilter<"CollectionPoints"> | string
    phone?: StringFilter<"CollectionPoints"> | string
    hoursOfOperetion?: DateTimeFilter<"CollectionPoints"> | Date | string
    createdAt?: DateTimeFilter<"CollectionPoints"> | Date | string
    updatedAt?: DateTimeFilter<"CollectionPoints"> | Date | string
    food?: FoodListRelationFilter
    beneficiary?: XOR<BeneficiaryScalarRelationFilter, BeneficiaryWhereInput>
    campaigsAwareness?: XOR<CampaigsAwarenessScalarRelationFilter, CampaigsAwarenessWhereInput>
  }

  export type CollectionPointsOrderByWithRelationInput = {
    id?: SortOrder
    beneficiaryId?: SortOrder
    campaigsAwarenessId?: SortOrder
    name?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    hoursOfOperetion?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    food?: FoodOrderByRelationAggregateInput
    beneficiary?: BeneficiaryOrderByWithRelationInput
    campaigsAwareness?: CampaigsAwarenessOrderByWithRelationInput
  }

  export type CollectionPointsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CollectionPointsWhereInput | CollectionPointsWhereInput[]
    OR?: CollectionPointsWhereInput[]
    NOT?: CollectionPointsWhereInput | CollectionPointsWhereInput[]
    beneficiaryId?: IntFilter<"CollectionPoints"> | number
    campaigsAwarenessId?: IntFilter<"CollectionPoints"> | number
    name?: StringFilter<"CollectionPoints"> | string
    address?: StringFilter<"CollectionPoints"> | string
    phone?: StringFilter<"CollectionPoints"> | string
    hoursOfOperetion?: DateTimeFilter<"CollectionPoints"> | Date | string
    createdAt?: DateTimeFilter<"CollectionPoints"> | Date | string
    updatedAt?: DateTimeFilter<"CollectionPoints"> | Date | string
    food?: FoodListRelationFilter
    beneficiary?: XOR<BeneficiaryScalarRelationFilter, BeneficiaryWhereInput>
    campaigsAwareness?: XOR<CampaigsAwarenessScalarRelationFilter, CampaigsAwarenessWhereInput>
  }, "id">

  export type CollectionPointsOrderByWithAggregationInput = {
    id?: SortOrder
    beneficiaryId?: SortOrder
    campaigsAwarenessId?: SortOrder
    name?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    hoursOfOperetion?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CollectionPointsCountOrderByAggregateInput
    _avg?: CollectionPointsAvgOrderByAggregateInput
    _max?: CollectionPointsMaxOrderByAggregateInput
    _min?: CollectionPointsMinOrderByAggregateInput
    _sum?: CollectionPointsSumOrderByAggregateInput
  }

  export type CollectionPointsScalarWhereWithAggregatesInput = {
    AND?: CollectionPointsScalarWhereWithAggregatesInput | CollectionPointsScalarWhereWithAggregatesInput[]
    OR?: CollectionPointsScalarWhereWithAggregatesInput[]
    NOT?: CollectionPointsScalarWhereWithAggregatesInput | CollectionPointsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CollectionPoints"> | number
    beneficiaryId?: IntWithAggregatesFilter<"CollectionPoints"> | number
    campaigsAwarenessId?: IntWithAggregatesFilter<"CollectionPoints"> | number
    name?: StringWithAggregatesFilter<"CollectionPoints"> | string
    address?: StringWithAggregatesFilter<"CollectionPoints"> | string
    phone?: StringWithAggregatesFilter<"CollectionPoints"> | string
    hoursOfOperetion?: DateTimeWithAggregatesFilter<"CollectionPoints"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"CollectionPoints"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CollectionPoints"> | Date | string
  }

  export type CampaigsAwarenessWhereInput = {
    AND?: CampaigsAwarenessWhereInput | CampaigsAwarenessWhereInput[]
    OR?: CampaigsAwarenessWhereInput[]
    NOT?: CampaigsAwarenessWhereInput | CampaigsAwarenessWhereInput[]
    id?: IntFilter<"CampaigsAwareness"> | number
    name?: StringFilter<"CampaigsAwareness"> | string
    description?: StringFilter<"CampaigsAwareness"> | string
    startDate?: DateTimeFilter<"CampaigsAwareness"> | Date | string
    endDate?: DateTimeFilter<"CampaigsAwareness"> | Date | string
    loction?: StringFilter<"CampaigsAwareness"> | string
    createdAt?: DateTimeFilter<"CampaigsAwareness"> | Date | string
    updatedAt?: DateTimeFilter<"CampaigsAwareness"> | Date | string
    food?: FoodListRelationFilter
    collectionPoints?: CollectionPointsListRelationFilter
  }

  export type CampaigsAwarenessOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    loction?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    food?: FoodOrderByRelationAggregateInput
    collectionPoints?: CollectionPointsOrderByRelationAggregateInput
  }

  export type CampaigsAwarenessWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CampaigsAwarenessWhereInput | CampaigsAwarenessWhereInput[]
    OR?: CampaigsAwarenessWhereInput[]
    NOT?: CampaigsAwarenessWhereInput | CampaigsAwarenessWhereInput[]
    name?: StringFilter<"CampaigsAwareness"> | string
    description?: StringFilter<"CampaigsAwareness"> | string
    startDate?: DateTimeFilter<"CampaigsAwareness"> | Date | string
    endDate?: DateTimeFilter<"CampaigsAwareness"> | Date | string
    loction?: StringFilter<"CampaigsAwareness"> | string
    createdAt?: DateTimeFilter<"CampaigsAwareness"> | Date | string
    updatedAt?: DateTimeFilter<"CampaigsAwareness"> | Date | string
    food?: FoodListRelationFilter
    collectionPoints?: CollectionPointsListRelationFilter
  }, "id">

  export type CampaigsAwarenessOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    loction?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CampaigsAwarenessCountOrderByAggregateInput
    _avg?: CampaigsAwarenessAvgOrderByAggregateInput
    _max?: CampaigsAwarenessMaxOrderByAggregateInput
    _min?: CampaigsAwarenessMinOrderByAggregateInput
    _sum?: CampaigsAwarenessSumOrderByAggregateInput
  }

  export type CampaigsAwarenessScalarWhereWithAggregatesInput = {
    AND?: CampaigsAwarenessScalarWhereWithAggregatesInput | CampaigsAwarenessScalarWhereWithAggregatesInput[]
    OR?: CampaigsAwarenessScalarWhereWithAggregatesInput[]
    NOT?: CampaigsAwarenessScalarWhereWithAggregatesInput | CampaigsAwarenessScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CampaigsAwareness"> | number
    name?: StringWithAggregatesFilter<"CampaigsAwareness"> | string
    description?: StringWithAggregatesFilter<"CampaigsAwareness"> | string
    startDate?: DateTimeWithAggregatesFilter<"CampaigsAwareness"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"CampaigsAwareness"> | Date | string
    loction?: StringWithAggregatesFilter<"CampaigsAwareness"> | string
    createdAt?: DateTimeWithAggregatesFilter<"CampaigsAwareness"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CampaigsAwareness"> | Date | string
  }

  export type NotificationEngagementWhereInput = {
    AND?: NotificationEngagementWhereInput | NotificationEngagementWhereInput[]
    OR?: NotificationEngagementWhereInput[]
    NOT?: NotificationEngagementWhereInput | NotificationEngagementWhereInput[]
    id?: IntFilter<"NotificationEngagement"> | number
    foodId?: IntFilter<"NotificationEngagement"> | number
    beneficiaryId?: IntFilter<"NotificationEngagement"> | number
    NotificationType?: EnumNotificationTypeFilter<"NotificationEngagement"> | $Enums.NotificationType
    createdAt?: DateTimeFilter<"NotificationEngagement"> | Date | string
    updatedAt?: DateTimeFilter<"NotificationEngagement"> | Date | string
    food?: XOR<FoodScalarRelationFilter, FoodWhereInput>
    beneficiary?: XOR<BeneficiaryScalarRelationFilter, BeneficiaryWhereInput>
  }

  export type NotificationEngagementOrderByWithRelationInput = {
    id?: SortOrder
    foodId?: SortOrder
    beneficiaryId?: SortOrder
    NotificationType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    food?: FoodOrderByWithRelationInput
    beneficiary?: BeneficiaryOrderByWithRelationInput
  }

  export type NotificationEngagementWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: NotificationEngagementWhereInput | NotificationEngagementWhereInput[]
    OR?: NotificationEngagementWhereInput[]
    NOT?: NotificationEngagementWhereInput | NotificationEngagementWhereInput[]
    foodId?: IntFilter<"NotificationEngagement"> | number
    beneficiaryId?: IntFilter<"NotificationEngagement"> | number
    NotificationType?: EnumNotificationTypeFilter<"NotificationEngagement"> | $Enums.NotificationType
    createdAt?: DateTimeFilter<"NotificationEngagement"> | Date | string
    updatedAt?: DateTimeFilter<"NotificationEngagement"> | Date | string
    food?: XOR<FoodScalarRelationFilter, FoodWhereInput>
    beneficiary?: XOR<BeneficiaryScalarRelationFilter, BeneficiaryWhereInput>
  }, "id">

  export type NotificationEngagementOrderByWithAggregationInput = {
    id?: SortOrder
    foodId?: SortOrder
    beneficiaryId?: SortOrder
    NotificationType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: NotificationEngagementCountOrderByAggregateInput
    _avg?: NotificationEngagementAvgOrderByAggregateInput
    _max?: NotificationEngagementMaxOrderByAggregateInput
    _min?: NotificationEngagementMinOrderByAggregateInput
    _sum?: NotificationEngagementSumOrderByAggregateInput
  }

  export type NotificationEngagementScalarWhereWithAggregatesInput = {
    AND?: NotificationEngagementScalarWhereWithAggregatesInput | NotificationEngagementScalarWhereWithAggregatesInput[]
    OR?: NotificationEngagementScalarWhereWithAggregatesInput[]
    NOT?: NotificationEngagementScalarWhereWithAggregatesInput | NotificationEngagementScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"NotificationEngagement"> | number
    foodId?: IntWithAggregatesFilter<"NotificationEngagement"> | number
    beneficiaryId?: IntWithAggregatesFilter<"NotificationEngagement"> | number
    NotificationType?: EnumNotificationTypeWithAggregatesFilter<"NotificationEngagement"> | $Enums.NotificationType
    createdAt?: DateTimeWithAggregatesFilter<"NotificationEngagement"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"NotificationEngagement"> | Date | string
  }

  export type FoodWhereInput = {
    AND?: FoodWhereInput | FoodWhereInput[]
    OR?: FoodWhereInput[]
    NOT?: FoodWhereInput | FoodWhereInput[]
    id?: IntFilter<"Food"> | number
    donorId?: IntFilter<"Food"> | number
    collectionPointsId?: IntFilter<"Food"> | number
    AwarenessId?: IntFilter<"Food"> | number
    name?: StringFilter<"Food"> | string
    validity?: DateTimeFilter<"Food"> | Date | string
    quantity?: IntFilter<"Food"> | number
    category?: StringFilter<"Food"> | string
    description?: StringFilter<"Food"> | string
    createdAt?: DateTimeFilter<"Food"> | Date | string
    updatedAt?: DateTimeFilter<"Food"> | Date | string
    donor?: XOR<DonorScalarRelationFilter, DonorWhereInput>
    collectionPoints?: XOR<CollectionPointsScalarRelationFilter, CollectionPointsWhereInput>
    Awareness?: XOR<CampaigsAwarenessScalarRelationFilter, CampaigsAwarenessWhereInput>
    notificationEngagements?: NotificationEngagementListRelationFilter
  }

  export type FoodOrderByWithRelationInput = {
    id?: SortOrder
    donorId?: SortOrder
    collectionPointsId?: SortOrder
    AwarenessId?: SortOrder
    name?: SortOrder
    validity?: SortOrder
    quantity?: SortOrder
    category?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    donor?: DonorOrderByWithRelationInput
    collectionPoints?: CollectionPointsOrderByWithRelationInput
    Awareness?: CampaigsAwarenessOrderByWithRelationInput
    notificationEngagements?: NotificationEngagementOrderByRelationAggregateInput
  }

  export type FoodWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FoodWhereInput | FoodWhereInput[]
    OR?: FoodWhereInput[]
    NOT?: FoodWhereInput | FoodWhereInput[]
    donorId?: IntFilter<"Food"> | number
    collectionPointsId?: IntFilter<"Food"> | number
    AwarenessId?: IntFilter<"Food"> | number
    name?: StringFilter<"Food"> | string
    validity?: DateTimeFilter<"Food"> | Date | string
    quantity?: IntFilter<"Food"> | number
    category?: StringFilter<"Food"> | string
    description?: StringFilter<"Food"> | string
    createdAt?: DateTimeFilter<"Food"> | Date | string
    updatedAt?: DateTimeFilter<"Food"> | Date | string
    donor?: XOR<DonorScalarRelationFilter, DonorWhereInput>
    collectionPoints?: XOR<CollectionPointsScalarRelationFilter, CollectionPointsWhereInput>
    Awareness?: XOR<CampaigsAwarenessScalarRelationFilter, CampaigsAwarenessWhereInput>
    notificationEngagements?: NotificationEngagementListRelationFilter
  }, "id">

  export type FoodOrderByWithAggregationInput = {
    id?: SortOrder
    donorId?: SortOrder
    collectionPointsId?: SortOrder
    AwarenessId?: SortOrder
    name?: SortOrder
    validity?: SortOrder
    quantity?: SortOrder
    category?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FoodCountOrderByAggregateInput
    _avg?: FoodAvgOrderByAggregateInput
    _max?: FoodMaxOrderByAggregateInput
    _min?: FoodMinOrderByAggregateInput
    _sum?: FoodSumOrderByAggregateInput
  }

  export type FoodScalarWhereWithAggregatesInput = {
    AND?: FoodScalarWhereWithAggregatesInput | FoodScalarWhereWithAggregatesInput[]
    OR?: FoodScalarWhereWithAggregatesInput[]
    NOT?: FoodScalarWhereWithAggregatesInput | FoodScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Food"> | number
    donorId?: IntWithAggregatesFilter<"Food"> | number
    collectionPointsId?: IntWithAggregatesFilter<"Food"> | number
    AwarenessId?: IntWithAggregatesFilter<"Food"> | number
    name?: StringWithAggregatesFilter<"Food"> | string
    validity?: DateTimeWithAggregatesFilter<"Food"> | Date | string
    quantity?: IntWithAggregatesFilter<"Food"> | number
    category?: StringWithAggregatesFilter<"Food"> | string
    description?: StringWithAggregatesFilter<"Food"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Food"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Food"> | Date | string
  }

  export type ImpactReportWhereInput = {
    AND?: ImpactReportWhereInput | ImpactReportWhereInput[]
    OR?: ImpactReportWhereInput[]
    NOT?: ImpactReportWhereInput | ImpactReportWhereInput[]
    id?: IntFilter<"ImpactReport"> | number
    donorId?: IntFilter<"ImpactReport"> | number
    title?: StringFilter<"ImpactReport"> | string
    description?: StringFilter<"ImpactReport"> | string
    savedFoodKg?: FloatFilter<"ImpactReport"> | number
    createdAt?: DateTimeFilter<"ImpactReport"> | Date | string
    updatedAt?: DateTimeFilter<"ImpactReport"> | Date | string
    donor?: XOR<DonorScalarRelationFilter, DonorWhereInput>
  }

  export type ImpactReportOrderByWithRelationInput = {
    id?: SortOrder
    donorId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    savedFoodKg?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    donor?: DonorOrderByWithRelationInput
  }

  export type ImpactReportWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ImpactReportWhereInput | ImpactReportWhereInput[]
    OR?: ImpactReportWhereInput[]
    NOT?: ImpactReportWhereInput | ImpactReportWhereInput[]
    donorId?: IntFilter<"ImpactReport"> | number
    title?: StringFilter<"ImpactReport"> | string
    description?: StringFilter<"ImpactReport"> | string
    savedFoodKg?: FloatFilter<"ImpactReport"> | number
    createdAt?: DateTimeFilter<"ImpactReport"> | Date | string
    updatedAt?: DateTimeFilter<"ImpactReport"> | Date | string
    donor?: XOR<DonorScalarRelationFilter, DonorWhereInput>
  }, "id">

  export type ImpactReportOrderByWithAggregationInput = {
    id?: SortOrder
    donorId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    savedFoodKg?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ImpactReportCountOrderByAggregateInput
    _avg?: ImpactReportAvgOrderByAggregateInput
    _max?: ImpactReportMaxOrderByAggregateInput
    _min?: ImpactReportMinOrderByAggregateInput
    _sum?: ImpactReportSumOrderByAggregateInput
  }

  export type ImpactReportScalarWhereWithAggregatesInput = {
    AND?: ImpactReportScalarWhereWithAggregatesInput | ImpactReportScalarWhereWithAggregatesInput[]
    OR?: ImpactReportScalarWhereWithAggregatesInput[]
    NOT?: ImpactReportScalarWhereWithAggregatesInput | ImpactReportScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ImpactReport"> | number
    donorId?: IntWithAggregatesFilter<"ImpactReport"> | number
    title?: StringWithAggregatesFilter<"ImpactReport"> | string
    description?: StringWithAggregatesFilter<"ImpactReport"> | string
    savedFoodKg?: FloatWithAggregatesFilter<"ImpactReport"> | number
    createdAt?: DateTimeWithAggregatesFilter<"ImpactReport"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ImpactReport"> | Date | string
  }

  export type DonorCreateInput = {
    name: string
    email: string
    phone: string
    address: string
    cnpj: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Food?: FoodCreateNestedManyWithoutDonorInput
    ImpactReport?: ImpactReportCreateNestedManyWithoutDonorInput
  }

  export type DonorUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    phone: string
    address: string
    cnpj: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Food?: FoodUncheckedCreateNestedManyWithoutDonorInput
    ImpactReport?: ImpactReportUncheckedCreateNestedManyWithoutDonorInput
  }

  export type DonorUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Food?: FoodUpdateManyWithoutDonorNestedInput
    ImpactReport?: ImpactReportUpdateManyWithoutDonorNestedInput
  }

  export type DonorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Food?: FoodUncheckedUpdateManyWithoutDonorNestedInput
    ImpactReport?: ImpactReportUncheckedUpdateManyWithoutDonorNestedInput
  }

  export type DonorCreateManyInput = {
    id?: number
    name: string
    email: string
    phone: string
    address: string
    cnpj: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DonorUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DonorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BeneficiaryCreateInput = {
    name: string
    email: string
    phone: string
    address: string
    cpf: string
    createdAt?: Date | string
    updatedAt?: Date | string
    collectionPoints?: CollectionPointsCreateNestedManyWithoutBeneficiaryInput
    notificationEngagements?: NotificationEngagementCreateNestedManyWithoutBeneficiaryInput
  }

  export type BeneficiaryUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    phone: string
    address: string
    cpf: string
    createdAt?: Date | string
    updatedAt?: Date | string
    collectionPoints?: CollectionPointsUncheckedCreateNestedManyWithoutBeneficiaryInput
    notificationEngagements?: NotificationEngagementUncheckedCreateNestedManyWithoutBeneficiaryInput
  }

  export type BeneficiaryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    collectionPoints?: CollectionPointsUpdateManyWithoutBeneficiaryNestedInput
    notificationEngagements?: NotificationEngagementUpdateManyWithoutBeneficiaryNestedInput
  }

  export type BeneficiaryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    collectionPoints?: CollectionPointsUncheckedUpdateManyWithoutBeneficiaryNestedInput
    notificationEngagements?: NotificationEngagementUncheckedUpdateManyWithoutBeneficiaryNestedInput
  }

  export type BeneficiaryCreateManyInput = {
    id?: number
    name: string
    email: string
    phone: string
    address: string
    cpf: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BeneficiaryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BeneficiaryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CollectionPointsCreateInput = {
    name: string
    address: string
    phone: string
    hoursOfOperetion: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    food?: FoodCreateNestedManyWithoutCollectionPointsInput
    beneficiary: BeneficiaryCreateNestedOneWithoutCollectionPointsInput
    campaigsAwareness: CampaigsAwarenessCreateNestedOneWithoutCollectionPointsInput
  }

  export type CollectionPointsUncheckedCreateInput = {
    id?: number
    beneficiaryId: number
    campaigsAwarenessId: number
    name: string
    address: string
    phone: string
    hoursOfOperetion: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    food?: FoodUncheckedCreateNestedManyWithoutCollectionPointsInput
  }

  export type CollectionPointsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    hoursOfOperetion?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    food?: FoodUpdateManyWithoutCollectionPointsNestedInput
    beneficiary?: BeneficiaryUpdateOneRequiredWithoutCollectionPointsNestedInput
    campaigsAwareness?: CampaigsAwarenessUpdateOneRequiredWithoutCollectionPointsNestedInput
  }

  export type CollectionPointsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    beneficiaryId?: IntFieldUpdateOperationsInput | number
    campaigsAwarenessId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    hoursOfOperetion?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    food?: FoodUncheckedUpdateManyWithoutCollectionPointsNestedInput
  }

  export type CollectionPointsCreateManyInput = {
    id?: number
    beneficiaryId: number
    campaigsAwarenessId: number
    name: string
    address: string
    phone: string
    hoursOfOperetion: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CollectionPointsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    hoursOfOperetion?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CollectionPointsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    beneficiaryId?: IntFieldUpdateOperationsInput | number
    campaigsAwarenessId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    hoursOfOperetion?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CampaigsAwarenessCreateInput = {
    name: string
    description: string
    startDate: Date | string
    endDate: Date | string
    loction: string
    createdAt?: Date | string
    updatedAt?: Date | string
    food?: FoodCreateNestedManyWithoutAwarenessInput
    collectionPoints?: CollectionPointsCreateNestedManyWithoutCampaigsAwarenessInput
  }

  export type CampaigsAwarenessUncheckedCreateInput = {
    id?: number
    name: string
    description: string
    startDate: Date | string
    endDate: Date | string
    loction: string
    createdAt?: Date | string
    updatedAt?: Date | string
    food?: FoodUncheckedCreateNestedManyWithoutAwarenessInput
    collectionPoints?: CollectionPointsUncheckedCreateNestedManyWithoutCampaigsAwarenessInput
  }

  export type CampaigsAwarenessUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    loction?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    food?: FoodUpdateManyWithoutAwarenessNestedInput
    collectionPoints?: CollectionPointsUpdateManyWithoutCampaigsAwarenessNestedInput
  }

  export type CampaigsAwarenessUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    loction?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    food?: FoodUncheckedUpdateManyWithoutAwarenessNestedInput
    collectionPoints?: CollectionPointsUncheckedUpdateManyWithoutCampaigsAwarenessNestedInput
  }

  export type CampaigsAwarenessCreateManyInput = {
    id?: number
    name: string
    description: string
    startDate: Date | string
    endDate: Date | string
    loction: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CampaigsAwarenessUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    loction?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CampaigsAwarenessUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    loction?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationEngagementCreateInput = {
    NotificationType: $Enums.NotificationType
    createdAt?: Date | string
    updatedAt?: Date | string
    food: FoodCreateNestedOneWithoutNotificationEngagementsInput
    beneficiary: BeneficiaryCreateNestedOneWithoutNotificationEngagementsInput
  }

  export type NotificationEngagementUncheckedCreateInput = {
    id?: number
    foodId: number
    beneficiaryId: number
    NotificationType: $Enums.NotificationType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationEngagementUpdateInput = {
    NotificationType?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    food?: FoodUpdateOneRequiredWithoutNotificationEngagementsNestedInput
    beneficiary?: BeneficiaryUpdateOneRequiredWithoutNotificationEngagementsNestedInput
  }

  export type NotificationEngagementUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    foodId?: IntFieldUpdateOperationsInput | number
    beneficiaryId?: IntFieldUpdateOperationsInput | number
    NotificationType?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationEngagementCreateManyInput = {
    id?: number
    foodId: number
    beneficiaryId: number
    NotificationType: $Enums.NotificationType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationEngagementUpdateManyMutationInput = {
    NotificationType?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationEngagementUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    foodId?: IntFieldUpdateOperationsInput | number
    beneficiaryId?: IntFieldUpdateOperationsInput | number
    NotificationType?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FoodCreateInput = {
    name: string
    validity: Date | string
    quantity: number
    category: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    donor: DonorCreateNestedOneWithoutFoodInput
    collectionPoints: CollectionPointsCreateNestedOneWithoutFoodInput
    Awareness: CampaigsAwarenessCreateNestedOneWithoutFoodInput
    notificationEngagements?: NotificationEngagementCreateNestedManyWithoutFoodInput
  }

  export type FoodUncheckedCreateInput = {
    id?: number
    donorId: number
    collectionPointsId: number
    AwarenessId: number
    name: string
    validity: Date | string
    quantity: number
    category: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    notificationEngagements?: NotificationEngagementUncheckedCreateNestedManyWithoutFoodInput
  }

  export type FoodUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    validity?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    donor?: DonorUpdateOneRequiredWithoutFoodNestedInput
    collectionPoints?: CollectionPointsUpdateOneRequiredWithoutFoodNestedInput
    Awareness?: CampaigsAwarenessUpdateOneRequiredWithoutFoodNestedInput
    notificationEngagements?: NotificationEngagementUpdateManyWithoutFoodNestedInput
  }

  export type FoodUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    donorId?: IntFieldUpdateOperationsInput | number
    collectionPointsId?: IntFieldUpdateOperationsInput | number
    AwarenessId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    validity?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notificationEngagements?: NotificationEngagementUncheckedUpdateManyWithoutFoodNestedInput
  }

  export type FoodCreateManyInput = {
    id?: number
    donorId: number
    collectionPointsId: number
    AwarenessId: number
    name: string
    validity: Date | string
    quantity: number
    category: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FoodUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    validity?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FoodUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    donorId?: IntFieldUpdateOperationsInput | number
    collectionPointsId?: IntFieldUpdateOperationsInput | number
    AwarenessId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    validity?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImpactReportCreateInput = {
    title: string
    description: string
    savedFoodKg: number
    createdAt?: Date | string
    updatedAt?: Date | string
    donor: DonorCreateNestedOneWithoutImpactReportInput
  }

  export type ImpactReportUncheckedCreateInput = {
    id?: number
    donorId: number
    title: string
    description: string
    savedFoodKg: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ImpactReportUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    savedFoodKg?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    donor?: DonorUpdateOneRequiredWithoutImpactReportNestedInput
  }

  export type ImpactReportUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    donorId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    savedFoodKg?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImpactReportCreateManyInput = {
    id?: number
    donorId: number
    title: string
    description: string
    savedFoodKg: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ImpactReportUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    savedFoodKg?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImpactReportUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    donorId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    savedFoodKg?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type FoodListRelationFilter = {
    every?: FoodWhereInput
    some?: FoodWhereInput
    none?: FoodWhereInput
  }

  export type ImpactReportListRelationFilter = {
    every?: ImpactReportWhereInput
    some?: ImpactReportWhereInput
    none?: ImpactReportWhereInput
  }

  export type FoodOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ImpactReportOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DonorCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    cnpj?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DonorAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DonorMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    cnpj?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DonorMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    cnpj?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DonorSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type CollectionPointsListRelationFilter = {
    every?: CollectionPointsWhereInput
    some?: CollectionPointsWhereInput
    none?: CollectionPointsWhereInput
  }

  export type NotificationEngagementListRelationFilter = {
    every?: NotificationEngagementWhereInput
    some?: NotificationEngagementWhereInput
    none?: NotificationEngagementWhereInput
  }

  export type CollectionPointsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NotificationEngagementOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BeneficiaryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    cpf?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BeneficiaryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BeneficiaryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    cpf?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BeneficiaryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    cpf?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BeneficiarySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BeneficiaryScalarRelationFilter = {
    is?: BeneficiaryWhereInput
    isNot?: BeneficiaryWhereInput
  }

  export type CampaigsAwarenessScalarRelationFilter = {
    is?: CampaigsAwarenessWhereInput
    isNot?: CampaigsAwarenessWhereInput
  }

  export type CollectionPointsCountOrderByAggregateInput = {
    id?: SortOrder
    beneficiaryId?: SortOrder
    campaigsAwarenessId?: SortOrder
    name?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    hoursOfOperetion?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CollectionPointsAvgOrderByAggregateInput = {
    id?: SortOrder
    beneficiaryId?: SortOrder
    campaigsAwarenessId?: SortOrder
  }

  export type CollectionPointsMaxOrderByAggregateInput = {
    id?: SortOrder
    beneficiaryId?: SortOrder
    campaigsAwarenessId?: SortOrder
    name?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    hoursOfOperetion?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CollectionPointsMinOrderByAggregateInput = {
    id?: SortOrder
    beneficiaryId?: SortOrder
    campaigsAwarenessId?: SortOrder
    name?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    hoursOfOperetion?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CollectionPointsSumOrderByAggregateInput = {
    id?: SortOrder
    beneficiaryId?: SortOrder
    campaigsAwarenessId?: SortOrder
  }

  export type CampaigsAwarenessCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    loction?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CampaigsAwarenessAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CampaigsAwarenessMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    loction?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CampaigsAwarenessMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    loction?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CampaigsAwarenessSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumNotificationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationTypeFilter<$PrismaModel> | $Enums.NotificationType
  }

  export type FoodScalarRelationFilter = {
    is?: FoodWhereInput
    isNot?: FoodWhereInput
  }

  export type NotificationEngagementCountOrderByAggregateInput = {
    id?: SortOrder
    foodId?: SortOrder
    beneficiaryId?: SortOrder
    NotificationType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NotificationEngagementAvgOrderByAggregateInput = {
    id?: SortOrder
    foodId?: SortOrder
    beneficiaryId?: SortOrder
  }

  export type NotificationEngagementMaxOrderByAggregateInput = {
    id?: SortOrder
    foodId?: SortOrder
    beneficiaryId?: SortOrder
    NotificationType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NotificationEngagementMinOrderByAggregateInput = {
    id?: SortOrder
    foodId?: SortOrder
    beneficiaryId?: SortOrder
    NotificationType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NotificationEngagementSumOrderByAggregateInput = {
    id?: SortOrder
    foodId?: SortOrder
    beneficiaryId?: SortOrder
  }

  export type EnumNotificationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationTypeWithAggregatesFilter<$PrismaModel> | $Enums.NotificationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNotificationTypeFilter<$PrismaModel>
    _max?: NestedEnumNotificationTypeFilter<$PrismaModel>
  }

  export type DonorScalarRelationFilter = {
    is?: DonorWhereInput
    isNot?: DonorWhereInput
  }

  export type CollectionPointsScalarRelationFilter = {
    is?: CollectionPointsWhereInput
    isNot?: CollectionPointsWhereInput
  }

  export type FoodCountOrderByAggregateInput = {
    id?: SortOrder
    donorId?: SortOrder
    collectionPointsId?: SortOrder
    AwarenessId?: SortOrder
    name?: SortOrder
    validity?: SortOrder
    quantity?: SortOrder
    category?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FoodAvgOrderByAggregateInput = {
    id?: SortOrder
    donorId?: SortOrder
    collectionPointsId?: SortOrder
    AwarenessId?: SortOrder
    quantity?: SortOrder
  }

  export type FoodMaxOrderByAggregateInput = {
    id?: SortOrder
    donorId?: SortOrder
    collectionPointsId?: SortOrder
    AwarenessId?: SortOrder
    name?: SortOrder
    validity?: SortOrder
    quantity?: SortOrder
    category?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FoodMinOrderByAggregateInput = {
    id?: SortOrder
    donorId?: SortOrder
    collectionPointsId?: SortOrder
    AwarenessId?: SortOrder
    name?: SortOrder
    validity?: SortOrder
    quantity?: SortOrder
    category?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FoodSumOrderByAggregateInput = {
    id?: SortOrder
    donorId?: SortOrder
    collectionPointsId?: SortOrder
    AwarenessId?: SortOrder
    quantity?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type ImpactReportCountOrderByAggregateInput = {
    id?: SortOrder
    donorId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    savedFoodKg?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ImpactReportAvgOrderByAggregateInput = {
    id?: SortOrder
    donorId?: SortOrder
    savedFoodKg?: SortOrder
  }

  export type ImpactReportMaxOrderByAggregateInput = {
    id?: SortOrder
    donorId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    savedFoodKg?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ImpactReportMinOrderByAggregateInput = {
    id?: SortOrder
    donorId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    savedFoodKg?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ImpactReportSumOrderByAggregateInput = {
    id?: SortOrder
    donorId?: SortOrder
    savedFoodKg?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type FoodCreateNestedManyWithoutDonorInput = {
    create?: XOR<FoodCreateWithoutDonorInput, FoodUncheckedCreateWithoutDonorInput> | FoodCreateWithoutDonorInput[] | FoodUncheckedCreateWithoutDonorInput[]
    connectOrCreate?: FoodCreateOrConnectWithoutDonorInput | FoodCreateOrConnectWithoutDonorInput[]
    createMany?: FoodCreateManyDonorInputEnvelope
    connect?: FoodWhereUniqueInput | FoodWhereUniqueInput[]
  }

  export type ImpactReportCreateNestedManyWithoutDonorInput = {
    create?: XOR<ImpactReportCreateWithoutDonorInput, ImpactReportUncheckedCreateWithoutDonorInput> | ImpactReportCreateWithoutDonorInput[] | ImpactReportUncheckedCreateWithoutDonorInput[]
    connectOrCreate?: ImpactReportCreateOrConnectWithoutDonorInput | ImpactReportCreateOrConnectWithoutDonorInput[]
    createMany?: ImpactReportCreateManyDonorInputEnvelope
    connect?: ImpactReportWhereUniqueInput | ImpactReportWhereUniqueInput[]
  }

  export type FoodUncheckedCreateNestedManyWithoutDonorInput = {
    create?: XOR<FoodCreateWithoutDonorInput, FoodUncheckedCreateWithoutDonorInput> | FoodCreateWithoutDonorInput[] | FoodUncheckedCreateWithoutDonorInput[]
    connectOrCreate?: FoodCreateOrConnectWithoutDonorInput | FoodCreateOrConnectWithoutDonorInput[]
    createMany?: FoodCreateManyDonorInputEnvelope
    connect?: FoodWhereUniqueInput | FoodWhereUniqueInput[]
  }

  export type ImpactReportUncheckedCreateNestedManyWithoutDonorInput = {
    create?: XOR<ImpactReportCreateWithoutDonorInput, ImpactReportUncheckedCreateWithoutDonorInput> | ImpactReportCreateWithoutDonorInput[] | ImpactReportUncheckedCreateWithoutDonorInput[]
    connectOrCreate?: ImpactReportCreateOrConnectWithoutDonorInput | ImpactReportCreateOrConnectWithoutDonorInput[]
    createMany?: ImpactReportCreateManyDonorInputEnvelope
    connect?: ImpactReportWhereUniqueInput | ImpactReportWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type FoodUpdateManyWithoutDonorNestedInput = {
    create?: XOR<FoodCreateWithoutDonorInput, FoodUncheckedCreateWithoutDonorInput> | FoodCreateWithoutDonorInput[] | FoodUncheckedCreateWithoutDonorInput[]
    connectOrCreate?: FoodCreateOrConnectWithoutDonorInput | FoodCreateOrConnectWithoutDonorInput[]
    upsert?: FoodUpsertWithWhereUniqueWithoutDonorInput | FoodUpsertWithWhereUniqueWithoutDonorInput[]
    createMany?: FoodCreateManyDonorInputEnvelope
    set?: FoodWhereUniqueInput | FoodWhereUniqueInput[]
    disconnect?: FoodWhereUniqueInput | FoodWhereUniqueInput[]
    delete?: FoodWhereUniqueInput | FoodWhereUniqueInput[]
    connect?: FoodWhereUniqueInput | FoodWhereUniqueInput[]
    update?: FoodUpdateWithWhereUniqueWithoutDonorInput | FoodUpdateWithWhereUniqueWithoutDonorInput[]
    updateMany?: FoodUpdateManyWithWhereWithoutDonorInput | FoodUpdateManyWithWhereWithoutDonorInput[]
    deleteMany?: FoodScalarWhereInput | FoodScalarWhereInput[]
  }

  export type ImpactReportUpdateManyWithoutDonorNestedInput = {
    create?: XOR<ImpactReportCreateWithoutDonorInput, ImpactReportUncheckedCreateWithoutDonorInput> | ImpactReportCreateWithoutDonorInput[] | ImpactReportUncheckedCreateWithoutDonorInput[]
    connectOrCreate?: ImpactReportCreateOrConnectWithoutDonorInput | ImpactReportCreateOrConnectWithoutDonorInput[]
    upsert?: ImpactReportUpsertWithWhereUniqueWithoutDonorInput | ImpactReportUpsertWithWhereUniqueWithoutDonorInput[]
    createMany?: ImpactReportCreateManyDonorInputEnvelope
    set?: ImpactReportWhereUniqueInput | ImpactReportWhereUniqueInput[]
    disconnect?: ImpactReportWhereUniqueInput | ImpactReportWhereUniqueInput[]
    delete?: ImpactReportWhereUniqueInput | ImpactReportWhereUniqueInput[]
    connect?: ImpactReportWhereUniqueInput | ImpactReportWhereUniqueInput[]
    update?: ImpactReportUpdateWithWhereUniqueWithoutDonorInput | ImpactReportUpdateWithWhereUniqueWithoutDonorInput[]
    updateMany?: ImpactReportUpdateManyWithWhereWithoutDonorInput | ImpactReportUpdateManyWithWhereWithoutDonorInput[]
    deleteMany?: ImpactReportScalarWhereInput | ImpactReportScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FoodUncheckedUpdateManyWithoutDonorNestedInput = {
    create?: XOR<FoodCreateWithoutDonorInput, FoodUncheckedCreateWithoutDonorInput> | FoodCreateWithoutDonorInput[] | FoodUncheckedCreateWithoutDonorInput[]
    connectOrCreate?: FoodCreateOrConnectWithoutDonorInput | FoodCreateOrConnectWithoutDonorInput[]
    upsert?: FoodUpsertWithWhereUniqueWithoutDonorInput | FoodUpsertWithWhereUniqueWithoutDonorInput[]
    createMany?: FoodCreateManyDonorInputEnvelope
    set?: FoodWhereUniqueInput | FoodWhereUniqueInput[]
    disconnect?: FoodWhereUniqueInput | FoodWhereUniqueInput[]
    delete?: FoodWhereUniqueInput | FoodWhereUniqueInput[]
    connect?: FoodWhereUniqueInput | FoodWhereUniqueInput[]
    update?: FoodUpdateWithWhereUniqueWithoutDonorInput | FoodUpdateWithWhereUniqueWithoutDonorInput[]
    updateMany?: FoodUpdateManyWithWhereWithoutDonorInput | FoodUpdateManyWithWhereWithoutDonorInput[]
    deleteMany?: FoodScalarWhereInput | FoodScalarWhereInput[]
  }

  export type ImpactReportUncheckedUpdateManyWithoutDonorNestedInput = {
    create?: XOR<ImpactReportCreateWithoutDonorInput, ImpactReportUncheckedCreateWithoutDonorInput> | ImpactReportCreateWithoutDonorInput[] | ImpactReportUncheckedCreateWithoutDonorInput[]
    connectOrCreate?: ImpactReportCreateOrConnectWithoutDonorInput | ImpactReportCreateOrConnectWithoutDonorInput[]
    upsert?: ImpactReportUpsertWithWhereUniqueWithoutDonorInput | ImpactReportUpsertWithWhereUniqueWithoutDonorInput[]
    createMany?: ImpactReportCreateManyDonorInputEnvelope
    set?: ImpactReportWhereUniqueInput | ImpactReportWhereUniqueInput[]
    disconnect?: ImpactReportWhereUniqueInput | ImpactReportWhereUniqueInput[]
    delete?: ImpactReportWhereUniqueInput | ImpactReportWhereUniqueInput[]
    connect?: ImpactReportWhereUniqueInput | ImpactReportWhereUniqueInput[]
    update?: ImpactReportUpdateWithWhereUniqueWithoutDonorInput | ImpactReportUpdateWithWhereUniqueWithoutDonorInput[]
    updateMany?: ImpactReportUpdateManyWithWhereWithoutDonorInput | ImpactReportUpdateManyWithWhereWithoutDonorInput[]
    deleteMany?: ImpactReportScalarWhereInput | ImpactReportScalarWhereInput[]
  }

  export type CollectionPointsCreateNestedManyWithoutBeneficiaryInput = {
    create?: XOR<CollectionPointsCreateWithoutBeneficiaryInput, CollectionPointsUncheckedCreateWithoutBeneficiaryInput> | CollectionPointsCreateWithoutBeneficiaryInput[] | CollectionPointsUncheckedCreateWithoutBeneficiaryInput[]
    connectOrCreate?: CollectionPointsCreateOrConnectWithoutBeneficiaryInput | CollectionPointsCreateOrConnectWithoutBeneficiaryInput[]
    createMany?: CollectionPointsCreateManyBeneficiaryInputEnvelope
    connect?: CollectionPointsWhereUniqueInput | CollectionPointsWhereUniqueInput[]
  }

  export type NotificationEngagementCreateNestedManyWithoutBeneficiaryInput = {
    create?: XOR<NotificationEngagementCreateWithoutBeneficiaryInput, NotificationEngagementUncheckedCreateWithoutBeneficiaryInput> | NotificationEngagementCreateWithoutBeneficiaryInput[] | NotificationEngagementUncheckedCreateWithoutBeneficiaryInput[]
    connectOrCreate?: NotificationEngagementCreateOrConnectWithoutBeneficiaryInput | NotificationEngagementCreateOrConnectWithoutBeneficiaryInput[]
    createMany?: NotificationEngagementCreateManyBeneficiaryInputEnvelope
    connect?: NotificationEngagementWhereUniqueInput | NotificationEngagementWhereUniqueInput[]
  }

  export type CollectionPointsUncheckedCreateNestedManyWithoutBeneficiaryInput = {
    create?: XOR<CollectionPointsCreateWithoutBeneficiaryInput, CollectionPointsUncheckedCreateWithoutBeneficiaryInput> | CollectionPointsCreateWithoutBeneficiaryInput[] | CollectionPointsUncheckedCreateWithoutBeneficiaryInput[]
    connectOrCreate?: CollectionPointsCreateOrConnectWithoutBeneficiaryInput | CollectionPointsCreateOrConnectWithoutBeneficiaryInput[]
    createMany?: CollectionPointsCreateManyBeneficiaryInputEnvelope
    connect?: CollectionPointsWhereUniqueInput | CollectionPointsWhereUniqueInput[]
  }

  export type NotificationEngagementUncheckedCreateNestedManyWithoutBeneficiaryInput = {
    create?: XOR<NotificationEngagementCreateWithoutBeneficiaryInput, NotificationEngagementUncheckedCreateWithoutBeneficiaryInput> | NotificationEngagementCreateWithoutBeneficiaryInput[] | NotificationEngagementUncheckedCreateWithoutBeneficiaryInput[]
    connectOrCreate?: NotificationEngagementCreateOrConnectWithoutBeneficiaryInput | NotificationEngagementCreateOrConnectWithoutBeneficiaryInput[]
    createMany?: NotificationEngagementCreateManyBeneficiaryInputEnvelope
    connect?: NotificationEngagementWhereUniqueInput | NotificationEngagementWhereUniqueInput[]
  }

  export type CollectionPointsUpdateManyWithoutBeneficiaryNestedInput = {
    create?: XOR<CollectionPointsCreateWithoutBeneficiaryInput, CollectionPointsUncheckedCreateWithoutBeneficiaryInput> | CollectionPointsCreateWithoutBeneficiaryInput[] | CollectionPointsUncheckedCreateWithoutBeneficiaryInput[]
    connectOrCreate?: CollectionPointsCreateOrConnectWithoutBeneficiaryInput | CollectionPointsCreateOrConnectWithoutBeneficiaryInput[]
    upsert?: CollectionPointsUpsertWithWhereUniqueWithoutBeneficiaryInput | CollectionPointsUpsertWithWhereUniqueWithoutBeneficiaryInput[]
    createMany?: CollectionPointsCreateManyBeneficiaryInputEnvelope
    set?: CollectionPointsWhereUniqueInput | CollectionPointsWhereUniqueInput[]
    disconnect?: CollectionPointsWhereUniqueInput | CollectionPointsWhereUniqueInput[]
    delete?: CollectionPointsWhereUniqueInput | CollectionPointsWhereUniqueInput[]
    connect?: CollectionPointsWhereUniqueInput | CollectionPointsWhereUniqueInput[]
    update?: CollectionPointsUpdateWithWhereUniqueWithoutBeneficiaryInput | CollectionPointsUpdateWithWhereUniqueWithoutBeneficiaryInput[]
    updateMany?: CollectionPointsUpdateManyWithWhereWithoutBeneficiaryInput | CollectionPointsUpdateManyWithWhereWithoutBeneficiaryInput[]
    deleteMany?: CollectionPointsScalarWhereInput | CollectionPointsScalarWhereInput[]
  }

  export type NotificationEngagementUpdateManyWithoutBeneficiaryNestedInput = {
    create?: XOR<NotificationEngagementCreateWithoutBeneficiaryInput, NotificationEngagementUncheckedCreateWithoutBeneficiaryInput> | NotificationEngagementCreateWithoutBeneficiaryInput[] | NotificationEngagementUncheckedCreateWithoutBeneficiaryInput[]
    connectOrCreate?: NotificationEngagementCreateOrConnectWithoutBeneficiaryInput | NotificationEngagementCreateOrConnectWithoutBeneficiaryInput[]
    upsert?: NotificationEngagementUpsertWithWhereUniqueWithoutBeneficiaryInput | NotificationEngagementUpsertWithWhereUniqueWithoutBeneficiaryInput[]
    createMany?: NotificationEngagementCreateManyBeneficiaryInputEnvelope
    set?: NotificationEngagementWhereUniqueInput | NotificationEngagementWhereUniqueInput[]
    disconnect?: NotificationEngagementWhereUniqueInput | NotificationEngagementWhereUniqueInput[]
    delete?: NotificationEngagementWhereUniqueInput | NotificationEngagementWhereUniqueInput[]
    connect?: NotificationEngagementWhereUniqueInput | NotificationEngagementWhereUniqueInput[]
    update?: NotificationEngagementUpdateWithWhereUniqueWithoutBeneficiaryInput | NotificationEngagementUpdateWithWhereUniqueWithoutBeneficiaryInput[]
    updateMany?: NotificationEngagementUpdateManyWithWhereWithoutBeneficiaryInput | NotificationEngagementUpdateManyWithWhereWithoutBeneficiaryInput[]
    deleteMany?: NotificationEngagementScalarWhereInput | NotificationEngagementScalarWhereInput[]
  }

  export type CollectionPointsUncheckedUpdateManyWithoutBeneficiaryNestedInput = {
    create?: XOR<CollectionPointsCreateWithoutBeneficiaryInput, CollectionPointsUncheckedCreateWithoutBeneficiaryInput> | CollectionPointsCreateWithoutBeneficiaryInput[] | CollectionPointsUncheckedCreateWithoutBeneficiaryInput[]
    connectOrCreate?: CollectionPointsCreateOrConnectWithoutBeneficiaryInput | CollectionPointsCreateOrConnectWithoutBeneficiaryInput[]
    upsert?: CollectionPointsUpsertWithWhereUniqueWithoutBeneficiaryInput | CollectionPointsUpsertWithWhereUniqueWithoutBeneficiaryInput[]
    createMany?: CollectionPointsCreateManyBeneficiaryInputEnvelope
    set?: CollectionPointsWhereUniqueInput | CollectionPointsWhereUniqueInput[]
    disconnect?: CollectionPointsWhereUniqueInput | CollectionPointsWhereUniqueInput[]
    delete?: CollectionPointsWhereUniqueInput | CollectionPointsWhereUniqueInput[]
    connect?: CollectionPointsWhereUniqueInput | CollectionPointsWhereUniqueInput[]
    update?: CollectionPointsUpdateWithWhereUniqueWithoutBeneficiaryInput | CollectionPointsUpdateWithWhereUniqueWithoutBeneficiaryInput[]
    updateMany?: CollectionPointsUpdateManyWithWhereWithoutBeneficiaryInput | CollectionPointsUpdateManyWithWhereWithoutBeneficiaryInput[]
    deleteMany?: CollectionPointsScalarWhereInput | CollectionPointsScalarWhereInput[]
  }

  export type NotificationEngagementUncheckedUpdateManyWithoutBeneficiaryNestedInput = {
    create?: XOR<NotificationEngagementCreateWithoutBeneficiaryInput, NotificationEngagementUncheckedCreateWithoutBeneficiaryInput> | NotificationEngagementCreateWithoutBeneficiaryInput[] | NotificationEngagementUncheckedCreateWithoutBeneficiaryInput[]
    connectOrCreate?: NotificationEngagementCreateOrConnectWithoutBeneficiaryInput | NotificationEngagementCreateOrConnectWithoutBeneficiaryInput[]
    upsert?: NotificationEngagementUpsertWithWhereUniqueWithoutBeneficiaryInput | NotificationEngagementUpsertWithWhereUniqueWithoutBeneficiaryInput[]
    createMany?: NotificationEngagementCreateManyBeneficiaryInputEnvelope
    set?: NotificationEngagementWhereUniqueInput | NotificationEngagementWhereUniqueInput[]
    disconnect?: NotificationEngagementWhereUniqueInput | NotificationEngagementWhereUniqueInput[]
    delete?: NotificationEngagementWhereUniqueInput | NotificationEngagementWhereUniqueInput[]
    connect?: NotificationEngagementWhereUniqueInput | NotificationEngagementWhereUniqueInput[]
    update?: NotificationEngagementUpdateWithWhereUniqueWithoutBeneficiaryInput | NotificationEngagementUpdateWithWhereUniqueWithoutBeneficiaryInput[]
    updateMany?: NotificationEngagementUpdateManyWithWhereWithoutBeneficiaryInput | NotificationEngagementUpdateManyWithWhereWithoutBeneficiaryInput[]
    deleteMany?: NotificationEngagementScalarWhereInput | NotificationEngagementScalarWhereInput[]
  }

  export type FoodCreateNestedManyWithoutCollectionPointsInput = {
    create?: XOR<FoodCreateWithoutCollectionPointsInput, FoodUncheckedCreateWithoutCollectionPointsInput> | FoodCreateWithoutCollectionPointsInput[] | FoodUncheckedCreateWithoutCollectionPointsInput[]
    connectOrCreate?: FoodCreateOrConnectWithoutCollectionPointsInput | FoodCreateOrConnectWithoutCollectionPointsInput[]
    createMany?: FoodCreateManyCollectionPointsInputEnvelope
    connect?: FoodWhereUniqueInput | FoodWhereUniqueInput[]
  }

  export type BeneficiaryCreateNestedOneWithoutCollectionPointsInput = {
    create?: XOR<BeneficiaryCreateWithoutCollectionPointsInput, BeneficiaryUncheckedCreateWithoutCollectionPointsInput>
    connectOrCreate?: BeneficiaryCreateOrConnectWithoutCollectionPointsInput
    connect?: BeneficiaryWhereUniqueInput
  }

  export type CampaigsAwarenessCreateNestedOneWithoutCollectionPointsInput = {
    create?: XOR<CampaigsAwarenessCreateWithoutCollectionPointsInput, CampaigsAwarenessUncheckedCreateWithoutCollectionPointsInput>
    connectOrCreate?: CampaigsAwarenessCreateOrConnectWithoutCollectionPointsInput
    connect?: CampaigsAwarenessWhereUniqueInput
  }

  export type FoodUncheckedCreateNestedManyWithoutCollectionPointsInput = {
    create?: XOR<FoodCreateWithoutCollectionPointsInput, FoodUncheckedCreateWithoutCollectionPointsInput> | FoodCreateWithoutCollectionPointsInput[] | FoodUncheckedCreateWithoutCollectionPointsInput[]
    connectOrCreate?: FoodCreateOrConnectWithoutCollectionPointsInput | FoodCreateOrConnectWithoutCollectionPointsInput[]
    createMany?: FoodCreateManyCollectionPointsInputEnvelope
    connect?: FoodWhereUniqueInput | FoodWhereUniqueInput[]
  }

  export type FoodUpdateManyWithoutCollectionPointsNestedInput = {
    create?: XOR<FoodCreateWithoutCollectionPointsInput, FoodUncheckedCreateWithoutCollectionPointsInput> | FoodCreateWithoutCollectionPointsInput[] | FoodUncheckedCreateWithoutCollectionPointsInput[]
    connectOrCreate?: FoodCreateOrConnectWithoutCollectionPointsInput | FoodCreateOrConnectWithoutCollectionPointsInput[]
    upsert?: FoodUpsertWithWhereUniqueWithoutCollectionPointsInput | FoodUpsertWithWhereUniqueWithoutCollectionPointsInput[]
    createMany?: FoodCreateManyCollectionPointsInputEnvelope
    set?: FoodWhereUniqueInput | FoodWhereUniqueInput[]
    disconnect?: FoodWhereUniqueInput | FoodWhereUniqueInput[]
    delete?: FoodWhereUniqueInput | FoodWhereUniqueInput[]
    connect?: FoodWhereUniqueInput | FoodWhereUniqueInput[]
    update?: FoodUpdateWithWhereUniqueWithoutCollectionPointsInput | FoodUpdateWithWhereUniqueWithoutCollectionPointsInput[]
    updateMany?: FoodUpdateManyWithWhereWithoutCollectionPointsInput | FoodUpdateManyWithWhereWithoutCollectionPointsInput[]
    deleteMany?: FoodScalarWhereInput | FoodScalarWhereInput[]
  }

  export type BeneficiaryUpdateOneRequiredWithoutCollectionPointsNestedInput = {
    create?: XOR<BeneficiaryCreateWithoutCollectionPointsInput, BeneficiaryUncheckedCreateWithoutCollectionPointsInput>
    connectOrCreate?: BeneficiaryCreateOrConnectWithoutCollectionPointsInput
    upsert?: BeneficiaryUpsertWithoutCollectionPointsInput
    connect?: BeneficiaryWhereUniqueInput
    update?: XOR<XOR<BeneficiaryUpdateToOneWithWhereWithoutCollectionPointsInput, BeneficiaryUpdateWithoutCollectionPointsInput>, BeneficiaryUncheckedUpdateWithoutCollectionPointsInput>
  }

  export type CampaigsAwarenessUpdateOneRequiredWithoutCollectionPointsNestedInput = {
    create?: XOR<CampaigsAwarenessCreateWithoutCollectionPointsInput, CampaigsAwarenessUncheckedCreateWithoutCollectionPointsInput>
    connectOrCreate?: CampaigsAwarenessCreateOrConnectWithoutCollectionPointsInput
    upsert?: CampaigsAwarenessUpsertWithoutCollectionPointsInput
    connect?: CampaigsAwarenessWhereUniqueInput
    update?: XOR<XOR<CampaigsAwarenessUpdateToOneWithWhereWithoutCollectionPointsInput, CampaigsAwarenessUpdateWithoutCollectionPointsInput>, CampaigsAwarenessUncheckedUpdateWithoutCollectionPointsInput>
  }

  export type FoodUncheckedUpdateManyWithoutCollectionPointsNestedInput = {
    create?: XOR<FoodCreateWithoutCollectionPointsInput, FoodUncheckedCreateWithoutCollectionPointsInput> | FoodCreateWithoutCollectionPointsInput[] | FoodUncheckedCreateWithoutCollectionPointsInput[]
    connectOrCreate?: FoodCreateOrConnectWithoutCollectionPointsInput | FoodCreateOrConnectWithoutCollectionPointsInput[]
    upsert?: FoodUpsertWithWhereUniqueWithoutCollectionPointsInput | FoodUpsertWithWhereUniqueWithoutCollectionPointsInput[]
    createMany?: FoodCreateManyCollectionPointsInputEnvelope
    set?: FoodWhereUniqueInput | FoodWhereUniqueInput[]
    disconnect?: FoodWhereUniqueInput | FoodWhereUniqueInput[]
    delete?: FoodWhereUniqueInput | FoodWhereUniqueInput[]
    connect?: FoodWhereUniqueInput | FoodWhereUniqueInput[]
    update?: FoodUpdateWithWhereUniqueWithoutCollectionPointsInput | FoodUpdateWithWhereUniqueWithoutCollectionPointsInput[]
    updateMany?: FoodUpdateManyWithWhereWithoutCollectionPointsInput | FoodUpdateManyWithWhereWithoutCollectionPointsInput[]
    deleteMany?: FoodScalarWhereInput | FoodScalarWhereInput[]
  }

  export type FoodCreateNestedManyWithoutAwarenessInput = {
    create?: XOR<FoodCreateWithoutAwarenessInput, FoodUncheckedCreateWithoutAwarenessInput> | FoodCreateWithoutAwarenessInput[] | FoodUncheckedCreateWithoutAwarenessInput[]
    connectOrCreate?: FoodCreateOrConnectWithoutAwarenessInput | FoodCreateOrConnectWithoutAwarenessInput[]
    createMany?: FoodCreateManyAwarenessInputEnvelope
    connect?: FoodWhereUniqueInput | FoodWhereUniqueInput[]
  }

  export type CollectionPointsCreateNestedManyWithoutCampaigsAwarenessInput = {
    create?: XOR<CollectionPointsCreateWithoutCampaigsAwarenessInput, CollectionPointsUncheckedCreateWithoutCampaigsAwarenessInput> | CollectionPointsCreateWithoutCampaigsAwarenessInput[] | CollectionPointsUncheckedCreateWithoutCampaigsAwarenessInput[]
    connectOrCreate?: CollectionPointsCreateOrConnectWithoutCampaigsAwarenessInput | CollectionPointsCreateOrConnectWithoutCampaigsAwarenessInput[]
    createMany?: CollectionPointsCreateManyCampaigsAwarenessInputEnvelope
    connect?: CollectionPointsWhereUniqueInput | CollectionPointsWhereUniqueInput[]
  }

  export type FoodUncheckedCreateNestedManyWithoutAwarenessInput = {
    create?: XOR<FoodCreateWithoutAwarenessInput, FoodUncheckedCreateWithoutAwarenessInput> | FoodCreateWithoutAwarenessInput[] | FoodUncheckedCreateWithoutAwarenessInput[]
    connectOrCreate?: FoodCreateOrConnectWithoutAwarenessInput | FoodCreateOrConnectWithoutAwarenessInput[]
    createMany?: FoodCreateManyAwarenessInputEnvelope
    connect?: FoodWhereUniqueInput | FoodWhereUniqueInput[]
  }

  export type CollectionPointsUncheckedCreateNestedManyWithoutCampaigsAwarenessInput = {
    create?: XOR<CollectionPointsCreateWithoutCampaigsAwarenessInput, CollectionPointsUncheckedCreateWithoutCampaigsAwarenessInput> | CollectionPointsCreateWithoutCampaigsAwarenessInput[] | CollectionPointsUncheckedCreateWithoutCampaigsAwarenessInput[]
    connectOrCreate?: CollectionPointsCreateOrConnectWithoutCampaigsAwarenessInput | CollectionPointsCreateOrConnectWithoutCampaigsAwarenessInput[]
    createMany?: CollectionPointsCreateManyCampaigsAwarenessInputEnvelope
    connect?: CollectionPointsWhereUniqueInput | CollectionPointsWhereUniqueInput[]
  }

  export type FoodUpdateManyWithoutAwarenessNestedInput = {
    create?: XOR<FoodCreateWithoutAwarenessInput, FoodUncheckedCreateWithoutAwarenessInput> | FoodCreateWithoutAwarenessInput[] | FoodUncheckedCreateWithoutAwarenessInput[]
    connectOrCreate?: FoodCreateOrConnectWithoutAwarenessInput | FoodCreateOrConnectWithoutAwarenessInput[]
    upsert?: FoodUpsertWithWhereUniqueWithoutAwarenessInput | FoodUpsertWithWhereUniqueWithoutAwarenessInput[]
    createMany?: FoodCreateManyAwarenessInputEnvelope
    set?: FoodWhereUniqueInput | FoodWhereUniqueInput[]
    disconnect?: FoodWhereUniqueInput | FoodWhereUniqueInput[]
    delete?: FoodWhereUniqueInput | FoodWhereUniqueInput[]
    connect?: FoodWhereUniqueInput | FoodWhereUniqueInput[]
    update?: FoodUpdateWithWhereUniqueWithoutAwarenessInput | FoodUpdateWithWhereUniqueWithoutAwarenessInput[]
    updateMany?: FoodUpdateManyWithWhereWithoutAwarenessInput | FoodUpdateManyWithWhereWithoutAwarenessInput[]
    deleteMany?: FoodScalarWhereInput | FoodScalarWhereInput[]
  }

  export type CollectionPointsUpdateManyWithoutCampaigsAwarenessNestedInput = {
    create?: XOR<CollectionPointsCreateWithoutCampaigsAwarenessInput, CollectionPointsUncheckedCreateWithoutCampaigsAwarenessInput> | CollectionPointsCreateWithoutCampaigsAwarenessInput[] | CollectionPointsUncheckedCreateWithoutCampaigsAwarenessInput[]
    connectOrCreate?: CollectionPointsCreateOrConnectWithoutCampaigsAwarenessInput | CollectionPointsCreateOrConnectWithoutCampaigsAwarenessInput[]
    upsert?: CollectionPointsUpsertWithWhereUniqueWithoutCampaigsAwarenessInput | CollectionPointsUpsertWithWhereUniqueWithoutCampaigsAwarenessInput[]
    createMany?: CollectionPointsCreateManyCampaigsAwarenessInputEnvelope
    set?: CollectionPointsWhereUniqueInput | CollectionPointsWhereUniqueInput[]
    disconnect?: CollectionPointsWhereUniqueInput | CollectionPointsWhereUniqueInput[]
    delete?: CollectionPointsWhereUniqueInput | CollectionPointsWhereUniqueInput[]
    connect?: CollectionPointsWhereUniqueInput | CollectionPointsWhereUniqueInput[]
    update?: CollectionPointsUpdateWithWhereUniqueWithoutCampaigsAwarenessInput | CollectionPointsUpdateWithWhereUniqueWithoutCampaigsAwarenessInput[]
    updateMany?: CollectionPointsUpdateManyWithWhereWithoutCampaigsAwarenessInput | CollectionPointsUpdateManyWithWhereWithoutCampaigsAwarenessInput[]
    deleteMany?: CollectionPointsScalarWhereInput | CollectionPointsScalarWhereInput[]
  }

  export type FoodUncheckedUpdateManyWithoutAwarenessNestedInput = {
    create?: XOR<FoodCreateWithoutAwarenessInput, FoodUncheckedCreateWithoutAwarenessInput> | FoodCreateWithoutAwarenessInput[] | FoodUncheckedCreateWithoutAwarenessInput[]
    connectOrCreate?: FoodCreateOrConnectWithoutAwarenessInput | FoodCreateOrConnectWithoutAwarenessInput[]
    upsert?: FoodUpsertWithWhereUniqueWithoutAwarenessInput | FoodUpsertWithWhereUniqueWithoutAwarenessInput[]
    createMany?: FoodCreateManyAwarenessInputEnvelope
    set?: FoodWhereUniqueInput | FoodWhereUniqueInput[]
    disconnect?: FoodWhereUniqueInput | FoodWhereUniqueInput[]
    delete?: FoodWhereUniqueInput | FoodWhereUniqueInput[]
    connect?: FoodWhereUniqueInput | FoodWhereUniqueInput[]
    update?: FoodUpdateWithWhereUniqueWithoutAwarenessInput | FoodUpdateWithWhereUniqueWithoutAwarenessInput[]
    updateMany?: FoodUpdateManyWithWhereWithoutAwarenessInput | FoodUpdateManyWithWhereWithoutAwarenessInput[]
    deleteMany?: FoodScalarWhereInput | FoodScalarWhereInput[]
  }

  export type CollectionPointsUncheckedUpdateManyWithoutCampaigsAwarenessNestedInput = {
    create?: XOR<CollectionPointsCreateWithoutCampaigsAwarenessInput, CollectionPointsUncheckedCreateWithoutCampaigsAwarenessInput> | CollectionPointsCreateWithoutCampaigsAwarenessInput[] | CollectionPointsUncheckedCreateWithoutCampaigsAwarenessInput[]
    connectOrCreate?: CollectionPointsCreateOrConnectWithoutCampaigsAwarenessInput | CollectionPointsCreateOrConnectWithoutCampaigsAwarenessInput[]
    upsert?: CollectionPointsUpsertWithWhereUniqueWithoutCampaigsAwarenessInput | CollectionPointsUpsertWithWhereUniqueWithoutCampaigsAwarenessInput[]
    createMany?: CollectionPointsCreateManyCampaigsAwarenessInputEnvelope
    set?: CollectionPointsWhereUniqueInput | CollectionPointsWhereUniqueInput[]
    disconnect?: CollectionPointsWhereUniqueInput | CollectionPointsWhereUniqueInput[]
    delete?: CollectionPointsWhereUniqueInput | CollectionPointsWhereUniqueInput[]
    connect?: CollectionPointsWhereUniqueInput | CollectionPointsWhereUniqueInput[]
    update?: CollectionPointsUpdateWithWhereUniqueWithoutCampaigsAwarenessInput | CollectionPointsUpdateWithWhereUniqueWithoutCampaigsAwarenessInput[]
    updateMany?: CollectionPointsUpdateManyWithWhereWithoutCampaigsAwarenessInput | CollectionPointsUpdateManyWithWhereWithoutCampaigsAwarenessInput[]
    deleteMany?: CollectionPointsScalarWhereInput | CollectionPointsScalarWhereInput[]
  }

  export type FoodCreateNestedOneWithoutNotificationEngagementsInput = {
    create?: XOR<FoodCreateWithoutNotificationEngagementsInput, FoodUncheckedCreateWithoutNotificationEngagementsInput>
    connectOrCreate?: FoodCreateOrConnectWithoutNotificationEngagementsInput
    connect?: FoodWhereUniqueInput
  }

  export type BeneficiaryCreateNestedOneWithoutNotificationEngagementsInput = {
    create?: XOR<BeneficiaryCreateWithoutNotificationEngagementsInput, BeneficiaryUncheckedCreateWithoutNotificationEngagementsInput>
    connectOrCreate?: BeneficiaryCreateOrConnectWithoutNotificationEngagementsInput
    connect?: BeneficiaryWhereUniqueInput
  }

  export type EnumNotificationTypeFieldUpdateOperationsInput = {
    set?: $Enums.NotificationType
  }

  export type FoodUpdateOneRequiredWithoutNotificationEngagementsNestedInput = {
    create?: XOR<FoodCreateWithoutNotificationEngagementsInput, FoodUncheckedCreateWithoutNotificationEngagementsInput>
    connectOrCreate?: FoodCreateOrConnectWithoutNotificationEngagementsInput
    upsert?: FoodUpsertWithoutNotificationEngagementsInput
    connect?: FoodWhereUniqueInput
    update?: XOR<XOR<FoodUpdateToOneWithWhereWithoutNotificationEngagementsInput, FoodUpdateWithoutNotificationEngagementsInput>, FoodUncheckedUpdateWithoutNotificationEngagementsInput>
  }

  export type BeneficiaryUpdateOneRequiredWithoutNotificationEngagementsNestedInput = {
    create?: XOR<BeneficiaryCreateWithoutNotificationEngagementsInput, BeneficiaryUncheckedCreateWithoutNotificationEngagementsInput>
    connectOrCreate?: BeneficiaryCreateOrConnectWithoutNotificationEngagementsInput
    upsert?: BeneficiaryUpsertWithoutNotificationEngagementsInput
    connect?: BeneficiaryWhereUniqueInput
    update?: XOR<XOR<BeneficiaryUpdateToOneWithWhereWithoutNotificationEngagementsInput, BeneficiaryUpdateWithoutNotificationEngagementsInput>, BeneficiaryUncheckedUpdateWithoutNotificationEngagementsInput>
  }

  export type DonorCreateNestedOneWithoutFoodInput = {
    create?: XOR<DonorCreateWithoutFoodInput, DonorUncheckedCreateWithoutFoodInput>
    connectOrCreate?: DonorCreateOrConnectWithoutFoodInput
    connect?: DonorWhereUniqueInput
  }

  export type CollectionPointsCreateNestedOneWithoutFoodInput = {
    create?: XOR<CollectionPointsCreateWithoutFoodInput, CollectionPointsUncheckedCreateWithoutFoodInput>
    connectOrCreate?: CollectionPointsCreateOrConnectWithoutFoodInput
    connect?: CollectionPointsWhereUniqueInput
  }

  export type CampaigsAwarenessCreateNestedOneWithoutFoodInput = {
    create?: XOR<CampaigsAwarenessCreateWithoutFoodInput, CampaigsAwarenessUncheckedCreateWithoutFoodInput>
    connectOrCreate?: CampaigsAwarenessCreateOrConnectWithoutFoodInput
    connect?: CampaigsAwarenessWhereUniqueInput
  }

  export type NotificationEngagementCreateNestedManyWithoutFoodInput = {
    create?: XOR<NotificationEngagementCreateWithoutFoodInput, NotificationEngagementUncheckedCreateWithoutFoodInput> | NotificationEngagementCreateWithoutFoodInput[] | NotificationEngagementUncheckedCreateWithoutFoodInput[]
    connectOrCreate?: NotificationEngagementCreateOrConnectWithoutFoodInput | NotificationEngagementCreateOrConnectWithoutFoodInput[]
    createMany?: NotificationEngagementCreateManyFoodInputEnvelope
    connect?: NotificationEngagementWhereUniqueInput | NotificationEngagementWhereUniqueInput[]
  }

  export type NotificationEngagementUncheckedCreateNestedManyWithoutFoodInput = {
    create?: XOR<NotificationEngagementCreateWithoutFoodInput, NotificationEngagementUncheckedCreateWithoutFoodInput> | NotificationEngagementCreateWithoutFoodInput[] | NotificationEngagementUncheckedCreateWithoutFoodInput[]
    connectOrCreate?: NotificationEngagementCreateOrConnectWithoutFoodInput | NotificationEngagementCreateOrConnectWithoutFoodInput[]
    createMany?: NotificationEngagementCreateManyFoodInputEnvelope
    connect?: NotificationEngagementWhereUniqueInput | NotificationEngagementWhereUniqueInput[]
  }

  export type DonorUpdateOneRequiredWithoutFoodNestedInput = {
    create?: XOR<DonorCreateWithoutFoodInput, DonorUncheckedCreateWithoutFoodInput>
    connectOrCreate?: DonorCreateOrConnectWithoutFoodInput
    upsert?: DonorUpsertWithoutFoodInput
    connect?: DonorWhereUniqueInput
    update?: XOR<XOR<DonorUpdateToOneWithWhereWithoutFoodInput, DonorUpdateWithoutFoodInput>, DonorUncheckedUpdateWithoutFoodInput>
  }

  export type CollectionPointsUpdateOneRequiredWithoutFoodNestedInput = {
    create?: XOR<CollectionPointsCreateWithoutFoodInput, CollectionPointsUncheckedCreateWithoutFoodInput>
    connectOrCreate?: CollectionPointsCreateOrConnectWithoutFoodInput
    upsert?: CollectionPointsUpsertWithoutFoodInput
    connect?: CollectionPointsWhereUniqueInput
    update?: XOR<XOR<CollectionPointsUpdateToOneWithWhereWithoutFoodInput, CollectionPointsUpdateWithoutFoodInput>, CollectionPointsUncheckedUpdateWithoutFoodInput>
  }

  export type CampaigsAwarenessUpdateOneRequiredWithoutFoodNestedInput = {
    create?: XOR<CampaigsAwarenessCreateWithoutFoodInput, CampaigsAwarenessUncheckedCreateWithoutFoodInput>
    connectOrCreate?: CampaigsAwarenessCreateOrConnectWithoutFoodInput
    upsert?: CampaigsAwarenessUpsertWithoutFoodInput
    connect?: CampaigsAwarenessWhereUniqueInput
    update?: XOR<XOR<CampaigsAwarenessUpdateToOneWithWhereWithoutFoodInput, CampaigsAwarenessUpdateWithoutFoodInput>, CampaigsAwarenessUncheckedUpdateWithoutFoodInput>
  }

  export type NotificationEngagementUpdateManyWithoutFoodNestedInput = {
    create?: XOR<NotificationEngagementCreateWithoutFoodInput, NotificationEngagementUncheckedCreateWithoutFoodInput> | NotificationEngagementCreateWithoutFoodInput[] | NotificationEngagementUncheckedCreateWithoutFoodInput[]
    connectOrCreate?: NotificationEngagementCreateOrConnectWithoutFoodInput | NotificationEngagementCreateOrConnectWithoutFoodInput[]
    upsert?: NotificationEngagementUpsertWithWhereUniqueWithoutFoodInput | NotificationEngagementUpsertWithWhereUniqueWithoutFoodInput[]
    createMany?: NotificationEngagementCreateManyFoodInputEnvelope
    set?: NotificationEngagementWhereUniqueInput | NotificationEngagementWhereUniqueInput[]
    disconnect?: NotificationEngagementWhereUniqueInput | NotificationEngagementWhereUniqueInput[]
    delete?: NotificationEngagementWhereUniqueInput | NotificationEngagementWhereUniqueInput[]
    connect?: NotificationEngagementWhereUniqueInput | NotificationEngagementWhereUniqueInput[]
    update?: NotificationEngagementUpdateWithWhereUniqueWithoutFoodInput | NotificationEngagementUpdateWithWhereUniqueWithoutFoodInput[]
    updateMany?: NotificationEngagementUpdateManyWithWhereWithoutFoodInput | NotificationEngagementUpdateManyWithWhereWithoutFoodInput[]
    deleteMany?: NotificationEngagementScalarWhereInput | NotificationEngagementScalarWhereInput[]
  }

  export type NotificationEngagementUncheckedUpdateManyWithoutFoodNestedInput = {
    create?: XOR<NotificationEngagementCreateWithoutFoodInput, NotificationEngagementUncheckedCreateWithoutFoodInput> | NotificationEngagementCreateWithoutFoodInput[] | NotificationEngagementUncheckedCreateWithoutFoodInput[]
    connectOrCreate?: NotificationEngagementCreateOrConnectWithoutFoodInput | NotificationEngagementCreateOrConnectWithoutFoodInput[]
    upsert?: NotificationEngagementUpsertWithWhereUniqueWithoutFoodInput | NotificationEngagementUpsertWithWhereUniqueWithoutFoodInput[]
    createMany?: NotificationEngagementCreateManyFoodInputEnvelope
    set?: NotificationEngagementWhereUniqueInput | NotificationEngagementWhereUniqueInput[]
    disconnect?: NotificationEngagementWhereUniqueInput | NotificationEngagementWhereUniqueInput[]
    delete?: NotificationEngagementWhereUniqueInput | NotificationEngagementWhereUniqueInput[]
    connect?: NotificationEngagementWhereUniqueInput | NotificationEngagementWhereUniqueInput[]
    update?: NotificationEngagementUpdateWithWhereUniqueWithoutFoodInput | NotificationEngagementUpdateWithWhereUniqueWithoutFoodInput[]
    updateMany?: NotificationEngagementUpdateManyWithWhereWithoutFoodInput | NotificationEngagementUpdateManyWithWhereWithoutFoodInput[]
    deleteMany?: NotificationEngagementScalarWhereInput | NotificationEngagementScalarWhereInput[]
  }

  export type DonorCreateNestedOneWithoutImpactReportInput = {
    create?: XOR<DonorCreateWithoutImpactReportInput, DonorUncheckedCreateWithoutImpactReportInput>
    connectOrCreate?: DonorCreateOrConnectWithoutImpactReportInput
    connect?: DonorWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DonorUpdateOneRequiredWithoutImpactReportNestedInput = {
    create?: XOR<DonorCreateWithoutImpactReportInput, DonorUncheckedCreateWithoutImpactReportInput>
    connectOrCreate?: DonorCreateOrConnectWithoutImpactReportInput
    upsert?: DonorUpsertWithoutImpactReportInput
    connect?: DonorWhereUniqueInput
    update?: XOR<XOR<DonorUpdateToOneWithWhereWithoutImpactReportInput, DonorUpdateWithoutImpactReportInput>, DonorUncheckedUpdateWithoutImpactReportInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumNotificationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationTypeFilter<$PrismaModel> | $Enums.NotificationType
  }

  export type NestedEnumNotificationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationTypeWithAggregatesFilter<$PrismaModel> | $Enums.NotificationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNotificationTypeFilter<$PrismaModel>
    _max?: NestedEnumNotificationTypeFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type FoodCreateWithoutDonorInput = {
    name: string
    validity: Date | string
    quantity: number
    category: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    collectionPoints: CollectionPointsCreateNestedOneWithoutFoodInput
    Awareness: CampaigsAwarenessCreateNestedOneWithoutFoodInput
    notificationEngagements?: NotificationEngagementCreateNestedManyWithoutFoodInput
  }

  export type FoodUncheckedCreateWithoutDonorInput = {
    id?: number
    collectionPointsId: number
    AwarenessId: number
    name: string
    validity: Date | string
    quantity: number
    category: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    notificationEngagements?: NotificationEngagementUncheckedCreateNestedManyWithoutFoodInput
  }

  export type FoodCreateOrConnectWithoutDonorInput = {
    where: FoodWhereUniqueInput
    create: XOR<FoodCreateWithoutDonorInput, FoodUncheckedCreateWithoutDonorInput>
  }

  export type FoodCreateManyDonorInputEnvelope = {
    data: FoodCreateManyDonorInput | FoodCreateManyDonorInput[]
    skipDuplicates?: boolean
  }

  export type ImpactReportCreateWithoutDonorInput = {
    title: string
    description: string
    savedFoodKg: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ImpactReportUncheckedCreateWithoutDonorInput = {
    id?: number
    title: string
    description: string
    savedFoodKg: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ImpactReportCreateOrConnectWithoutDonorInput = {
    where: ImpactReportWhereUniqueInput
    create: XOR<ImpactReportCreateWithoutDonorInput, ImpactReportUncheckedCreateWithoutDonorInput>
  }

  export type ImpactReportCreateManyDonorInputEnvelope = {
    data: ImpactReportCreateManyDonorInput | ImpactReportCreateManyDonorInput[]
    skipDuplicates?: boolean
  }

  export type FoodUpsertWithWhereUniqueWithoutDonorInput = {
    where: FoodWhereUniqueInput
    update: XOR<FoodUpdateWithoutDonorInput, FoodUncheckedUpdateWithoutDonorInput>
    create: XOR<FoodCreateWithoutDonorInput, FoodUncheckedCreateWithoutDonorInput>
  }

  export type FoodUpdateWithWhereUniqueWithoutDonorInput = {
    where: FoodWhereUniqueInput
    data: XOR<FoodUpdateWithoutDonorInput, FoodUncheckedUpdateWithoutDonorInput>
  }

  export type FoodUpdateManyWithWhereWithoutDonorInput = {
    where: FoodScalarWhereInput
    data: XOR<FoodUpdateManyMutationInput, FoodUncheckedUpdateManyWithoutDonorInput>
  }

  export type FoodScalarWhereInput = {
    AND?: FoodScalarWhereInput | FoodScalarWhereInput[]
    OR?: FoodScalarWhereInput[]
    NOT?: FoodScalarWhereInput | FoodScalarWhereInput[]
    id?: IntFilter<"Food"> | number
    donorId?: IntFilter<"Food"> | number
    collectionPointsId?: IntFilter<"Food"> | number
    AwarenessId?: IntFilter<"Food"> | number
    name?: StringFilter<"Food"> | string
    validity?: DateTimeFilter<"Food"> | Date | string
    quantity?: IntFilter<"Food"> | number
    category?: StringFilter<"Food"> | string
    description?: StringFilter<"Food"> | string
    createdAt?: DateTimeFilter<"Food"> | Date | string
    updatedAt?: DateTimeFilter<"Food"> | Date | string
  }

  export type ImpactReportUpsertWithWhereUniqueWithoutDonorInput = {
    where: ImpactReportWhereUniqueInput
    update: XOR<ImpactReportUpdateWithoutDonorInput, ImpactReportUncheckedUpdateWithoutDonorInput>
    create: XOR<ImpactReportCreateWithoutDonorInput, ImpactReportUncheckedCreateWithoutDonorInput>
  }

  export type ImpactReportUpdateWithWhereUniqueWithoutDonorInput = {
    where: ImpactReportWhereUniqueInput
    data: XOR<ImpactReportUpdateWithoutDonorInput, ImpactReportUncheckedUpdateWithoutDonorInput>
  }

  export type ImpactReportUpdateManyWithWhereWithoutDonorInput = {
    where: ImpactReportScalarWhereInput
    data: XOR<ImpactReportUpdateManyMutationInput, ImpactReportUncheckedUpdateManyWithoutDonorInput>
  }

  export type ImpactReportScalarWhereInput = {
    AND?: ImpactReportScalarWhereInput | ImpactReportScalarWhereInput[]
    OR?: ImpactReportScalarWhereInput[]
    NOT?: ImpactReportScalarWhereInput | ImpactReportScalarWhereInput[]
    id?: IntFilter<"ImpactReport"> | number
    donorId?: IntFilter<"ImpactReport"> | number
    title?: StringFilter<"ImpactReport"> | string
    description?: StringFilter<"ImpactReport"> | string
    savedFoodKg?: FloatFilter<"ImpactReport"> | number
    createdAt?: DateTimeFilter<"ImpactReport"> | Date | string
    updatedAt?: DateTimeFilter<"ImpactReport"> | Date | string
  }

  export type CollectionPointsCreateWithoutBeneficiaryInput = {
    name: string
    address: string
    phone: string
    hoursOfOperetion: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    food?: FoodCreateNestedManyWithoutCollectionPointsInput
    campaigsAwareness: CampaigsAwarenessCreateNestedOneWithoutCollectionPointsInput
  }

  export type CollectionPointsUncheckedCreateWithoutBeneficiaryInput = {
    id?: number
    campaigsAwarenessId: number
    name: string
    address: string
    phone: string
    hoursOfOperetion: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    food?: FoodUncheckedCreateNestedManyWithoutCollectionPointsInput
  }

  export type CollectionPointsCreateOrConnectWithoutBeneficiaryInput = {
    where: CollectionPointsWhereUniqueInput
    create: XOR<CollectionPointsCreateWithoutBeneficiaryInput, CollectionPointsUncheckedCreateWithoutBeneficiaryInput>
  }

  export type CollectionPointsCreateManyBeneficiaryInputEnvelope = {
    data: CollectionPointsCreateManyBeneficiaryInput | CollectionPointsCreateManyBeneficiaryInput[]
    skipDuplicates?: boolean
  }

  export type NotificationEngagementCreateWithoutBeneficiaryInput = {
    NotificationType: $Enums.NotificationType
    createdAt?: Date | string
    updatedAt?: Date | string
    food: FoodCreateNestedOneWithoutNotificationEngagementsInput
  }

  export type NotificationEngagementUncheckedCreateWithoutBeneficiaryInput = {
    id?: number
    foodId: number
    NotificationType: $Enums.NotificationType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationEngagementCreateOrConnectWithoutBeneficiaryInput = {
    where: NotificationEngagementWhereUniqueInput
    create: XOR<NotificationEngagementCreateWithoutBeneficiaryInput, NotificationEngagementUncheckedCreateWithoutBeneficiaryInput>
  }

  export type NotificationEngagementCreateManyBeneficiaryInputEnvelope = {
    data: NotificationEngagementCreateManyBeneficiaryInput | NotificationEngagementCreateManyBeneficiaryInput[]
    skipDuplicates?: boolean
  }

  export type CollectionPointsUpsertWithWhereUniqueWithoutBeneficiaryInput = {
    where: CollectionPointsWhereUniqueInput
    update: XOR<CollectionPointsUpdateWithoutBeneficiaryInput, CollectionPointsUncheckedUpdateWithoutBeneficiaryInput>
    create: XOR<CollectionPointsCreateWithoutBeneficiaryInput, CollectionPointsUncheckedCreateWithoutBeneficiaryInput>
  }

  export type CollectionPointsUpdateWithWhereUniqueWithoutBeneficiaryInput = {
    where: CollectionPointsWhereUniqueInput
    data: XOR<CollectionPointsUpdateWithoutBeneficiaryInput, CollectionPointsUncheckedUpdateWithoutBeneficiaryInput>
  }

  export type CollectionPointsUpdateManyWithWhereWithoutBeneficiaryInput = {
    where: CollectionPointsScalarWhereInput
    data: XOR<CollectionPointsUpdateManyMutationInput, CollectionPointsUncheckedUpdateManyWithoutBeneficiaryInput>
  }

  export type CollectionPointsScalarWhereInput = {
    AND?: CollectionPointsScalarWhereInput | CollectionPointsScalarWhereInput[]
    OR?: CollectionPointsScalarWhereInput[]
    NOT?: CollectionPointsScalarWhereInput | CollectionPointsScalarWhereInput[]
    id?: IntFilter<"CollectionPoints"> | number
    beneficiaryId?: IntFilter<"CollectionPoints"> | number
    campaigsAwarenessId?: IntFilter<"CollectionPoints"> | number
    name?: StringFilter<"CollectionPoints"> | string
    address?: StringFilter<"CollectionPoints"> | string
    phone?: StringFilter<"CollectionPoints"> | string
    hoursOfOperetion?: DateTimeFilter<"CollectionPoints"> | Date | string
    createdAt?: DateTimeFilter<"CollectionPoints"> | Date | string
    updatedAt?: DateTimeFilter<"CollectionPoints"> | Date | string
  }

  export type NotificationEngagementUpsertWithWhereUniqueWithoutBeneficiaryInput = {
    where: NotificationEngagementWhereUniqueInput
    update: XOR<NotificationEngagementUpdateWithoutBeneficiaryInput, NotificationEngagementUncheckedUpdateWithoutBeneficiaryInput>
    create: XOR<NotificationEngagementCreateWithoutBeneficiaryInput, NotificationEngagementUncheckedCreateWithoutBeneficiaryInput>
  }

  export type NotificationEngagementUpdateWithWhereUniqueWithoutBeneficiaryInput = {
    where: NotificationEngagementWhereUniqueInput
    data: XOR<NotificationEngagementUpdateWithoutBeneficiaryInput, NotificationEngagementUncheckedUpdateWithoutBeneficiaryInput>
  }

  export type NotificationEngagementUpdateManyWithWhereWithoutBeneficiaryInput = {
    where: NotificationEngagementScalarWhereInput
    data: XOR<NotificationEngagementUpdateManyMutationInput, NotificationEngagementUncheckedUpdateManyWithoutBeneficiaryInput>
  }

  export type NotificationEngagementScalarWhereInput = {
    AND?: NotificationEngagementScalarWhereInput | NotificationEngagementScalarWhereInput[]
    OR?: NotificationEngagementScalarWhereInput[]
    NOT?: NotificationEngagementScalarWhereInput | NotificationEngagementScalarWhereInput[]
    id?: IntFilter<"NotificationEngagement"> | number
    foodId?: IntFilter<"NotificationEngagement"> | number
    beneficiaryId?: IntFilter<"NotificationEngagement"> | number
    NotificationType?: EnumNotificationTypeFilter<"NotificationEngagement"> | $Enums.NotificationType
    createdAt?: DateTimeFilter<"NotificationEngagement"> | Date | string
    updatedAt?: DateTimeFilter<"NotificationEngagement"> | Date | string
  }

  export type FoodCreateWithoutCollectionPointsInput = {
    name: string
    validity: Date | string
    quantity: number
    category: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    donor: DonorCreateNestedOneWithoutFoodInput
    Awareness: CampaigsAwarenessCreateNestedOneWithoutFoodInput
    notificationEngagements?: NotificationEngagementCreateNestedManyWithoutFoodInput
  }

  export type FoodUncheckedCreateWithoutCollectionPointsInput = {
    id?: number
    donorId: number
    AwarenessId: number
    name: string
    validity: Date | string
    quantity: number
    category: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    notificationEngagements?: NotificationEngagementUncheckedCreateNestedManyWithoutFoodInput
  }

  export type FoodCreateOrConnectWithoutCollectionPointsInput = {
    where: FoodWhereUniqueInput
    create: XOR<FoodCreateWithoutCollectionPointsInput, FoodUncheckedCreateWithoutCollectionPointsInput>
  }

  export type FoodCreateManyCollectionPointsInputEnvelope = {
    data: FoodCreateManyCollectionPointsInput | FoodCreateManyCollectionPointsInput[]
    skipDuplicates?: boolean
  }

  export type BeneficiaryCreateWithoutCollectionPointsInput = {
    name: string
    email: string
    phone: string
    address: string
    cpf: string
    createdAt?: Date | string
    updatedAt?: Date | string
    notificationEngagements?: NotificationEngagementCreateNestedManyWithoutBeneficiaryInput
  }

  export type BeneficiaryUncheckedCreateWithoutCollectionPointsInput = {
    id?: number
    name: string
    email: string
    phone: string
    address: string
    cpf: string
    createdAt?: Date | string
    updatedAt?: Date | string
    notificationEngagements?: NotificationEngagementUncheckedCreateNestedManyWithoutBeneficiaryInput
  }

  export type BeneficiaryCreateOrConnectWithoutCollectionPointsInput = {
    where: BeneficiaryWhereUniqueInput
    create: XOR<BeneficiaryCreateWithoutCollectionPointsInput, BeneficiaryUncheckedCreateWithoutCollectionPointsInput>
  }

  export type CampaigsAwarenessCreateWithoutCollectionPointsInput = {
    name: string
    description: string
    startDate: Date | string
    endDate: Date | string
    loction: string
    createdAt?: Date | string
    updatedAt?: Date | string
    food?: FoodCreateNestedManyWithoutAwarenessInput
  }

  export type CampaigsAwarenessUncheckedCreateWithoutCollectionPointsInput = {
    id?: number
    name: string
    description: string
    startDate: Date | string
    endDate: Date | string
    loction: string
    createdAt?: Date | string
    updatedAt?: Date | string
    food?: FoodUncheckedCreateNestedManyWithoutAwarenessInput
  }

  export type CampaigsAwarenessCreateOrConnectWithoutCollectionPointsInput = {
    where: CampaigsAwarenessWhereUniqueInput
    create: XOR<CampaigsAwarenessCreateWithoutCollectionPointsInput, CampaigsAwarenessUncheckedCreateWithoutCollectionPointsInput>
  }

  export type FoodUpsertWithWhereUniqueWithoutCollectionPointsInput = {
    where: FoodWhereUniqueInput
    update: XOR<FoodUpdateWithoutCollectionPointsInput, FoodUncheckedUpdateWithoutCollectionPointsInput>
    create: XOR<FoodCreateWithoutCollectionPointsInput, FoodUncheckedCreateWithoutCollectionPointsInput>
  }

  export type FoodUpdateWithWhereUniqueWithoutCollectionPointsInput = {
    where: FoodWhereUniqueInput
    data: XOR<FoodUpdateWithoutCollectionPointsInput, FoodUncheckedUpdateWithoutCollectionPointsInput>
  }

  export type FoodUpdateManyWithWhereWithoutCollectionPointsInput = {
    where: FoodScalarWhereInput
    data: XOR<FoodUpdateManyMutationInput, FoodUncheckedUpdateManyWithoutCollectionPointsInput>
  }

  export type BeneficiaryUpsertWithoutCollectionPointsInput = {
    update: XOR<BeneficiaryUpdateWithoutCollectionPointsInput, BeneficiaryUncheckedUpdateWithoutCollectionPointsInput>
    create: XOR<BeneficiaryCreateWithoutCollectionPointsInput, BeneficiaryUncheckedCreateWithoutCollectionPointsInput>
    where?: BeneficiaryWhereInput
  }

  export type BeneficiaryUpdateToOneWithWhereWithoutCollectionPointsInput = {
    where?: BeneficiaryWhereInput
    data: XOR<BeneficiaryUpdateWithoutCollectionPointsInput, BeneficiaryUncheckedUpdateWithoutCollectionPointsInput>
  }

  export type BeneficiaryUpdateWithoutCollectionPointsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notificationEngagements?: NotificationEngagementUpdateManyWithoutBeneficiaryNestedInput
  }

  export type BeneficiaryUncheckedUpdateWithoutCollectionPointsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notificationEngagements?: NotificationEngagementUncheckedUpdateManyWithoutBeneficiaryNestedInput
  }

  export type CampaigsAwarenessUpsertWithoutCollectionPointsInput = {
    update: XOR<CampaigsAwarenessUpdateWithoutCollectionPointsInput, CampaigsAwarenessUncheckedUpdateWithoutCollectionPointsInput>
    create: XOR<CampaigsAwarenessCreateWithoutCollectionPointsInput, CampaigsAwarenessUncheckedCreateWithoutCollectionPointsInput>
    where?: CampaigsAwarenessWhereInput
  }

  export type CampaigsAwarenessUpdateToOneWithWhereWithoutCollectionPointsInput = {
    where?: CampaigsAwarenessWhereInput
    data: XOR<CampaigsAwarenessUpdateWithoutCollectionPointsInput, CampaigsAwarenessUncheckedUpdateWithoutCollectionPointsInput>
  }

  export type CampaigsAwarenessUpdateWithoutCollectionPointsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    loction?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    food?: FoodUpdateManyWithoutAwarenessNestedInput
  }

  export type CampaigsAwarenessUncheckedUpdateWithoutCollectionPointsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    loction?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    food?: FoodUncheckedUpdateManyWithoutAwarenessNestedInput
  }

  export type FoodCreateWithoutAwarenessInput = {
    name: string
    validity: Date | string
    quantity: number
    category: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    donor: DonorCreateNestedOneWithoutFoodInput
    collectionPoints: CollectionPointsCreateNestedOneWithoutFoodInput
    notificationEngagements?: NotificationEngagementCreateNestedManyWithoutFoodInput
  }

  export type FoodUncheckedCreateWithoutAwarenessInput = {
    id?: number
    donorId: number
    collectionPointsId: number
    name: string
    validity: Date | string
    quantity: number
    category: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    notificationEngagements?: NotificationEngagementUncheckedCreateNestedManyWithoutFoodInput
  }

  export type FoodCreateOrConnectWithoutAwarenessInput = {
    where: FoodWhereUniqueInput
    create: XOR<FoodCreateWithoutAwarenessInput, FoodUncheckedCreateWithoutAwarenessInput>
  }

  export type FoodCreateManyAwarenessInputEnvelope = {
    data: FoodCreateManyAwarenessInput | FoodCreateManyAwarenessInput[]
    skipDuplicates?: boolean
  }

  export type CollectionPointsCreateWithoutCampaigsAwarenessInput = {
    name: string
    address: string
    phone: string
    hoursOfOperetion: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    food?: FoodCreateNestedManyWithoutCollectionPointsInput
    beneficiary: BeneficiaryCreateNestedOneWithoutCollectionPointsInput
  }

  export type CollectionPointsUncheckedCreateWithoutCampaigsAwarenessInput = {
    id?: number
    beneficiaryId: number
    name: string
    address: string
    phone: string
    hoursOfOperetion: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    food?: FoodUncheckedCreateNestedManyWithoutCollectionPointsInput
  }

  export type CollectionPointsCreateOrConnectWithoutCampaigsAwarenessInput = {
    where: CollectionPointsWhereUniqueInput
    create: XOR<CollectionPointsCreateWithoutCampaigsAwarenessInput, CollectionPointsUncheckedCreateWithoutCampaigsAwarenessInput>
  }

  export type CollectionPointsCreateManyCampaigsAwarenessInputEnvelope = {
    data: CollectionPointsCreateManyCampaigsAwarenessInput | CollectionPointsCreateManyCampaigsAwarenessInput[]
    skipDuplicates?: boolean
  }

  export type FoodUpsertWithWhereUniqueWithoutAwarenessInput = {
    where: FoodWhereUniqueInput
    update: XOR<FoodUpdateWithoutAwarenessInput, FoodUncheckedUpdateWithoutAwarenessInput>
    create: XOR<FoodCreateWithoutAwarenessInput, FoodUncheckedCreateWithoutAwarenessInput>
  }

  export type FoodUpdateWithWhereUniqueWithoutAwarenessInput = {
    where: FoodWhereUniqueInput
    data: XOR<FoodUpdateWithoutAwarenessInput, FoodUncheckedUpdateWithoutAwarenessInput>
  }

  export type FoodUpdateManyWithWhereWithoutAwarenessInput = {
    where: FoodScalarWhereInput
    data: XOR<FoodUpdateManyMutationInput, FoodUncheckedUpdateManyWithoutAwarenessInput>
  }

  export type CollectionPointsUpsertWithWhereUniqueWithoutCampaigsAwarenessInput = {
    where: CollectionPointsWhereUniqueInput
    update: XOR<CollectionPointsUpdateWithoutCampaigsAwarenessInput, CollectionPointsUncheckedUpdateWithoutCampaigsAwarenessInput>
    create: XOR<CollectionPointsCreateWithoutCampaigsAwarenessInput, CollectionPointsUncheckedCreateWithoutCampaigsAwarenessInput>
  }

  export type CollectionPointsUpdateWithWhereUniqueWithoutCampaigsAwarenessInput = {
    where: CollectionPointsWhereUniqueInput
    data: XOR<CollectionPointsUpdateWithoutCampaigsAwarenessInput, CollectionPointsUncheckedUpdateWithoutCampaigsAwarenessInput>
  }

  export type CollectionPointsUpdateManyWithWhereWithoutCampaigsAwarenessInput = {
    where: CollectionPointsScalarWhereInput
    data: XOR<CollectionPointsUpdateManyMutationInput, CollectionPointsUncheckedUpdateManyWithoutCampaigsAwarenessInput>
  }

  export type FoodCreateWithoutNotificationEngagementsInput = {
    name: string
    validity: Date | string
    quantity: number
    category: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    donor: DonorCreateNestedOneWithoutFoodInput
    collectionPoints: CollectionPointsCreateNestedOneWithoutFoodInput
    Awareness: CampaigsAwarenessCreateNestedOneWithoutFoodInput
  }

  export type FoodUncheckedCreateWithoutNotificationEngagementsInput = {
    id?: number
    donorId: number
    collectionPointsId: number
    AwarenessId: number
    name: string
    validity: Date | string
    quantity: number
    category: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FoodCreateOrConnectWithoutNotificationEngagementsInput = {
    where: FoodWhereUniqueInput
    create: XOR<FoodCreateWithoutNotificationEngagementsInput, FoodUncheckedCreateWithoutNotificationEngagementsInput>
  }

  export type BeneficiaryCreateWithoutNotificationEngagementsInput = {
    name: string
    email: string
    phone: string
    address: string
    cpf: string
    createdAt?: Date | string
    updatedAt?: Date | string
    collectionPoints?: CollectionPointsCreateNestedManyWithoutBeneficiaryInput
  }

  export type BeneficiaryUncheckedCreateWithoutNotificationEngagementsInput = {
    id?: number
    name: string
    email: string
    phone: string
    address: string
    cpf: string
    createdAt?: Date | string
    updatedAt?: Date | string
    collectionPoints?: CollectionPointsUncheckedCreateNestedManyWithoutBeneficiaryInput
  }

  export type BeneficiaryCreateOrConnectWithoutNotificationEngagementsInput = {
    where: BeneficiaryWhereUniqueInput
    create: XOR<BeneficiaryCreateWithoutNotificationEngagementsInput, BeneficiaryUncheckedCreateWithoutNotificationEngagementsInput>
  }

  export type FoodUpsertWithoutNotificationEngagementsInput = {
    update: XOR<FoodUpdateWithoutNotificationEngagementsInput, FoodUncheckedUpdateWithoutNotificationEngagementsInput>
    create: XOR<FoodCreateWithoutNotificationEngagementsInput, FoodUncheckedCreateWithoutNotificationEngagementsInput>
    where?: FoodWhereInput
  }

  export type FoodUpdateToOneWithWhereWithoutNotificationEngagementsInput = {
    where?: FoodWhereInput
    data: XOR<FoodUpdateWithoutNotificationEngagementsInput, FoodUncheckedUpdateWithoutNotificationEngagementsInput>
  }

  export type FoodUpdateWithoutNotificationEngagementsInput = {
    name?: StringFieldUpdateOperationsInput | string
    validity?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    donor?: DonorUpdateOneRequiredWithoutFoodNestedInput
    collectionPoints?: CollectionPointsUpdateOneRequiredWithoutFoodNestedInput
    Awareness?: CampaigsAwarenessUpdateOneRequiredWithoutFoodNestedInput
  }

  export type FoodUncheckedUpdateWithoutNotificationEngagementsInput = {
    id?: IntFieldUpdateOperationsInput | number
    donorId?: IntFieldUpdateOperationsInput | number
    collectionPointsId?: IntFieldUpdateOperationsInput | number
    AwarenessId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    validity?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BeneficiaryUpsertWithoutNotificationEngagementsInput = {
    update: XOR<BeneficiaryUpdateWithoutNotificationEngagementsInput, BeneficiaryUncheckedUpdateWithoutNotificationEngagementsInput>
    create: XOR<BeneficiaryCreateWithoutNotificationEngagementsInput, BeneficiaryUncheckedCreateWithoutNotificationEngagementsInput>
    where?: BeneficiaryWhereInput
  }

  export type BeneficiaryUpdateToOneWithWhereWithoutNotificationEngagementsInput = {
    where?: BeneficiaryWhereInput
    data: XOR<BeneficiaryUpdateWithoutNotificationEngagementsInput, BeneficiaryUncheckedUpdateWithoutNotificationEngagementsInput>
  }

  export type BeneficiaryUpdateWithoutNotificationEngagementsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    collectionPoints?: CollectionPointsUpdateManyWithoutBeneficiaryNestedInput
  }

  export type BeneficiaryUncheckedUpdateWithoutNotificationEngagementsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    collectionPoints?: CollectionPointsUncheckedUpdateManyWithoutBeneficiaryNestedInput
  }

  export type DonorCreateWithoutFoodInput = {
    name: string
    email: string
    phone: string
    address: string
    cnpj: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ImpactReport?: ImpactReportCreateNestedManyWithoutDonorInput
  }

  export type DonorUncheckedCreateWithoutFoodInput = {
    id?: number
    name: string
    email: string
    phone: string
    address: string
    cnpj: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ImpactReport?: ImpactReportUncheckedCreateNestedManyWithoutDonorInput
  }

  export type DonorCreateOrConnectWithoutFoodInput = {
    where: DonorWhereUniqueInput
    create: XOR<DonorCreateWithoutFoodInput, DonorUncheckedCreateWithoutFoodInput>
  }

  export type CollectionPointsCreateWithoutFoodInput = {
    name: string
    address: string
    phone: string
    hoursOfOperetion: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    beneficiary: BeneficiaryCreateNestedOneWithoutCollectionPointsInput
    campaigsAwareness: CampaigsAwarenessCreateNestedOneWithoutCollectionPointsInput
  }

  export type CollectionPointsUncheckedCreateWithoutFoodInput = {
    id?: number
    beneficiaryId: number
    campaigsAwarenessId: number
    name: string
    address: string
    phone: string
    hoursOfOperetion: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CollectionPointsCreateOrConnectWithoutFoodInput = {
    where: CollectionPointsWhereUniqueInput
    create: XOR<CollectionPointsCreateWithoutFoodInput, CollectionPointsUncheckedCreateWithoutFoodInput>
  }

  export type CampaigsAwarenessCreateWithoutFoodInput = {
    name: string
    description: string
    startDate: Date | string
    endDate: Date | string
    loction: string
    createdAt?: Date | string
    updatedAt?: Date | string
    collectionPoints?: CollectionPointsCreateNestedManyWithoutCampaigsAwarenessInput
  }

  export type CampaigsAwarenessUncheckedCreateWithoutFoodInput = {
    id?: number
    name: string
    description: string
    startDate: Date | string
    endDate: Date | string
    loction: string
    createdAt?: Date | string
    updatedAt?: Date | string
    collectionPoints?: CollectionPointsUncheckedCreateNestedManyWithoutCampaigsAwarenessInput
  }

  export type CampaigsAwarenessCreateOrConnectWithoutFoodInput = {
    where: CampaigsAwarenessWhereUniqueInput
    create: XOR<CampaigsAwarenessCreateWithoutFoodInput, CampaigsAwarenessUncheckedCreateWithoutFoodInput>
  }

  export type NotificationEngagementCreateWithoutFoodInput = {
    NotificationType: $Enums.NotificationType
    createdAt?: Date | string
    updatedAt?: Date | string
    beneficiary: BeneficiaryCreateNestedOneWithoutNotificationEngagementsInput
  }

  export type NotificationEngagementUncheckedCreateWithoutFoodInput = {
    id?: number
    beneficiaryId: number
    NotificationType: $Enums.NotificationType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationEngagementCreateOrConnectWithoutFoodInput = {
    where: NotificationEngagementWhereUniqueInput
    create: XOR<NotificationEngagementCreateWithoutFoodInput, NotificationEngagementUncheckedCreateWithoutFoodInput>
  }

  export type NotificationEngagementCreateManyFoodInputEnvelope = {
    data: NotificationEngagementCreateManyFoodInput | NotificationEngagementCreateManyFoodInput[]
    skipDuplicates?: boolean
  }

  export type DonorUpsertWithoutFoodInput = {
    update: XOR<DonorUpdateWithoutFoodInput, DonorUncheckedUpdateWithoutFoodInput>
    create: XOR<DonorCreateWithoutFoodInput, DonorUncheckedCreateWithoutFoodInput>
    where?: DonorWhereInput
  }

  export type DonorUpdateToOneWithWhereWithoutFoodInput = {
    where?: DonorWhereInput
    data: XOR<DonorUpdateWithoutFoodInput, DonorUncheckedUpdateWithoutFoodInput>
  }

  export type DonorUpdateWithoutFoodInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ImpactReport?: ImpactReportUpdateManyWithoutDonorNestedInput
  }

  export type DonorUncheckedUpdateWithoutFoodInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ImpactReport?: ImpactReportUncheckedUpdateManyWithoutDonorNestedInput
  }

  export type CollectionPointsUpsertWithoutFoodInput = {
    update: XOR<CollectionPointsUpdateWithoutFoodInput, CollectionPointsUncheckedUpdateWithoutFoodInput>
    create: XOR<CollectionPointsCreateWithoutFoodInput, CollectionPointsUncheckedCreateWithoutFoodInput>
    where?: CollectionPointsWhereInput
  }

  export type CollectionPointsUpdateToOneWithWhereWithoutFoodInput = {
    where?: CollectionPointsWhereInput
    data: XOR<CollectionPointsUpdateWithoutFoodInput, CollectionPointsUncheckedUpdateWithoutFoodInput>
  }

  export type CollectionPointsUpdateWithoutFoodInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    hoursOfOperetion?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    beneficiary?: BeneficiaryUpdateOneRequiredWithoutCollectionPointsNestedInput
    campaigsAwareness?: CampaigsAwarenessUpdateOneRequiredWithoutCollectionPointsNestedInput
  }

  export type CollectionPointsUncheckedUpdateWithoutFoodInput = {
    id?: IntFieldUpdateOperationsInput | number
    beneficiaryId?: IntFieldUpdateOperationsInput | number
    campaigsAwarenessId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    hoursOfOperetion?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CampaigsAwarenessUpsertWithoutFoodInput = {
    update: XOR<CampaigsAwarenessUpdateWithoutFoodInput, CampaigsAwarenessUncheckedUpdateWithoutFoodInput>
    create: XOR<CampaigsAwarenessCreateWithoutFoodInput, CampaigsAwarenessUncheckedCreateWithoutFoodInput>
    where?: CampaigsAwarenessWhereInput
  }

  export type CampaigsAwarenessUpdateToOneWithWhereWithoutFoodInput = {
    where?: CampaigsAwarenessWhereInput
    data: XOR<CampaigsAwarenessUpdateWithoutFoodInput, CampaigsAwarenessUncheckedUpdateWithoutFoodInput>
  }

  export type CampaigsAwarenessUpdateWithoutFoodInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    loction?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    collectionPoints?: CollectionPointsUpdateManyWithoutCampaigsAwarenessNestedInput
  }

  export type CampaigsAwarenessUncheckedUpdateWithoutFoodInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    loction?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    collectionPoints?: CollectionPointsUncheckedUpdateManyWithoutCampaigsAwarenessNestedInput
  }

  export type NotificationEngagementUpsertWithWhereUniqueWithoutFoodInput = {
    where: NotificationEngagementWhereUniqueInput
    update: XOR<NotificationEngagementUpdateWithoutFoodInput, NotificationEngagementUncheckedUpdateWithoutFoodInput>
    create: XOR<NotificationEngagementCreateWithoutFoodInput, NotificationEngagementUncheckedCreateWithoutFoodInput>
  }

  export type NotificationEngagementUpdateWithWhereUniqueWithoutFoodInput = {
    where: NotificationEngagementWhereUniqueInput
    data: XOR<NotificationEngagementUpdateWithoutFoodInput, NotificationEngagementUncheckedUpdateWithoutFoodInput>
  }

  export type NotificationEngagementUpdateManyWithWhereWithoutFoodInput = {
    where: NotificationEngagementScalarWhereInput
    data: XOR<NotificationEngagementUpdateManyMutationInput, NotificationEngagementUncheckedUpdateManyWithoutFoodInput>
  }

  export type DonorCreateWithoutImpactReportInput = {
    name: string
    email: string
    phone: string
    address: string
    cnpj: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Food?: FoodCreateNestedManyWithoutDonorInput
  }

  export type DonorUncheckedCreateWithoutImpactReportInput = {
    id?: number
    name: string
    email: string
    phone: string
    address: string
    cnpj: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Food?: FoodUncheckedCreateNestedManyWithoutDonorInput
  }

  export type DonorCreateOrConnectWithoutImpactReportInput = {
    where: DonorWhereUniqueInput
    create: XOR<DonorCreateWithoutImpactReportInput, DonorUncheckedCreateWithoutImpactReportInput>
  }

  export type DonorUpsertWithoutImpactReportInput = {
    update: XOR<DonorUpdateWithoutImpactReportInput, DonorUncheckedUpdateWithoutImpactReportInput>
    create: XOR<DonorCreateWithoutImpactReportInput, DonorUncheckedCreateWithoutImpactReportInput>
    where?: DonorWhereInput
  }

  export type DonorUpdateToOneWithWhereWithoutImpactReportInput = {
    where?: DonorWhereInput
    data: XOR<DonorUpdateWithoutImpactReportInput, DonorUncheckedUpdateWithoutImpactReportInput>
  }

  export type DonorUpdateWithoutImpactReportInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Food?: FoodUpdateManyWithoutDonorNestedInput
  }

  export type DonorUncheckedUpdateWithoutImpactReportInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Food?: FoodUncheckedUpdateManyWithoutDonorNestedInput
  }

  export type FoodCreateManyDonorInput = {
    id?: number
    collectionPointsId: number
    AwarenessId: number
    name: string
    validity: Date | string
    quantity: number
    category: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ImpactReportCreateManyDonorInput = {
    id?: number
    title: string
    description: string
    savedFoodKg: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FoodUpdateWithoutDonorInput = {
    name?: StringFieldUpdateOperationsInput | string
    validity?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    collectionPoints?: CollectionPointsUpdateOneRequiredWithoutFoodNestedInput
    Awareness?: CampaigsAwarenessUpdateOneRequiredWithoutFoodNestedInput
    notificationEngagements?: NotificationEngagementUpdateManyWithoutFoodNestedInput
  }

  export type FoodUncheckedUpdateWithoutDonorInput = {
    id?: IntFieldUpdateOperationsInput | number
    collectionPointsId?: IntFieldUpdateOperationsInput | number
    AwarenessId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    validity?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notificationEngagements?: NotificationEngagementUncheckedUpdateManyWithoutFoodNestedInput
  }

  export type FoodUncheckedUpdateManyWithoutDonorInput = {
    id?: IntFieldUpdateOperationsInput | number
    collectionPointsId?: IntFieldUpdateOperationsInput | number
    AwarenessId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    validity?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImpactReportUpdateWithoutDonorInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    savedFoodKg?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImpactReportUncheckedUpdateWithoutDonorInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    savedFoodKg?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImpactReportUncheckedUpdateManyWithoutDonorInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    savedFoodKg?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CollectionPointsCreateManyBeneficiaryInput = {
    id?: number
    campaigsAwarenessId: number
    name: string
    address: string
    phone: string
    hoursOfOperetion: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationEngagementCreateManyBeneficiaryInput = {
    id?: number
    foodId: number
    NotificationType: $Enums.NotificationType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CollectionPointsUpdateWithoutBeneficiaryInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    hoursOfOperetion?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    food?: FoodUpdateManyWithoutCollectionPointsNestedInput
    campaigsAwareness?: CampaigsAwarenessUpdateOneRequiredWithoutCollectionPointsNestedInput
  }

  export type CollectionPointsUncheckedUpdateWithoutBeneficiaryInput = {
    id?: IntFieldUpdateOperationsInput | number
    campaigsAwarenessId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    hoursOfOperetion?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    food?: FoodUncheckedUpdateManyWithoutCollectionPointsNestedInput
  }

  export type CollectionPointsUncheckedUpdateManyWithoutBeneficiaryInput = {
    id?: IntFieldUpdateOperationsInput | number
    campaigsAwarenessId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    hoursOfOperetion?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationEngagementUpdateWithoutBeneficiaryInput = {
    NotificationType?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    food?: FoodUpdateOneRequiredWithoutNotificationEngagementsNestedInput
  }

  export type NotificationEngagementUncheckedUpdateWithoutBeneficiaryInput = {
    id?: IntFieldUpdateOperationsInput | number
    foodId?: IntFieldUpdateOperationsInput | number
    NotificationType?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationEngagementUncheckedUpdateManyWithoutBeneficiaryInput = {
    id?: IntFieldUpdateOperationsInput | number
    foodId?: IntFieldUpdateOperationsInput | number
    NotificationType?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FoodCreateManyCollectionPointsInput = {
    id?: number
    donorId: number
    AwarenessId: number
    name: string
    validity: Date | string
    quantity: number
    category: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FoodUpdateWithoutCollectionPointsInput = {
    name?: StringFieldUpdateOperationsInput | string
    validity?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    donor?: DonorUpdateOneRequiredWithoutFoodNestedInput
    Awareness?: CampaigsAwarenessUpdateOneRequiredWithoutFoodNestedInput
    notificationEngagements?: NotificationEngagementUpdateManyWithoutFoodNestedInput
  }

  export type FoodUncheckedUpdateWithoutCollectionPointsInput = {
    id?: IntFieldUpdateOperationsInput | number
    donorId?: IntFieldUpdateOperationsInput | number
    AwarenessId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    validity?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notificationEngagements?: NotificationEngagementUncheckedUpdateManyWithoutFoodNestedInput
  }

  export type FoodUncheckedUpdateManyWithoutCollectionPointsInput = {
    id?: IntFieldUpdateOperationsInput | number
    donorId?: IntFieldUpdateOperationsInput | number
    AwarenessId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    validity?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FoodCreateManyAwarenessInput = {
    id?: number
    donorId: number
    collectionPointsId: number
    name: string
    validity: Date | string
    quantity: number
    category: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CollectionPointsCreateManyCampaigsAwarenessInput = {
    id?: number
    beneficiaryId: number
    name: string
    address: string
    phone: string
    hoursOfOperetion: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FoodUpdateWithoutAwarenessInput = {
    name?: StringFieldUpdateOperationsInput | string
    validity?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    donor?: DonorUpdateOneRequiredWithoutFoodNestedInput
    collectionPoints?: CollectionPointsUpdateOneRequiredWithoutFoodNestedInput
    notificationEngagements?: NotificationEngagementUpdateManyWithoutFoodNestedInput
  }

  export type FoodUncheckedUpdateWithoutAwarenessInput = {
    id?: IntFieldUpdateOperationsInput | number
    donorId?: IntFieldUpdateOperationsInput | number
    collectionPointsId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    validity?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notificationEngagements?: NotificationEngagementUncheckedUpdateManyWithoutFoodNestedInput
  }

  export type FoodUncheckedUpdateManyWithoutAwarenessInput = {
    id?: IntFieldUpdateOperationsInput | number
    donorId?: IntFieldUpdateOperationsInput | number
    collectionPointsId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    validity?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CollectionPointsUpdateWithoutCampaigsAwarenessInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    hoursOfOperetion?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    food?: FoodUpdateManyWithoutCollectionPointsNestedInput
    beneficiary?: BeneficiaryUpdateOneRequiredWithoutCollectionPointsNestedInput
  }

  export type CollectionPointsUncheckedUpdateWithoutCampaigsAwarenessInput = {
    id?: IntFieldUpdateOperationsInput | number
    beneficiaryId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    hoursOfOperetion?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    food?: FoodUncheckedUpdateManyWithoutCollectionPointsNestedInput
  }

  export type CollectionPointsUncheckedUpdateManyWithoutCampaigsAwarenessInput = {
    id?: IntFieldUpdateOperationsInput | number
    beneficiaryId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    hoursOfOperetion?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationEngagementCreateManyFoodInput = {
    id?: number
    beneficiaryId: number
    NotificationType: $Enums.NotificationType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationEngagementUpdateWithoutFoodInput = {
    NotificationType?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    beneficiary?: BeneficiaryUpdateOneRequiredWithoutNotificationEngagementsNestedInput
  }

  export type NotificationEngagementUncheckedUpdateWithoutFoodInput = {
    id?: IntFieldUpdateOperationsInput | number
    beneficiaryId?: IntFieldUpdateOperationsInput | number
    NotificationType?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationEngagementUncheckedUpdateManyWithoutFoodInput = {
    id?: IntFieldUpdateOperationsInput | number
    beneficiaryId?: IntFieldUpdateOperationsInput | number
    NotificationType?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



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
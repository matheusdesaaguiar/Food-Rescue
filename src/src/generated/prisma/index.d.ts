
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
 * Model ReportsCampaign
 * 
 */
export type ReportsCampaign = $Result.DefaultSelection<Prisma.$ReportsCampaignPayload>

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
   * `prisma.reportsCampaign`: Exposes CRUD operations for the **ReportsCampaign** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ReportsCampaigns
    * const reportsCampaigns = await prisma.reportsCampaign.findMany()
    * ```
    */
  get reportsCampaign(): Prisma.ReportsCampaignDelegate<ExtArgs, ClientOptions>;
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
    ReportsCampaign: 'ReportsCampaign'
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
      modelProps: "donor" | "beneficiary" | "collectionPoints" | "campaigsAwareness" | "reportsCampaign"
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
      ReportsCampaign: {
        payload: Prisma.$ReportsCampaignPayload<ExtArgs>
        fields: Prisma.ReportsCampaignFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReportsCampaignFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportsCampaignPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReportsCampaignFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportsCampaignPayload>
          }
          findFirst: {
            args: Prisma.ReportsCampaignFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportsCampaignPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReportsCampaignFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportsCampaignPayload>
          }
          findMany: {
            args: Prisma.ReportsCampaignFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportsCampaignPayload>[]
          }
          create: {
            args: Prisma.ReportsCampaignCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportsCampaignPayload>
          }
          createMany: {
            args: Prisma.ReportsCampaignCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReportsCampaignCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportsCampaignPayload>[]
          }
          delete: {
            args: Prisma.ReportsCampaignDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportsCampaignPayload>
          }
          update: {
            args: Prisma.ReportsCampaignUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportsCampaignPayload>
          }
          deleteMany: {
            args: Prisma.ReportsCampaignDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReportsCampaignUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReportsCampaignUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportsCampaignPayload>[]
          }
          upsert: {
            args: Prisma.ReportsCampaignUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportsCampaignPayload>
          }
          aggregate: {
            args: Prisma.ReportsCampaignAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReportsCampaign>
          }
          groupBy: {
            args: Prisma.ReportsCampaignGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReportsCampaignGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReportsCampaignCountArgs<ExtArgs>
            result: $Utils.Optional<ReportsCampaignCountAggregateOutputType> | number
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
    reportsCampaign?: ReportsCampaignOmit
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
   * Count Type BeneficiaryCountOutputType
   */

  export type BeneficiaryCountOutputType = {
    collectionPoints: number
  }

  export type BeneficiaryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    collectionPoints?: boolean | BeneficiaryCountOutputTypeCountCollectionPointsArgs
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
   * Count Type CampaigsAwarenessCountOutputType
   */

  export type CampaigsAwarenessCountOutputType = {
    collectionPoints: number
  }

  export type CampaigsAwarenessCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
  export type CampaigsAwarenessCountOutputTypeCountCollectionPointsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CollectionPointsWhereInput
  }


  /**
   * Count Type ReportsCampaignCountOutputType
   */

  export type ReportsCampaignCountOutputType = {
    collectionPoints: number
  }

  export type ReportsCampaignCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    collectionPoints?: boolean | ReportsCampaignCountOutputTypeCountCollectionPointsArgs
  }

  // Custom InputTypes
  /**
   * ReportsCampaignCountOutputType without action
   */
  export type ReportsCampaignCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportsCampaignCountOutputType
     */
    select?: ReportsCampaignCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ReportsCampaignCountOutputType without action
   */
  export type ReportsCampaignCountOutputTypeCountCollectionPointsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CollectionPointsWhereInput
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
    nome: string | null
    email: string | null
    telefone: string | null
    endereco: string | null
    cnpj: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DonorMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    email: string | null
    telefone: string | null
    endereco: string | null
    cnpj: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DonorCountAggregateOutputType = {
    id: number
    nome: number
    email: number
    telefone: number
    endereco: number
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
    nome?: true
    email?: true
    telefone?: true
    endereco?: true
    cnpj?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DonorMaxAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    telefone?: true
    endereco?: true
    cnpj?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DonorCountAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    telefone?: true
    endereco?: true
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
    nome: string
    email: string
    telefone: string
    endereco: string
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
    nome?: boolean
    email?: boolean
    telefone?: boolean
    endereco?: boolean
    cnpj?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["donor"]>

  export type DonorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    telefone?: boolean
    endereco?: boolean
    cnpj?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["donor"]>

  export type DonorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    telefone?: boolean
    endereco?: boolean
    cnpj?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["donor"]>

  export type DonorSelectScalar = {
    id?: boolean
    nome?: boolean
    email?: boolean
    telefone?: boolean
    endereco?: boolean
    cnpj?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DonorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "email" | "telefone" | "endereco" | "cnpj" | "createdAt" | "updatedAt", ExtArgs["result"]["donor"]>

  export type $DonorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Donor"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      email: string
      telefone: string
      endereco: string
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
    readonly nome: FieldRef<"Donor", 'String'>
    readonly email: FieldRef<"Donor", 'String'>
    readonly telefone: FieldRef<"Donor", 'String'>
    readonly endereco: FieldRef<"Donor", 'String'>
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
    nome: string | null
    email: string | null
    telefone: string | null
    endereco: string | null
    cpf: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BeneficiaryMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    email: string | null
    telefone: string | null
    endereco: string | null
    cpf: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BeneficiaryCountAggregateOutputType = {
    id: number
    nome: number
    email: number
    telefone: number
    endereco: number
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
    nome?: true
    email?: true
    telefone?: true
    endereco?: true
    cpf?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BeneficiaryMaxAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    telefone?: true
    endereco?: true
    cpf?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BeneficiaryCountAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    telefone?: true
    endereco?: true
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
    nome: string
    email: string
    telefone: string
    endereco: string
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
    nome?: boolean
    email?: boolean
    telefone?: boolean
    endereco?: boolean
    cpf?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    collectionPoints?: boolean | Beneficiary$collectionPointsArgs<ExtArgs>
    _count?: boolean | BeneficiaryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["beneficiary"]>

  export type BeneficiarySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    telefone?: boolean
    endereco?: boolean
    cpf?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["beneficiary"]>

  export type BeneficiarySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    telefone?: boolean
    endereco?: boolean
    cpf?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["beneficiary"]>

  export type BeneficiarySelectScalar = {
    id?: boolean
    nome?: boolean
    email?: boolean
    telefone?: boolean
    endereco?: boolean
    cpf?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BeneficiaryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "email" | "telefone" | "endereco" | "cpf" | "createdAt" | "updatedAt", ExtArgs["result"]["beneficiary"]>
  export type BeneficiaryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    collectionPoints?: boolean | Beneficiary$collectionPointsArgs<ExtArgs>
    _count?: boolean | BeneficiaryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BeneficiaryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type BeneficiaryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $BeneficiaryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Beneficiary"
    objects: {
      collectionPoints: Prisma.$CollectionPointsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      email: string
      telefone: string
      endereco: string
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
    readonly nome: FieldRef<"Beneficiary", 'String'>
    readonly email: FieldRef<"Beneficiary", 'String'>
    readonly telefone: FieldRef<"Beneficiary", 'String'>
    readonly endereco: FieldRef<"Beneficiary", 'String'>
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
    impactReportId: number | null
    campaigsAwarenessId: number | null
  }

  export type CollectionPointsSumAggregateOutputType = {
    id: number | null
    beneficiaryId: number | null
    impactReportId: number | null
    campaigsAwarenessId: number | null
  }

  export type CollectionPointsMinAggregateOutputType = {
    id: number | null
    beneficiaryId: number | null
    impactReportId: number | null
    campaigsAwarenessId: number | null
    nome: string | null
    endereco: string | null
    telefone: string | null
    horario_de_funcionamento: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CollectionPointsMaxAggregateOutputType = {
    id: number | null
    beneficiaryId: number | null
    impactReportId: number | null
    campaigsAwarenessId: number | null
    nome: string | null
    endereco: string | null
    telefone: string | null
    horario_de_funcionamento: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CollectionPointsCountAggregateOutputType = {
    id: number
    beneficiaryId: number
    impactReportId: number
    campaigsAwarenessId: number
    nome: number
    endereco: number
    telefone: number
    horario_de_funcionamento: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CollectionPointsAvgAggregateInputType = {
    id?: true
    beneficiaryId?: true
    impactReportId?: true
    campaigsAwarenessId?: true
  }

  export type CollectionPointsSumAggregateInputType = {
    id?: true
    beneficiaryId?: true
    impactReportId?: true
    campaigsAwarenessId?: true
  }

  export type CollectionPointsMinAggregateInputType = {
    id?: true
    beneficiaryId?: true
    impactReportId?: true
    campaigsAwarenessId?: true
    nome?: true
    endereco?: true
    telefone?: true
    horario_de_funcionamento?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CollectionPointsMaxAggregateInputType = {
    id?: true
    beneficiaryId?: true
    impactReportId?: true
    campaigsAwarenessId?: true
    nome?: true
    endereco?: true
    telefone?: true
    horario_de_funcionamento?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CollectionPointsCountAggregateInputType = {
    id?: true
    beneficiaryId?: true
    impactReportId?: true
    campaigsAwarenessId?: true
    nome?: true
    endereco?: true
    telefone?: true
    horario_de_funcionamento?: true
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
    impactReportId: number
    campaigsAwarenessId: number
    nome: string
    endereco: string
    telefone: string
    horario_de_funcionamento: Date
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
    impactReportId?: boolean
    campaigsAwarenessId?: boolean
    nome?: boolean
    endereco?: boolean
    telefone?: boolean
    horario_de_funcionamento?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    beneficiary?: boolean | BeneficiaryDefaultArgs<ExtArgs>
    impactReport?: boolean | ReportsCampaignDefaultArgs<ExtArgs>
    campaigsAwareness?: boolean | CampaigsAwarenessDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["collectionPoints"]>

  export type CollectionPointsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    beneficiaryId?: boolean
    impactReportId?: boolean
    campaigsAwarenessId?: boolean
    nome?: boolean
    endereco?: boolean
    telefone?: boolean
    horario_de_funcionamento?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    beneficiary?: boolean | BeneficiaryDefaultArgs<ExtArgs>
    impactReport?: boolean | ReportsCampaignDefaultArgs<ExtArgs>
    campaigsAwareness?: boolean | CampaigsAwarenessDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["collectionPoints"]>

  export type CollectionPointsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    beneficiaryId?: boolean
    impactReportId?: boolean
    campaigsAwarenessId?: boolean
    nome?: boolean
    endereco?: boolean
    telefone?: boolean
    horario_de_funcionamento?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    beneficiary?: boolean | BeneficiaryDefaultArgs<ExtArgs>
    impactReport?: boolean | ReportsCampaignDefaultArgs<ExtArgs>
    campaigsAwareness?: boolean | CampaigsAwarenessDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["collectionPoints"]>

  export type CollectionPointsSelectScalar = {
    id?: boolean
    beneficiaryId?: boolean
    impactReportId?: boolean
    campaigsAwarenessId?: boolean
    nome?: boolean
    endereco?: boolean
    telefone?: boolean
    horario_de_funcionamento?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CollectionPointsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "beneficiaryId" | "impactReportId" | "campaigsAwarenessId" | "nome" | "endereco" | "telefone" | "horario_de_funcionamento" | "createdAt" | "updatedAt", ExtArgs["result"]["collectionPoints"]>
  export type CollectionPointsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    beneficiary?: boolean | BeneficiaryDefaultArgs<ExtArgs>
    impactReport?: boolean | ReportsCampaignDefaultArgs<ExtArgs>
    campaigsAwareness?: boolean | CampaigsAwarenessDefaultArgs<ExtArgs>
  }
  export type CollectionPointsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    beneficiary?: boolean | BeneficiaryDefaultArgs<ExtArgs>
    impactReport?: boolean | ReportsCampaignDefaultArgs<ExtArgs>
    campaigsAwareness?: boolean | CampaigsAwarenessDefaultArgs<ExtArgs>
  }
  export type CollectionPointsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    beneficiary?: boolean | BeneficiaryDefaultArgs<ExtArgs>
    impactReport?: boolean | ReportsCampaignDefaultArgs<ExtArgs>
    campaigsAwareness?: boolean | CampaigsAwarenessDefaultArgs<ExtArgs>
  }

  export type $CollectionPointsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CollectionPoints"
    objects: {
      beneficiary: Prisma.$BeneficiaryPayload<ExtArgs>
      impactReport: Prisma.$ReportsCampaignPayload<ExtArgs>
      campaigsAwareness: Prisma.$CampaigsAwarenessPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      beneficiaryId: number
      impactReportId: number
      campaigsAwarenessId: number
      nome: string
      endereco: string
      telefone: string
      horario_de_funcionamento: Date
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
    beneficiary<T extends BeneficiaryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BeneficiaryDefaultArgs<ExtArgs>>): Prisma__BeneficiaryClient<$Result.GetResult<Prisma.$BeneficiaryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    impactReport<T extends ReportsCampaignDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ReportsCampaignDefaultArgs<ExtArgs>>): Prisma__ReportsCampaignClient<$Result.GetResult<Prisma.$ReportsCampaignPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
    readonly impactReportId: FieldRef<"CollectionPoints", 'Int'>
    readonly campaigsAwarenessId: FieldRef<"CollectionPoints", 'Int'>
    readonly nome: FieldRef<"CollectionPoints", 'String'>
    readonly endereco: FieldRef<"CollectionPoints", 'String'>
    readonly telefone: FieldRef<"CollectionPoints", 'String'>
    readonly horario_de_funcionamento: FieldRef<"CollectionPoints", 'DateTime'>
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
    nome: string | null
    descricao: string | null
    data_inicio: Date | null
    data_fim: Date | null
    localizacao: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CampaigsAwarenessMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    descricao: string | null
    data_inicio: Date | null
    data_fim: Date | null
    localizacao: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CampaigsAwarenessCountAggregateOutputType = {
    id: number
    nome: number
    descricao: number
    data_inicio: number
    data_fim: number
    localizacao: number
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
    nome?: true
    descricao?: true
    data_inicio?: true
    data_fim?: true
    localizacao?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CampaigsAwarenessMaxAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    data_inicio?: true
    data_fim?: true
    localizacao?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CampaigsAwarenessCountAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    data_inicio?: true
    data_fim?: true
    localizacao?: true
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
    nome: string
    descricao: string
    data_inicio: Date
    data_fim: Date
    localizacao: string
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
    nome?: boolean
    descricao?: boolean
    data_inicio?: boolean
    data_fim?: boolean
    localizacao?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    collectionPoints?: boolean | CampaigsAwareness$collectionPointsArgs<ExtArgs>
    _count?: boolean | CampaigsAwarenessCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["campaigsAwareness"]>

  export type CampaigsAwarenessSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
    data_inicio?: boolean
    data_fim?: boolean
    localizacao?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["campaigsAwareness"]>

  export type CampaigsAwarenessSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
    data_inicio?: boolean
    data_fim?: boolean
    localizacao?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["campaigsAwareness"]>

  export type CampaigsAwarenessSelectScalar = {
    id?: boolean
    nome?: boolean
    descricao?: boolean
    data_inicio?: boolean
    data_fim?: boolean
    localizacao?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CampaigsAwarenessOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "descricao" | "data_inicio" | "data_fim" | "localizacao" | "createdAt" | "updatedAt", ExtArgs["result"]["campaigsAwareness"]>
  export type CampaigsAwarenessInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    collectionPoints?: boolean | CampaigsAwareness$collectionPointsArgs<ExtArgs>
    _count?: boolean | CampaigsAwarenessCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CampaigsAwarenessIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CampaigsAwarenessIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CampaigsAwarenessPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CampaigsAwareness"
    objects: {
      collectionPoints: Prisma.$CollectionPointsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      descricao: string
      data_inicio: Date
      data_fim: Date
      localizacao: string
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
    readonly nome: FieldRef<"CampaigsAwareness", 'String'>
    readonly descricao: FieldRef<"CampaigsAwareness", 'String'>
    readonly data_inicio: FieldRef<"CampaigsAwareness", 'DateTime'>
    readonly data_fim: FieldRef<"CampaigsAwareness", 'DateTime'>
    readonly localizacao: FieldRef<"CampaigsAwareness", 'String'>
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
   * Model ReportsCampaign
   */

  export type AggregateReportsCampaign = {
    _count: ReportsCampaignCountAggregateOutputType | null
    _avg: ReportsCampaignAvgAggregateOutputType | null
    _sum: ReportsCampaignSumAggregateOutputType | null
    _min: ReportsCampaignMinAggregateOutputType | null
    _max: ReportsCampaignMaxAggregateOutputType | null
  }

  export type ReportsCampaignAvgAggregateOutputType = {
    id: number | null
    quantidade_alimentos: number | null
    quantidade_beneficiarios: number | null
  }

  export type ReportsCampaignSumAggregateOutputType = {
    id: number | null
    quantidade_alimentos: number | null
    quantidade_beneficiarios: number | null
  }

  export type ReportsCampaignMinAggregateOutputType = {
    id: number | null
    nome: string | null
    descricao: string | null
    localizacao: string | null
    quantidade_alimentos: number | null
    quantidade_beneficiarios: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReportsCampaignMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    descricao: string | null
    localizacao: string | null
    quantidade_alimentos: number | null
    quantidade_beneficiarios: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReportsCampaignCountAggregateOutputType = {
    id: number
    nome: number
    descricao: number
    localizacao: number
    quantidade_alimentos: number
    quantidade_beneficiarios: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ReportsCampaignAvgAggregateInputType = {
    id?: true
    quantidade_alimentos?: true
    quantidade_beneficiarios?: true
  }

  export type ReportsCampaignSumAggregateInputType = {
    id?: true
    quantidade_alimentos?: true
    quantidade_beneficiarios?: true
  }

  export type ReportsCampaignMinAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    localizacao?: true
    quantidade_alimentos?: true
    quantidade_beneficiarios?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReportsCampaignMaxAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    localizacao?: true
    quantidade_alimentos?: true
    quantidade_beneficiarios?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReportsCampaignCountAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    localizacao?: true
    quantidade_alimentos?: true
    quantidade_beneficiarios?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ReportsCampaignAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReportsCampaign to aggregate.
     */
    where?: ReportsCampaignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReportsCampaigns to fetch.
     */
    orderBy?: ReportsCampaignOrderByWithRelationInput | ReportsCampaignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReportsCampaignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReportsCampaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReportsCampaigns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ReportsCampaigns
    **/
    _count?: true | ReportsCampaignCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReportsCampaignAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReportsCampaignSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReportsCampaignMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReportsCampaignMaxAggregateInputType
  }

  export type GetReportsCampaignAggregateType<T extends ReportsCampaignAggregateArgs> = {
        [P in keyof T & keyof AggregateReportsCampaign]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReportsCampaign[P]>
      : GetScalarType<T[P], AggregateReportsCampaign[P]>
  }




  export type ReportsCampaignGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReportsCampaignWhereInput
    orderBy?: ReportsCampaignOrderByWithAggregationInput | ReportsCampaignOrderByWithAggregationInput[]
    by: ReportsCampaignScalarFieldEnum[] | ReportsCampaignScalarFieldEnum
    having?: ReportsCampaignScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReportsCampaignCountAggregateInputType | true
    _avg?: ReportsCampaignAvgAggregateInputType
    _sum?: ReportsCampaignSumAggregateInputType
    _min?: ReportsCampaignMinAggregateInputType
    _max?: ReportsCampaignMaxAggregateInputType
  }

  export type ReportsCampaignGroupByOutputType = {
    id: number
    nome: string
    descricao: string
    localizacao: string
    quantidade_alimentos: number
    quantidade_beneficiarios: number
    createdAt: Date
    updatedAt: Date
    _count: ReportsCampaignCountAggregateOutputType | null
    _avg: ReportsCampaignAvgAggregateOutputType | null
    _sum: ReportsCampaignSumAggregateOutputType | null
    _min: ReportsCampaignMinAggregateOutputType | null
    _max: ReportsCampaignMaxAggregateOutputType | null
  }

  type GetReportsCampaignGroupByPayload<T extends ReportsCampaignGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReportsCampaignGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReportsCampaignGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReportsCampaignGroupByOutputType[P]>
            : GetScalarType<T[P], ReportsCampaignGroupByOutputType[P]>
        }
      >
    >


  export type ReportsCampaignSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
    localizacao?: boolean
    quantidade_alimentos?: boolean
    quantidade_beneficiarios?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    collectionPoints?: boolean | ReportsCampaign$collectionPointsArgs<ExtArgs>
    _count?: boolean | ReportsCampaignCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reportsCampaign"]>

  export type ReportsCampaignSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
    localizacao?: boolean
    quantidade_alimentos?: boolean
    quantidade_beneficiarios?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["reportsCampaign"]>

  export type ReportsCampaignSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
    localizacao?: boolean
    quantidade_alimentos?: boolean
    quantidade_beneficiarios?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["reportsCampaign"]>

  export type ReportsCampaignSelectScalar = {
    id?: boolean
    nome?: boolean
    descricao?: boolean
    localizacao?: boolean
    quantidade_alimentos?: boolean
    quantidade_beneficiarios?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ReportsCampaignOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "descricao" | "localizacao" | "quantidade_alimentos" | "quantidade_beneficiarios" | "createdAt" | "updatedAt", ExtArgs["result"]["reportsCampaign"]>
  export type ReportsCampaignInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    collectionPoints?: boolean | ReportsCampaign$collectionPointsArgs<ExtArgs>
    _count?: boolean | ReportsCampaignCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ReportsCampaignIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ReportsCampaignIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ReportsCampaignPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ReportsCampaign"
    objects: {
      collectionPoints: Prisma.$CollectionPointsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      descricao: string
      localizacao: string
      quantidade_alimentos: number
      quantidade_beneficiarios: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["reportsCampaign"]>
    composites: {}
  }

  type ReportsCampaignGetPayload<S extends boolean | null | undefined | ReportsCampaignDefaultArgs> = $Result.GetResult<Prisma.$ReportsCampaignPayload, S>

  type ReportsCampaignCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReportsCampaignFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReportsCampaignCountAggregateInputType | true
    }

  export interface ReportsCampaignDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ReportsCampaign'], meta: { name: 'ReportsCampaign' } }
    /**
     * Find zero or one ReportsCampaign that matches the filter.
     * @param {ReportsCampaignFindUniqueArgs} args - Arguments to find a ReportsCampaign
     * @example
     * // Get one ReportsCampaign
     * const reportsCampaign = await prisma.reportsCampaign.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReportsCampaignFindUniqueArgs>(args: SelectSubset<T, ReportsCampaignFindUniqueArgs<ExtArgs>>): Prisma__ReportsCampaignClient<$Result.GetResult<Prisma.$ReportsCampaignPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ReportsCampaign that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReportsCampaignFindUniqueOrThrowArgs} args - Arguments to find a ReportsCampaign
     * @example
     * // Get one ReportsCampaign
     * const reportsCampaign = await prisma.reportsCampaign.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReportsCampaignFindUniqueOrThrowArgs>(args: SelectSubset<T, ReportsCampaignFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReportsCampaignClient<$Result.GetResult<Prisma.$ReportsCampaignPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReportsCampaign that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportsCampaignFindFirstArgs} args - Arguments to find a ReportsCampaign
     * @example
     * // Get one ReportsCampaign
     * const reportsCampaign = await prisma.reportsCampaign.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReportsCampaignFindFirstArgs>(args?: SelectSubset<T, ReportsCampaignFindFirstArgs<ExtArgs>>): Prisma__ReportsCampaignClient<$Result.GetResult<Prisma.$ReportsCampaignPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReportsCampaign that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportsCampaignFindFirstOrThrowArgs} args - Arguments to find a ReportsCampaign
     * @example
     * // Get one ReportsCampaign
     * const reportsCampaign = await prisma.reportsCampaign.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReportsCampaignFindFirstOrThrowArgs>(args?: SelectSubset<T, ReportsCampaignFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReportsCampaignClient<$Result.GetResult<Prisma.$ReportsCampaignPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ReportsCampaigns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportsCampaignFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ReportsCampaigns
     * const reportsCampaigns = await prisma.reportsCampaign.findMany()
     * 
     * // Get first 10 ReportsCampaigns
     * const reportsCampaigns = await prisma.reportsCampaign.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reportsCampaignWithIdOnly = await prisma.reportsCampaign.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReportsCampaignFindManyArgs>(args?: SelectSubset<T, ReportsCampaignFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportsCampaignPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ReportsCampaign.
     * @param {ReportsCampaignCreateArgs} args - Arguments to create a ReportsCampaign.
     * @example
     * // Create one ReportsCampaign
     * const ReportsCampaign = await prisma.reportsCampaign.create({
     *   data: {
     *     // ... data to create a ReportsCampaign
     *   }
     * })
     * 
     */
    create<T extends ReportsCampaignCreateArgs>(args: SelectSubset<T, ReportsCampaignCreateArgs<ExtArgs>>): Prisma__ReportsCampaignClient<$Result.GetResult<Prisma.$ReportsCampaignPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ReportsCampaigns.
     * @param {ReportsCampaignCreateManyArgs} args - Arguments to create many ReportsCampaigns.
     * @example
     * // Create many ReportsCampaigns
     * const reportsCampaign = await prisma.reportsCampaign.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReportsCampaignCreateManyArgs>(args?: SelectSubset<T, ReportsCampaignCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ReportsCampaigns and returns the data saved in the database.
     * @param {ReportsCampaignCreateManyAndReturnArgs} args - Arguments to create many ReportsCampaigns.
     * @example
     * // Create many ReportsCampaigns
     * const reportsCampaign = await prisma.reportsCampaign.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ReportsCampaigns and only return the `id`
     * const reportsCampaignWithIdOnly = await prisma.reportsCampaign.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReportsCampaignCreateManyAndReturnArgs>(args?: SelectSubset<T, ReportsCampaignCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportsCampaignPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ReportsCampaign.
     * @param {ReportsCampaignDeleteArgs} args - Arguments to delete one ReportsCampaign.
     * @example
     * // Delete one ReportsCampaign
     * const ReportsCampaign = await prisma.reportsCampaign.delete({
     *   where: {
     *     // ... filter to delete one ReportsCampaign
     *   }
     * })
     * 
     */
    delete<T extends ReportsCampaignDeleteArgs>(args: SelectSubset<T, ReportsCampaignDeleteArgs<ExtArgs>>): Prisma__ReportsCampaignClient<$Result.GetResult<Prisma.$ReportsCampaignPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ReportsCampaign.
     * @param {ReportsCampaignUpdateArgs} args - Arguments to update one ReportsCampaign.
     * @example
     * // Update one ReportsCampaign
     * const reportsCampaign = await prisma.reportsCampaign.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReportsCampaignUpdateArgs>(args: SelectSubset<T, ReportsCampaignUpdateArgs<ExtArgs>>): Prisma__ReportsCampaignClient<$Result.GetResult<Prisma.$ReportsCampaignPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ReportsCampaigns.
     * @param {ReportsCampaignDeleteManyArgs} args - Arguments to filter ReportsCampaigns to delete.
     * @example
     * // Delete a few ReportsCampaigns
     * const { count } = await prisma.reportsCampaign.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReportsCampaignDeleteManyArgs>(args?: SelectSubset<T, ReportsCampaignDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReportsCampaigns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportsCampaignUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ReportsCampaigns
     * const reportsCampaign = await prisma.reportsCampaign.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReportsCampaignUpdateManyArgs>(args: SelectSubset<T, ReportsCampaignUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReportsCampaigns and returns the data updated in the database.
     * @param {ReportsCampaignUpdateManyAndReturnArgs} args - Arguments to update many ReportsCampaigns.
     * @example
     * // Update many ReportsCampaigns
     * const reportsCampaign = await prisma.reportsCampaign.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ReportsCampaigns and only return the `id`
     * const reportsCampaignWithIdOnly = await prisma.reportsCampaign.updateManyAndReturn({
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
    updateManyAndReturn<T extends ReportsCampaignUpdateManyAndReturnArgs>(args: SelectSubset<T, ReportsCampaignUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportsCampaignPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ReportsCampaign.
     * @param {ReportsCampaignUpsertArgs} args - Arguments to update or create a ReportsCampaign.
     * @example
     * // Update or create a ReportsCampaign
     * const reportsCampaign = await prisma.reportsCampaign.upsert({
     *   create: {
     *     // ... data to create a ReportsCampaign
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ReportsCampaign we want to update
     *   }
     * })
     */
    upsert<T extends ReportsCampaignUpsertArgs>(args: SelectSubset<T, ReportsCampaignUpsertArgs<ExtArgs>>): Prisma__ReportsCampaignClient<$Result.GetResult<Prisma.$ReportsCampaignPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ReportsCampaigns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportsCampaignCountArgs} args - Arguments to filter ReportsCampaigns to count.
     * @example
     * // Count the number of ReportsCampaigns
     * const count = await prisma.reportsCampaign.count({
     *   where: {
     *     // ... the filter for the ReportsCampaigns we want to count
     *   }
     * })
    **/
    count<T extends ReportsCampaignCountArgs>(
      args?: Subset<T, ReportsCampaignCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReportsCampaignCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ReportsCampaign.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportsCampaignAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReportsCampaignAggregateArgs>(args: Subset<T, ReportsCampaignAggregateArgs>): Prisma.PrismaPromise<GetReportsCampaignAggregateType<T>>

    /**
     * Group by ReportsCampaign.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportsCampaignGroupByArgs} args - Group by arguments.
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
      T extends ReportsCampaignGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReportsCampaignGroupByArgs['orderBy'] }
        : { orderBy?: ReportsCampaignGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReportsCampaignGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReportsCampaignGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ReportsCampaign model
   */
  readonly fields: ReportsCampaignFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ReportsCampaign.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReportsCampaignClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    collectionPoints<T extends ReportsCampaign$collectionPointsArgs<ExtArgs> = {}>(args?: Subset<T, ReportsCampaign$collectionPointsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollectionPointsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the ReportsCampaign model
   */
  interface ReportsCampaignFieldRefs {
    readonly id: FieldRef<"ReportsCampaign", 'Int'>
    readonly nome: FieldRef<"ReportsCampaign", 'String'>
    readonly descricao: FieldRef<"ReportsCampaign", 'String'>
    readonly localizacao: FieldRef<"ReportsCampaign", 'String'>
    readonly quantidade_alimentos: FieldRef<"ReportsCampaign", 'Int'>
    readonly quantidade_beneficiarios: FieldRef<"ReportsCampaign", 'Int'>
    readonly createdAt: FieldRef<"ReportsCampaign", 'DateTime'>
    readonly updatedAt: FieldRef<"ReportsCampaign", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ReportsCampaign findUnique
   */
  export type ReportsCampaignFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportsCampaign
     */
    select?: ReportsCampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReportsCampaign
     */
    omit?: ReportsCampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportsCampaignInclude<ExtArgs> | null
    /**
     * Filter, which ReportsCampaign to fetch.
     */
    where: ReportsCampaignWhereUniqueInput
  }

  /**
   * ReportsCampaign findUniqueOrThrow
   */
  export type ReportsCampaignFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportsCampaign
     */
    select?: ReportsCampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReportsCampaign
     */
    omit?: ReportsCampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportsCampaignInclude<ExtArgs> | null
    /**
     * Filter, which ReportsCampaign to fetch.
     */
    where: ReportsCampaignWhereUniqueInput
  }

  /**
   * ReportsCampaign findFirst
   */
  export type ReportsCampaignFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportsCampaign
     */
    select?: ReportsCampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReportsCampaign
     */
    omit?: ReportsCampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportsCampaignInclude<ExtArgs> | null
    /**
     * Filter, which ReportsCampaign to fetch.
     */
    where?: ReportsCampaignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReportsCampaigns to fetch.
     */
    orderBy?: ReportsCampaignOrderByWithRelationInput | ReportsCampaignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReportsCampaigns.
     */
    cursor?: ReportsCampaignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReportsCampaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReportsCampaigns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReportsCampaigns.
     */
    distinct?: ReportsCampaignScalarFieldEnum | ReportsCampaignScalarFieldEnum[]
  }

  /**
   * ReportsCampaign findFirstOrThrow
   */
  export type ReportsCampaignFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportsCampaign
     */
    select?: ReportsCampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReportsCampaign
     */
    omit?: ReportsCampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportsCampaignInclude<ExtArgs> | null
    /**
     * Filter, which ReportsCampaign to fetch.
     */
    where?: ReportsCampaignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReportsCampaigns to fetch.
     */
    orderBy?: ReportsCampaignOrderByWithRelationInput | ReportsCampaignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReportsCampaigns.
     */
    cursor?: ReportsCampaignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReportsCampaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReportsCampaigns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReportsCampaigns.
     */
    distinct?: ReportsCampaignScalarFieldEnum | ReportsCampaignScalarFieldEnum[]
  }

  /**
   * ReportsCampaign findMany
   */
  export type ReportsCampaignFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportsCampaign
     */
    select?: ReportsCampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReportsCampaign
     */
    omit?: ReportsCampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportsCampaignInclude<ExtArgs> | null
    /**
     * Filter, which ReportsCampaigns to fetch.
     */
    where?: ReportsCampaignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReportsCampaigns to fetch.
     */
    orderBy?: ReportsCampaignOrderByWithRelationInput | ReportsCampaignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ReportsCampaigns.
     */
    cursor?: ReportsCampaignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReportsCampaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReportsCampaigns.
     */
    skip?: number
    distinct?: ReportsCampaignScalarFieldEnum | ReportsCampaignScalarFieldEnum[]
  }

  /**
   * ReportsCampaign create
   */
  export type ReportsCampaignCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportsCampaign
     */
    select?: ReportsCampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReportsCampaign
     */
    omit?: ReportsCampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportsCampaignInclude<ExtArgs> | null
    /**
     * The data needed to create a ReportsCampaign.
     */
    data: XOR<ReportsCampaignCreateInput, ReportsCampaignUncheckedCreateInput>
  }

  /**
   * ReportsCampaign createMany
   */
  export type ReportsCampaignCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ReportsCampaigns.
     */
    data: ReportsCampaignCreateManyInput | ReportsCampaignCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ReportsCampaign createManyAndReturn
   */
  export type ReportsCampaignCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportsCampaign
     */
    select?: ReportsCampaignSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ReportsCampaign
     */
    omit?: ReportsCampaignOmit<ExtArgs> | null
    /**
     * The data used to create many ReportsCampaigns.
     */
    data: ReportsCampaignCreateManyInput | ReportsCampaignCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ReportsCampaign update
   */
  export type ReportsCampaignUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportsCampaign
     */
    select?: ReportsCampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReportsCampaign
     */
    omit?: ReportsCampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportsCampaignInclude<ExtArgs> | null
    /**
     * The data needed to update a ReportsCampaign.
     */
    data: XOR<ReportsCampaignUpdateInput, ReportsCampaignUncheckedUpdateInput>
    /**
     * Choose, which ReportsCampaign to update.
     */
    where: ReportsCampaignWhereUniqueInput
  }

  /**
   * ReportsCampaign updateMany
   */
  export type ReportsCampaignUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ReportsCampaigns.
     */
    data: XOR<ReportsCampaignUpdateManyMutationInput, ReportsCampaignUncheckedUpdateManyInput>
    /**
     * Filter which ReportsCampaigns to update
     */
    where?: ReportsCampaignWhereInput
    /**
     * Limit how many ReportsCampaigns to update.
     */
    limit?: number
  }

  /**
   * ReportsCampaign updateManyAndReturn
   */
  export type ReportsCampaignUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportsCampaign
     */
    select?: ReportsCampaignSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ReportsCampaign
     */
    omit?: ReportsCampaignOmit<ExtArgs> | null
    /**
     * The data used to update ReportsCampaigns.
     */
    data: XOR<ReportsCampaignUpdateManyMutationInput, ReportsCampaignUncheckedUpdateManyInput>
    /**
     * Filter which ReportsCampaigns to update
     */
    where?: ReportsCampaignWhereInput
    /**
     * Limit how many ReportsCampaigns to update.
     */
    limit?: number
  }

  /**
   * ReportsCampaign upsert
   */
  export type ReportsCampaignUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportsCampaign
     */
    select?: ReportsCampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReportsCampaign
     */
    omit?: ReportsCampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportsCampaignInclude<ExtArgs> | null
    /**
     * The filter to search for the ReportsCampaign to update in case it exists.
     */
    where: ReportsCampaignWhereUniqueInput
    /**
     * In case the ReportsCampaign found by the `where` argument doesn't exist, create a new ReportsCampaign with this data.
     */
    create: XOR<ReportsCampaignCreateInput, ReportsCampaignUncheckedCreateInput>
    /**
     * In case the ReportsCampaign was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReportsCampaignUpdateInput, ReportsCampaignUncheckedUpdateInput>
  }

  /**
   * ReportsCampaign delete
   */
  export type ReportsCampaignDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportsCampaign
     */
    select?: ReportsCampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReportsCampaign
     */
    omit?: ReportsCampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportsCampaignInclude<ExtArgs> | null
    /**
     * Filter which ReportsCampaign to delete.
     */
    where: ReportsCampaignWhereUniqueInput
  }

  /**
   * ReportsCampaign deleteMany
   */
  export type ReportsCampaignDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReportsCampaigns to delete
     */
    where?: ReportsCampaignWhereInput
    /**
     * Limit how many ReportsCampaigns to delete.
     */
    limit?: number
  }

  /**
   * ReportsCampaign.collectionPoints
   */
  export type ReportsCampaign$collectionPointsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * ReportsCampaign without action
   */
  export type ReportsCampaignDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportsCampaign
     */
    select?: ReportsCampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReportsCampaign
     */
    omit?: ReportsCampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportsCampaignInclude<ExtArgs> | null
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
    nome: 'nome',
    email: 'email',
    telefone: 'telefone',
    endereco: 'endereco',
    cnpj: 'cnpj',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DonorScalarFieldEnum = (typeof DonorScalarFieldEnum)[keyof typeof DonorScalarFieldEnum]


  export const BeneficiaryScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    email: 'email',
    telefone: 'telefone',
    endereco: 'endereco',
    cpf: 'cpf',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BeneficiaryScalarFieldEnum = (typeof BeneficiaryScalarFieldEnum)[keyof typeof BeneficiaryScalarFieldEnum]


  export const CollectionPointsScalarFieldEnum: {
    id: 'id',
    beneficiaryId: 'beneficiaryId',
    impactReportId: 'impactReportId',
    campaigsAwarenessId: 'campaigsAwarenessId',
    nome: 'nome',
    endereco: 'endereco',
    telefone: 'telefone',
    horario_de_funcionamento: 'horario_de_funcionamento',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CollectionPointsScalarFieldEnum = (typeof CollectionPointsScalarFieldEnum)[keyof typeof CollectionPointsScalarFieldEnum]


  export const CampaigsAwarenessScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    descricao: 'descricao',
    data_inicio: 'data_inicio',
    data_fim: 'data_fim',
    localizacao: 'localizacao',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CampaigsAwarenessScalarFieldEnum = (typeof CampaigsAwarenessScalarFieldEnum)[keyof typeof CampaigsAwarenessScalarFieldEnum]


  export const ReportsCampaignScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    descricao: 'descricao',
    localizacao: 'localizacao',
    quantidade_alimentos: 'quantidade_alimentos',
    quantidade_beneficiarios: 'quantidade_beneficiarios',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ReportsCampaignScalarFieldEnum = (typeof ReportsCampaignScalarFieldEnum)[keyof typeof ReportsCampaignScalarFieldEnum]


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
    nome?: StringFilter<"Donor"> | string
    email?: StringFilter<"Donor"> | string
    telefone?: StringFilter<"Donor"> | string
    endereco?: StringFilter<"Donor"> | string
    cnpj?: StringFilter<"Donor"> | string
    createdAt?: DateTimeFilter<"Donor"> | Date | string
    updatedAt?: DateTimeFilter<"Donor"> | Date | string
  }

  export type DonorOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
    endereco?: SortOrder
    cnpj?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DonorWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DonorWhereInput | DonorWhereInput[]
    OR?: DonorWhereInput[]
    NOT?: DonorWhereInput | DonorWhereInput[]
    nome?: StringFilter<"Donor"> | string
    email?: StringFilter<"Donor"> | string
    telefone?: StringFilter<"Donor"> | string
    endereco?: StringFilter<"Donor"> | string
    cnpj?: StringFilter<"Donor"> | string
    createdAt?: DateTimeFilter<"Donor"> | Date | string
    updatedAt?: DateTimeFilter<"Donor"> | Date | string
  }, "id">

  export type DonorOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
    endereco?: SortOrder
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
    nome?: StringWithAggregatesFilter<"Donor"> | string
    email?: StringWithAggregatesFilter<"Donor"> | string
    telefone?: StringWithAggregatesFilter<"Donor"> | string
    endereco?: StringWithAggregatesFilter<"Donor"> | string
    cnpj?: StringWithAggregatesFilter<"Donor"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Donor"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Donor"> | Date | string
  }

  export type BeneficiaryWhereInput = {
    AND?: BeneficiaryWhereInput | BeneficiaryWhereInput[]
    OR?: BeneficiaryWhereInput[]
    NOT?: BeneficiaryWhereInput | BeneficiaryWhereInput[]
    id?: IntFilter<"Beneficiary"> | number
    nome?: StringFilter<"Beneficiary"> | string
    email?: StringFilter<"Beneficiary"> | string
    telefone?: StringFilter<"Beneficiary"> | string
    endereco?: StringFilter<"Beneficiary"> | string
    cpf?: StringFilter<"Beneficiary"> | string
    createdAt?: DateTimeFilter<"Beneficiary"> | Date | string
    updatedAt?: DateTimeFilter<"Beneficiary"> | Date | string
    collectionPoints?: CollectionPointsListRelationFilter
  }

  export type BeneficiaryOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
    endereco?: SortOrder
    cpf?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    collectionPoints?: CollectionPointsOrderByRelationAggregateInput
  }

  export type BeneficiaryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BeneficiaryWhereInput | BeneficiaryWhereInput[]
    OR?: BeneficiaryWhereInput[]
    NOT?: BeneficiaryWhereInput | BeneficiaryWhereInput[]
    nome?: StringFilter<"Beneficiary"> | string
    email?: StringFilter<"Beneficiary"> | string
    telefone?: StringFilter<"Beneficiary"> | string
    endereco?: StringFilter<"Beneficiary"> | string
    cpf?: StringFilter<"Beneficiary"> | string
    createdAt?: DateTimeFilter<"Beneficiary"> | Date | string
    updatedAt?: DateTimeFilter<"Beneficiary"> | Date | string
    collectionPoints?: CollectionPointsListRelationFilter
  }, "id">

  export type BeneficiaryOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
    endereco?: SortOrder
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
    nome?: StringWithAggregatesFilter<"Beneficiary"> | string
    email?: StringWithAggregatesFilter<"Beneficiary"> | string
    telefone?: StringWithAggregatesFilter<"Beneficiary"> | string
    endereco?: StringWithAggregatesFilter<"Beneficiary"> | string
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
    impactReportId?: IntFilter<"CollectionPoints"> | number
    campaigsAwarenessId?: IntFilter<"CollectionPoints"> | number
    nome?: StringFilter<"CollectionPoints"> | string
    endereco?: StringFilter<"CollectionPoints"> | string
    telefone?: StringFilter<"CollectionPoints"> | string
    horario_de_funcionamento?: DateTimeFilter<"CollectionPoints"> | Date | string
    createdAt?: DateTimeFilter<"CollectionPoints"> | Date | string
    updatedAt?: DateTimeFilter<"CollectionPoints"> | Date | string
    beneficiary?: XOR<BeneficiaryScalarRelationFilter, BeneficiaryWhereInput>
    impactReport?: XOR<ReportsCampaignScalarRelationFilter, ReportsCampaignWhereInput>
    campaigsAwareness?: XOR<CampaigsAwarenessScalarRelationFilter, CampaigsAwarenessWhereInput>
  }

  export type CollectionPointsOrderByWithRelationInput = {
    id?: SortOrder
    beneficiaryId?: SortOrder
    impactReportId?: SortOrder
    campaigsAwarenessId?: SortOrder
    nome?: SortOrder
    endereco?: SortOrder
    telefone?: SortOrder
    horario_de_funcionamento?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    beneficiary?: BeneficiaryOrderByWithRelationInput
    impactReport?: ReportsCampaignOrderByWithRelationInput
    campaigsAwareness?: CampaigsAwarenessOrderByWithRelationInput
  }

  export type CollectionPointsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CollectionPointsWhereInput | CollectionPointsWhereInput[]
    OR?: CollectionPointsWhereInput[]
    NOT?: CollectionPointsWhereInput | CollectionPointsWhereInput[]
    beneficiaryId?: IntFilter<"CollectionPoints"> | number
    impactReportId?: IntFilter<"CollectionPoints"> | number
    campaigsAwarenessId?: IntFilter<"CollectionPoints"> | number
    nome?: StringFilter<"CollectionPoints"> | string
    endereco?: StringFilter<"CollectionPoints"> | string
    telefone?: StringFilter<"CollectionPoints"> | string
    horario_de_funcionamento?: DateTimeFilter<"CollectionPoints"> | Date | string
    createdAt?: DateTimeFilter<"CollectionPoints"> | Date | string
    updatedAt?: DateTimeFilter<"CollectionPoints"> | Date | string
    beneficiary?: XOR<BeneficiaryScalarRelationFilter, BeneficiaryWhereInput>
    impactReport?: XOR<ReportsCampaignScalarRelationFilter, ReportsCampaignWhereInput>
    campaigsAwareness?: XOR<CampaigsAwarenessScalarRelationFilter, CampaigsAwarenessWhereInput>
  }, "id">

  export type CollectionPointsOrderByWithAggregationInput = {
    id?: SortOrder
    beneficiaryId?: SortOrder
    impactReportId?: SortOrder
    campaigsAwarenessId?: SortOrder
    nome?: SortOrder
    endereco?: SortOrder
    telefone?: SortOrder
    horario_de_funcionamento?: SortOrder
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
    impactReportId?: IntWithAggregatesFilter<"CollectionPoints"> | number
    campaigsAwarenessId?: IntWithAggregatesFilter<"CollectionPoints"> | number
    nome?: StringWithAggregatesFilter<"CollectionPoints"> | string
    endereco?: StringWithAggregatesFilter<"CollectionPoints"> | string
    telefone?: StringWithAggregatesFilter<"CollectionPoints"> | string
    horario_de_funcionamento?: DateTimeWithAggregatesFilter<"CollectionPoints"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"CollectionPoints"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CollectionPoints"> | Date | string
  }

  export type CampaigsAwarenessWhereInput = {
    AND?: CampaigsAwarenessWhereInput | CampaigsAwarenessWhereInput[]
    OR?: CampaigsAwarenessWhereInput[]
    NOT?: CampaigsAwarenessWhereInput | CampaigsAwarenessWhereInput[]
    id?: IntFilter<"CampaigsAwareness"> | number
    nome?: StringFilter<"CampaigsAwareness"> | string
    descricao?: StringFilter<"CampaigsAwareness"> | string
    data_inicio?: DateTimeFilter<"CampaigsAwareness"> | Date | string
    data_fim?: DateTimeFilter<"CampaigsAwareness"> | Date | string
    localizacao?: StringFilter<"CampaigsAwareness"> | string
    createdAt?: DateTimeFilter<"CampaigsAwareness"> | Date | string
    updatedAt?: DateTimeFilter<"CampaigsAwareness"> | Date | string
    collectionPoints?: CollectionPointsListRelationFilter
  }

  export type CampaigsAwarenessOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    data_inicio?: SortOrder
    data_fim?: SortOrder
    localizacao?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    collectionPoints?: CollectionPointsOrderByRelationAggregateInput
  }

  export type CampaigsAwarenessWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CampaigsAwarenessWhereInput | CampaigsAwarenessWhereInput[]
    OR?: CampaigsAwarenessWhereInput[]
    NOT?: CampaigsAwarenessWhereInput | CampaigsAwarenessWhereInput[]
    nome?: StringFilter<"CampaigsAwareness"> | string
    descricao?: StringFilter<"CampaigsAwareness"> | string
    data_inicio?: DateTimeFilter<"CampaigsAwareness"> | Date | string
    data_fim?: DateTimeFilter<"CampaigsAwareness"> | Date | string
    localizacao?: StringFilter<"CampaigsAwareness"> | string
    createdAt?: DateTimeFilter<"CampaigsAwareness"> | Date | string
    updatedAt?: DateTimeFilter<"CampaigsAwareness"> | Date | string
    collectionPoints?: CollectionPointsListRelationFilter
  }, "id">

  export type CampaigsAwarenessOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    data_inicio?: SortOrder
    data_fim?: SortOrder
    localizacao?: SortOrder
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
    nome?: StringWithAggregatesFilter<"CampaigsAwareness"> | string
    descricao?: StringWithAggregatesFilter<"CampaigsAwareness"> | string
    data_inicio?: DateTimeWithAggregatesFilter<"CampaigsAwareness"> | Date | string
    data_fim?: DateTimeWithAggregatesFilter<"CampaigsAwareness"> | Date | string
    localizacao?: StringWithAggregatesFilter<"CampaigsAwareness"> | string
    createdAt?: DateTimeWithAggregatesFilter<"CampaigsAwareness"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CampaigsAwareness"> | Date | string
  }

  export type ReportsCampaignWhereInput = {
    AND?: ReportsCampaignWhereInput | ReportsCampaignWhereInput[]
    OR?: ReportsCampaignWhereInput[]
    NOT?: ReportsCampaignWhereInput | ReportsCampaignWhereInput[]
    id?: IntFilter<"ReportsCampaign"> | number
    nome?: StringFilter<"ReportsCampaign"> | string
    descricao?: StringFilter<"ReportsCampaign"> | string
    localizacao?: StringFilter<"ReportsCampaign"> | string
    quantidade_alimentos?: IntFilter<"ReportsCampaign"> | number
    quantidade_beneficiarios?: IntFilter<"ReportsCampaign"> | number
    createdAt?: DateTimeFilter<"ReportsCampaign"> | Date | string
    updatedAt?: DateTimeFilter<"ReportsCampaign"> | Date | string
    collectionPoints?: CollectionPointsListRelationFilter
  }

  export type ReportsCampaignOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    localizacao?: SortOrder
    quantidade_alimentos?: SortOrder
    quantidade_beneficiarios?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    collectionPoints?: CollectionPointsOrderByRelationAggregateInput
  }

  export type ReportsCampaignWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ReportsCampaignWhereInput | ReportsCampaignWhereInput[]
    OR?: ReportsCampaignWhereInput[]
    NOT?: ReportsCampaignWhereInput | ReportsCampaignWhereInput[]
    nome?: StringFilter<"ReportsCampaign"> | string
    descricao?: StringFilter<"ReportsCampaign"> | string
    localizacao?: StringFilter<"ReportsCampaign"> | string
    quantidade_alimentos?: IntFilter<"ReportsCampaign"> | number
    quantidade_beneficiarios?: IntFilter<"ReportsCampaign"> | number
    createdAt?: DateTimeFilter<"ReportsCampaign"> | Date | string
    updatedAt?: DateTimeFilter<"ReportsCampaign"> | Date | string
    collectionPoints?: CollectionPointsListRelationFilter
  }, "id">

  export type ReportsCampaignOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    localizacao?: SortOrder
    quantidade_alimentos?: SortOrder
    quantidade_beneficiarios?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ReportsCampaignCountOrderByAggregateInput
    _avg?: ReportsCampaignAvgOrderByAggregateInput
    _max?: ReportsCampaignMaxOrderByAggregateInput
    _min?: ReportsCampaignMinOrderByAggregateInput
    _sum?: ReportsCampaignSumOrderByAggregateInput
  }

  export type ReportsCampaignScalarWhereWithAggregatesInput = {
    AND?: ReportsCampaignScalarWhereWithAggregatesInput | ReportsCampaignScalarWhereWithAggregatesInput[]
    OR?: ReportsCampaignScalarWhereWithAggregatesInput[]
    NOT?: ReportsCampaignScalarWhereWithAggregatesInput | ReportsCampaignScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ReportsCampaign"> | number
    nome?: StringWithAggregatesFilter<"ReportsCampaign"> | string
    descricao?: StringWithAggregatesFilter<"ReportsCampaign"> | string
    localizacao?: StringWithAggregatesFilter<"ReportsCampaign"> | string
    quantidade_alimentos?: IntWithAggregatesFilter<"ReportsCampaign"> | number
    quantidade_beneficiarios?: IntWithAggregatesFilter<"ReportsCampaign"> | number
    createdAt?: DateTimeWithAggregatesFilter<"ReportsCampaign"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ReportsCampaign"> | Date | string
  }

  export type DonorCreateInput = {
    nome: string
    email: string
    telefone: string
    endereco: string
    cnpj: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DonorUncheckedCreateInput = {
    id?: number
    nome: string
    email: string
    telefone: string
    endereco: string
    cnpj: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DonorUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DonorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DonorCreateManyInput = {
    id?: number
    nome: string
    email: string
    telefone: string
    endereco: string
    cnpj: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DonorUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DonorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BeneficiaryCreateInput = {
    nome: string
    email: string
    telefone: string
    endereco: string
    cpf: string
    createdAt?: Date | string
    updatedAt?: Date | string
    collectionPoints?: CollectionPointsCreateNestedManyWithoutBeneficiaryInput
  }

  export type BeneficiaryUncheckedCreateInput = {
    id?: number
    nome: string
    email: string
    telefone: string
    endereco: string
    cpf: string
    createdAt?: Date | string
    updatedAt?: Date | string
    collectionPoints?: CollectionPointsUncheckedCreateNestedManyWithoutBeneficiaryInput
  }

  export type BeneficiaryUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    collectionPoints?: CollectionPointsUpdateManyWithoutBeneficiaryNestedInput
  }

  export type BeneficiaryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    collectionPoints?: CollectionPointsUncheckedUpdateManyWithoutBeneficiaryNestedInput
  }

  export type BeneficiaryCreateManyInput = {
    id?: number
    nome: string
    email: string
    telefone: string
    endereco: string
    cpf: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BeneficiaryUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BeneficiaryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CollectionPointsCreateInput = {
    nome: string
    endereco: string
    telefone: string
    horario_de_funcionamento: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    beneficiary: BeneficiaryCreateNestedOneWithoutCollectionPointsInput
    impactReport: ReportsCampaignCreateNestedOneWithoutCollectionPointsInput
    campaigsAwareness: CampaigsAwarenessCreateNestedOneWithoutCollectionPointsInput
  }

  export type CollectionPointsUncheckedCreateInput = {
    id?: number
    beneficiaryId: number
    impactReportId: number
    campaigsAwarenessId: number
    nome: string
    endereco: string
    telefone: string
    horario_de_funcionamento: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CollectionPointsUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    horario_de_funcionamento?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    beneficiary?: BeneficiaryUpdateOneRequiredWithoutCollectionPointsNestedInput
    impactReport?: ReportsCampaignUpdateOneRequiredWithoutCollectionPointsNestedInput
    campaigsAwareness?: CampaigsAwarenessUpdateOneRequiredWithoutCollectionPointsNestedInput
  }

  export type CollectionPointsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    beneficiaryId?: IntFieldUpdateOperationsInput | number
    impactReportId?: IntFieldUpdateOperationsInput | number
    campaigsAwarenessId?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    horario_de_funcionamento?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CollectionPointsCreateManyInput = {
    id?: number
    beneficiaryId: number
    impactReportId: number
    campaigsAwarenessId: number
    nome: string
    endereco: string
    telefone: string
    horario_de_funcionamento: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CollectionPointsUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    horario_de_funcionamento?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CollectionPointsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    beneficiaryId?: IntFieldUpdateOperationsInput | number
    impactReportId?: IntFieldUpdateOperationsInput | number
    campaigsAwarenessId?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    horario_de_funcionamento?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CampaigsAwarenessCreateInput = {
    nome: string
    descricao: string
    data_inicio: Date | string
    data_fim: Date | string
    localizacao: string
    createdAt?: Date | string
    updatedAt?: Date | string
    collectionPoints?: CollectionPointsCreateNestedManyWithoutCampaigsAwarenessInput
  }

  export type CampaigsAwarenessUncheckedCreateInput = {
    id?: number
    nome: string
    descricao: string
    data_inicio: Date | string
    data_fim: Date | string
    localizacao: string
    createdAt?: Date | string
    updatedAt?: Date | string
    collectionPoints?: CollectionPointsUncheckedCreateNestedManyWithoutCampaigsAwarenessInput
  }

  export type CampaigsAwarenessUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    data_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    data_fim?: DateTimeFieldUpdateOperationsInput | Date | string
    localizacao?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    collectionPoints?: CollectionPointsUpdateManyWithoutCampaigsAwarenessNestedInput
  }

  export type CampaigsAwarenessUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    data_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    data_fim?: DateTimeFieldUpdateOperationsInput | Date | string
    localizacao?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    collectionPoints?: CollectionPointsUncheckedUpdateManyWithoutCampaigsAwarenessNestedInput
  }

  export type CampaigsAwarenessCreateManyInput = {
    id?: number
    nome: string
    descricao: string
    data_inicio: Date | string
    data_fim: Date | string
    localizacao: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CampaigsAwarenessUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    data_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    data_fim?: DateTimeFieldUpdateOperationsInput | Date | string
    localizacao?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CampaigsAwarenessUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    data_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    data_fim?: DateTimeFieldUpdateOperationsInput | Date | string
    localizacao?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportsCampaignCreateInput = {
    nome: string
    descricao: string
    localizacao: string
    quantidade_alimentos: number
    quantidade_beneficiarios: number
    createdAt?: Date | string
    updatedAt?: Date | string
    collectionPoints?: CollectionPointsCreateNestedManyWithoutImpactReportInput
  }

  export type ReportsCampaignUncheckedCreateInput = {
    id?: number
    nome: string
    descricao: string
    localizacao: string
    quantidade_alimentos: number
    quantidade_beneficiarios: number
    createdAt?: Date | string
    updatedAt?: Date | string
    collectionPoints?: CollectionPointsUncheckedCreateNestedManyWithoutImpactReportInput
  }

  export type ReportsCampaignUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    localizacao?: StringFieldUpdateOperationsInput | string
    quantidade_alimentos?: IntFieldUpdateOperationsInput | number
    quantidade_beneficiarios?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    collectionPoints?: CollectionPointsUpdateManyWithoutImpactReportNestedInput
  }

  export type ReportsCampaignUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    localizacao?: StringFieldUpdateOperationsInput | string
    quantidade_alimentos?: IntFieldUpdateOperationsInput | number
    quantidade_beneficiarios?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    collectionPoints?: CollectionPointsUncheckedUpdateManyWithoutImpactReportNestedInput
  }

  export type ReportsCampaignCreateManyInput = {
    id?: number
    nome: string
    descricao: string
    localizacao: string
    quantidade_alimentos: number
    quantidade_beneficiarios: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReportsCampaignUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    localizacao?: StringFieldUpdateOperationsInput | string
    quantidade_alimentos?: IntFieldUpdateOperationsInput | number
    quantidade_beneficiarios?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportsCampaignUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    localizacao?: StringFieldUpdateOperationsInput | string
    quantidade_alimentos?: IntFieldUpdateOperationsInput | number
    quantidade_beneficiarios?: IntFieldUpdateOperationsInput | number
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

  export type DonorCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
    endereco?: SortOrder
    cnpj?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DonorAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DonorMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
    endereco?: SortOrder
    cnpj?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DonorMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
    endereco?: SortOrder
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

  export type CollectionPointsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BeneficiaryCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
    endereco?: SortOrder
    cpf?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BeneficiaryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BeneficiaryMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
    endereco?: SortOrder
    cpf?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BeneficiaryMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
    endereco?: SortOrder
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

  export type ReportsCampaignScalarRelationFilter = {
    is?: ReportsCampaignWhereInput
    isNot?: ReportsCampaignWhereInput
  }

  export type CampaigsAwarenessScalarRelationFilter = {
    is?: CampaigsAwarenessWhereInput
    isNot?: CampaigsAwarenessWhereInput
  }

  export type CollectionPointsCountOrderByAggregateInput = {
    id?: SortOrder
    beneficiaryId?: SortOrder
    impactReportId?: SortOrder
    campaigsAwarenessId?: SortOrder
    nome?: SortOrder
    endereco?: SortOrder
    telefone?: SortOrder
    horario_de_funcionamento?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CollectionPointsAvgOrderByAggregateInput = {
    id?: SortOrder
    beneficiaryId?: SortOrder
    impactReportId?: SortOrder
    campaigsAwarenessId?: SortOrder
  }

  export type CollectionPointsMaxOrderByAggregateInput = {
    id?: SortOrder
    beneficiaryId?: SortOrder
    impactReportId?: SortOrder
    campaigsAwarenessId?: SortOrder
    nome?: SortOrder
    endereco?: SortOrder
    telefone?: SortOrder
    horario_de_funcionamento?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CollectionPointsMinOrderByAggregateInput = {
    id?: SortOrder
    beneficiaryId?: SortOrder
    impactReportId?: SortOrder
    campaigsAwarenessId?: SortOrder
    nome?: SortOrder
    endereco?: SortOrder
    telefone?: SortOrder
    horario_de_funcionamento?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CollectionPointsSumOrderByAggregateInput = {
    id?: SortOrder
    beneficiaryId?: SortOrder
    impactReportId?: SortOrder
    campaigsAwarenessId?: SortOrder
  }

  export type CampaigsAwarenessCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    data_inicio?: SortOrder
    data_fim?: SortOrder
    localizacao?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CampaigsAwarenessAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CampaigsAwarenessMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    data_inicio?: SortOrder
    data_fim?: SortOrder
    localizacao?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CampaigsAwarenessMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    data_inicio?: SortOrder
    data_fim?: SortOrder
    localizacao?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CampaigsAwarenessSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ReportsCampaignCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    localizacao?: SortOrder
    quantidade_alimentos?: SortOrder
    quantidade_beneficiarios?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReportsCampaignAvgOrderByAggregateInput = {
    id?: SortOrder
    quantidade_alimentos?: SortOrder
    quantidade_beneficiarios?: SortOrder
  }

  export type ReportsCampaignMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    localizacao?: SortOrder
    quantidade_alimentos?: SortOrder
    quantidade_beneficiarios?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReportsCampaignMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    localizacao?: SortOrder
    quantidade_alimentos?: SortOrder
    quantidade_beneficiarios?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReportsCampaignSumOrderByAggregateInput = {
    id?: SortOrder
    quantidade_alimentos?: SortOrder
    quantidade_beneficiarios?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CollectionPointsCreateNestedManyWithoutBeneficiaryInput = {
    create?: XOR<CollectionPointsCreateWithoutBeneficiaryInput, CollectionPointsUncheckedCreateWithoutBeneficiaryInput> | CollectionPointsCreateWithoutBeneficiaryInput[] | CollectionPointsUncheckedCreateWithoutBeneficiaryInput[]
    connectOrCreate?: CollectionPointsCreateOrConnectWithoutBeneficiaryInput | CollectionPointsCreateOrConnectWithoutBeneficiaryInput[]
    createMany?: CollectionPointsCreateManyBeneficiaryInputEnvelope
    connect?: CollectionPointsWhereUniqueInput | CollectionPointsWhereUniqueInput[]
  }

  export type CollectionPointsUncheckedCreateNestedManyWithoutBeneficiaryInput = {
    create?: XOR<CollectionPointsCreateWithoutBeneficiaryInput, CollectionPointsUncheckedCreateWithoutBeneficiaryInput> | CollectionPointsCreateWithoutBeneficiaryInput[] | CollectionPointsUncheckedCreateWithoutBeneficiaryInput[]
    connectOrCreate?: CollectionPointsCreateOrConnectWithoutBeneficiaryInput | CollectionPointsCreateOrConnectWithoutBeneficiaryInput[]
    createMany?: CollectionPointsCreateManyBeneficiaryInputEnvelope
    connect?: CollectionPointsWhereUniqueInput | CollectionPointsWhereUniqueInput[]
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

  export type BeneficiaryCreateNestedOneWithoutCollectionPointsInput = {
    create?: XOR<BeneficiaryCreateWithoutCollectionPointsInput, BeneficiaryUncheckedCreateWithoutCollectionPointsInput>
    connectOrCreate?: BeneficiaryCreateOrConnectWithoutCollectionPointsInput
    connect?: BeneficiaryWhereUniqueInput
  }

  export type ReportsCampaignCreateNestedOneWithoutCollectionPointsInput = {
    create?: XOR<ReportsCampaignCreateWithoutCollectionPointsInput, ReportsCampaignUncheckedCreateWithoutCollectionPointsInput>
    connectOrCreate?: ReportsCampaignCreateOrConnectWithoutCollectionPointsInput
    connect?: ReportsCampaignWhereUniqueInput
  }

  export type CampaigsAwarenessCreateNestedOneWithoutCollectionPointsInput = {
    create?: XOR<CampaigsAwarenessCreateWithoutCollectionPointsInput, CampaigsAwarenessUncheckedCreateWithoutCollectionPointsInput>
    connectOrCreate?: CampaigsAwarenessCreateOrConnectWithoutCollectionPointsInput
    connect?: CampaigsAwarenessWhereUniqueInput
  }

  export type BeneficiaryUpdateOneRequiredWithoutCollectionPointsNestedInput = {
    create?: XOR<BeneficiaryCreateWithoutCollectionPointsInput, BeneficiaryUncheckedCreateWithoutCollectionPointsInput>
    connectOrCreate?: BeneficiaryCreateOrConnectWithoutCollectionPointsInput
    upsert?: BeneficiaryUpsertWithoutCollectionPointsInput
    connect?: BeneficiaryWhereUniqueInput
    update?: XOR<XOR<BeneficiaryUpdateToOneWithWhereWithoutCollectionPointsInput, BeneficiaryUpdateWithoutCollectionPointsInput>, BeneficiaryUncheckedUpdateWithoutCollectionPointsInput>
  }

  export type ReportsCampaignUpdateOneRequiredWithoutCollectionPointsNestedInput = {
    create?: XOR<ReportsCampaignCreateWithoutCollectionPointsInput, ReportsCampaignUncheckedCreateWithoutCollectionPointsInput>
    connectOrCreate?: ReportsCampaignCreateOrConnectWithoutCollectionPointsInput
    upsert?: ReportsCampaignUpsertWithoutCollectionPointsInput
    connect?: ReportsCampaignWhereUniqueInput
    update?: XOR<XOR<ReportsCampaignUpdateToOneWithWhereWithoutCollectionPointsInput, ReportsCampaignUpdateWithoutCollectionPointsInput>, ReportsCampaignUncheckedUpdateWithoutCollectionPointsInput>
  }

  export type CampaigsAwarenessUpdateOneRequiredWithoutCollectionPointsNestedInput = {
    create?: XOR<CampaigsAwarenessCreateWithoutCollectionPointsInput, CampaigsAwarenessUncheckedCreateWithoutCollectionPointsInput>
    connectOrCreate?: CampaigsAwarenessCreateOrConnectWithoutCollectionPointsInput
    upsert?: CampaigsAwarenessUpsertWithoutCollectionPointsInput
    connect?: CampaigsAwarenessWhereUniqueInput
    update?: XOR<XOR<CampaigsAwarenessUpdateToOneWithWhereWithoutCollectionPointsInput, CampaigsAwarenessUpdateWithoutCollectionPointsInput>, CampaigsAwarenessUncheckedUpdateWithoutCollectionPointsInput>
  }

  export type CollectionPointsCreateNestedManyWithoutCampaigsAwarenessInput = {
    create?: XOR<CollectionPointsCreateWithoutCampaigsAwarenessInput, CollectionPointsUncheckedCreateWithoutCampaigsAwarenessInput> | CollectionPointsCreateWithoutCampaigsAwarenessInput[] | CollectionPointsUncheckedCreateWithoutCampaigsAwarenessInput[]
    connectOrCreate?: CollectionPointsCreateOrConnectWithoutCampaigsAwarenessInput | CollectionPointsCreateOrConnectWithoutCampaigsAwarenessInput[]
    createMany?: CollectionPointsCreateManyCampaigsAwarenessInputEnvelope
    connect?: CollectionPointsWhereUniqueInput | CollectionPointsWhereUniqueInput[]
  }

  export type CollectionPointsUncheckedCreateNestedManyWithoutCampaigsAwarenessInput = {
    create?: XOR<CollectionPointsCreateWithoutCampaigsAwarenessInput, CollectionPointsUncheckedCreateWithoutCampaigsAwarenessInput> | CollectionPointsCreateWithoutCampaigsAwarenessInput[] | CollectionPointsUncheckedCreateWithoutCampaigsAwarenessInput[]
    connectOrCreate?: CollectionPointsCreateOrConnectWithoutCampaigsAwarenessInput | CollectionPointsCreateOrConnectWithoutCampaigsAwarenessInput[]
    createMany?: CollectionPointsCreateManyCampaigsAwarenessInputEnvelope
    connect?: CollectionPointsWhereUniqueInput | CollectionPointsWhereUniqueInput[]
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

  export type CollectionPointsCreateNestedManyWithoutImpactReportInput = {
    create?: XOR<CollectionPointsCreateWithoutImpactReportInput, CollectionPointsUncheckedCreateWithoutImpactReportInput> | CollectionPointsCreateWithoutImpactReportInput[] | CollectionPointsUncheckedCreateWithoutImpactReportInput[]
    connectOrCreate?: CollectionPointsCreateOrConnectWithoutImpactReportInput | CollectionPointsCreateOrConnectWithoutImpactReportInput[]
    createMany?: CollectionPointsCreateManyImpactReportInputEnvelope
    connect?: CollectionPointsWhereUniqueInput | CollectionPointsWhereUniqueInput[]
  }

  export type CollectionPointsUncheckedCreateNestedManyWithoutImpactReportInput = {
    create?: XOR<CollectionPointsCreateWithoutImpactReportInput, CollectionPointsUncheckedCreateWithoutImpactReportInput> | CollectionPointsCreateWithoutImpactReportInput[] | CollectionPointsUncheckedCreateWithoutImpactReportInput[]
    connectOrCreate?: CollectionPointsCreateOrConnectWithoutImpactReportInput | CollectionPointsCreateOrConnectWithoutImpactReportInput[]
    createMany?: CollectionPointsCreateManyImpactReportInputEnvelope
    connect?: CollectionPointsWhereUniqueInput | CollectionPointsWhereUniqueInput[]
  }

  export type CollectionPointsUpdateManyWithoutImpactReportNestedInput = {
    create?: XOR<CollectionPointsCreateWithoutImpactReportInput, CollectionPointsUncheckedCreateWithoutImpactReportInput> | CollectionPointsCreateWithoutImpactReportInput[] | CollectionPointsUncheckedCreateWithoutImpactReportInput[]
    connectOrCreate?: CollectionPointsCreateOrConnectWithoutImpactReportInput | CollectionPointsCreateOrConnectWithoutImpactReportInput[]
    upsert?: CollectionPointsUpsertWithWhereUniqueWithoutImpactReportInput | CollectionPointsUpsertWithWhereUniqueWithoutImpactReportInput[]
    createMany?: CollectionPointsCreateManyImpactReportInputEnvelope
    set?: CollectionPointsWhereUniqueInput | CollectionPointsWhereUniqueInput[]
    disconnect?: CollectionPointsWhereUniqueInput | CollectionPointsWhereUniqueInput[]
    delete?: CollectionPointsWhereUniqueInput | CollectionPointsWhereUniqueInput[]
    connect?: CollectionPointsWhereUniqueInput | CollectionPointsWhereUniqueInput[]
    update?: CollectionPointsUpdateWithWhereUniqueWithoutImpactReportInput | CollectionPointsUpdateWithWhereUniqueWithoutImpactReportInput[]
    updateMany?: CollectionPointsUpdateManyWithWhereWithoutImpactReportInput | CollectionPointsUpdateManyWithWhereWithoutImpactReportInput[]
    deleteMany?: CollectionPointsScalarWhereInput | CollectionPointsScalarWhereInput[]
  }

  export type CollectionPointsUncheckedUpdateManyWithoutImpactReportNestedInput = {
    create?: XOR<CollectionPointsCreateWithoutImpactReportInput, CollectionPointsUncheckedCreateWithoutImpactReportInput> | CollectionPointsCreateWithoutImpactReportInput[] | CollectionPointsUncheckedCreateWithoutImpactReportInput[]
    connectOrCreate?: CollectionPointsCreateOrConnectWithoutImpactReportInput | CollectionPointsCreateOrConnectWithoutImpactReportInput[]
    upsert?: CollectionPointsUpsertWithWhereUniqueWithoutImpactReportInput | CollectionPointsUpsertWithWhereUniqueWithoutImpactReportInput[]
    createMany?: CollectionPointsCreateManyImpactReportInputEnvelope
    set?: CollectionPointsWhereUniqueInput | CollectionPointsWhereUniqueInput[]
    disconnect?: CollectionPointsWhereUniqueInput | CollectionPointsWhereUniqueInput[]
    delete?: CollectionPointsWhereUniqueInput | CollectionPointsWhereUniqueInput[]
    connect?: CollectionPointsWhereUniqueInput | CollectionPointsWhereUniqueInput[]
    update?: CollectionPointsUpdateWithWhereUniqueWithoutImpactReportInput | CollectionPointsUpdateWithWhereUniqueWithoutImpactReportInput[]
    updateMany?: CollectionPointsUpdateManyWithWhereWithoutImpactReportInput | CollectionPointsUpdateManyWithWhereWithoutImpactReportInput[]
    deleteMany?: CollectionPointsScalarWhereInput | CollectionPointsScalarWhereInput[]
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

  export type CollectionPointsCreateWithoutBeneficiaryInput = {
    nome: string
    endereco: string
    telefone: string
    horario_de_funcionamento: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    impactReport: ReportsCampaignCreateNestedOneWithoutCollectionPointsInput
    campaigsAwareness: CampaigsAwarenessCreateNestedOneWithoutCollectionPointsInput
  }

  export type CollectionPointsUncheckedCreateWithoutBeneficiaryInput = {
    id?: number
    impactReportId: number
    campaigsAwarenessId: number
    nome: string
    endereco: string
    telefone: string
    horario_de_funcionamento: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CollectionPointsCreateOrConnectWithoutBeneficiaryInput = {
    where: CollectionPointsWhereUniqueInput
    create: XOR<CollectionPointsCreateWithoutBeneficiaryInput, CollectionPointsUncheckedCreateWithoutBeneficiaryInput>
  }

  export type CollectionPointsCreateManyBeneficiaryInputEnvelope = {
    data: CollectionPointsCreateManyBeneficiaryInput | CollectionPointsCreateManyBeneficiaryInput[]
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
    impactReportId?: IntFilter<"CollectionPoints"> | number
    campaigsAwarenessId?: IntFilter<"CollectionPoints"> | number
    nome?: StringFilter<"CollectionPoints"> | string
    endereco?: StringFilter<"CollectionPoints"> | string
    telefone?: StringFilter<"CollectionPoints"> | string
    horario_de_funcionamento?: DateTimeFilter<"CollectionPoints"> | Date | string
    createdAt?: DateTimeFilter<"CollectionPoints"> | Date | string
    updatedAt?: DateTimeFilter<"CollectionPoints"> | Date | string
  }

  export type BeneficiaryCreateWithoutCollectionPointsInput = {
    nome: string
    email: string
    telefone: string
    endereco: string
    cpf: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BeneficiaryUncheckedCreateWithoutCollectionPointsInput = {
    id?: number
    nome: string
    email: string
    telefone: string
    endereco: string
    cpf: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BeneficiaryCreateOrConnectWithoutCollectionPointsInput = {
    where: BeneficiaryWhereUniqueInput
    create: XOR<BeneficiaryCreateWithoutCollectionPointsInput, BeneficiaryUncheckedCreateWithoutCollectionPointsInput>
  }

  export type ReportsCampaignCreateWithoutCollectionPointsInput = {
    nome: string
    descricao: string
    localizacao: string
    quantidade_alimentos: number
    quantidade_beneficiarios: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReportsCampaignUncheckedCreateWithoutCollectionPointsInput = {
    id?: number
    nome: string
    descricao: string
    localizacao: string
    quantidade_alimentos: number
    quantidade_beneficiarios: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReportsCampaignCreateOrConnectWithoutCollectionPointsInput = {
    where: ReportsCampaignWhereUniqueInput
    create: XOR<ReportsCampaignCreateWithoutCollectionPointsInput, ReportsCampaignUncheckedCreateWithoutCollectionPointsInput>
  }

  export type CampaigsAwarenessCreateWithoutCollectionPointsInput = {
    nome: string
    descricao: string
    data_inicio: Date | string
    data_fim: Date | string
    localizacao: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CampaigsAwarenessUncheckedCreateWithoutCollectionPointsInput = {
    id?: number
    nome: string
    descricao: string
    data_inicio: Date | string
    data_fim: Date | string
    localizacao: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CampaigsAwarenessCreateOrConnectWithoutCollectionPointsInput = {
    where: CampaigsAwarenessWhereUniqueInput
    create: XOR<CampaigsAwarenessCreateWithoutCollectionPointsInput, CampaigsAwarenessUncheckedCreateWithoutCollectionPointsInput>
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
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BeneficiaryUncheckedUpdateWithoutCollectionPointsInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportsCampaignUpsertWithoutCollectionPointsInput = {
    update: XOR<ReportsCampaignUpdateWithoutCollectionPointsInput, ReportsCampaignUncheckedUpdateWithoutCollectionPointsInput>
    create: XOR<ReportsCampaignCreateWithoutCollectionPointsInput, ReportsCampaignUncheckedCreateWithoutCollectionPointsInput>
    where?: ReportsCampaignWhereInput
  }

  export type ReportsCampaignUpdateToOneWithWhereWithoutCollectionPointsInput = {
    where?: ReportsCampaignWhereInput
    data: XOR<ReportsCampaignUpdateWithoutCollectionPointsInput, ReportsCampaignUncheckedUpdateWithoutCollectionPointsInput>
  }

  export type ReportsCampaignUpdateWithoutCollectionPointsInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    localizacao?: StringFieldUpdateOperationsInput | string
    quantidade_alimentos?: IntFieldUpdateOperationsInput | number
    quantidade_beneficiarios?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportsCampaignUncheckedUpdateWithoutCollectionPointsInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    localizacao?: StringFieldUpdateOperationsInput | string
    quantidade_alimentos?: IntFieldUpdateOperationsInput | number
    quantidade_beneficiarios?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    data_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    data_fim?: DateTimeFieldUpdateOperationsInput | Date | string
    localizacao?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CampaigsAwarenessUncheckedUpdateWithoutCollectionPointsInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    data_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    data_fim?: DateTimeFieldUpdateOperationsInput | Date | string
    localizacao?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CollectionPointsCreateWithoutCampaigsAwarenessInput = {
    nome: string
    endereco: string
    telefone: string
    horario_de_funcionamento: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    beneficiary: BeneficiaryCreateNestedOneWithoutCollectionPointsInput
    impactReport: ReportsCampaignCreateNestedOneWithoutCollectionPointsInput
  }

  export type CollectionPointsUncheckedCreateWithoutCampaigsAwarenessInput = {
    id?: number
    beneficiaryId: number
    impactReportId: number
    nome: string
    endereco: string
    telefone: string
    horario_de_funcionamento: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CollectionPointsCreateOrConnectWithoutCampaigsAwarenessInput = {
    where: CollectionPointsWhereUniqueInput
    create: XOR<CollectionPointsCreateWithoutCampaigsAwarenessInput, CollectionPointsUncheckedCreateWithoutCampaigsAwarenessInput>
  }

  export type CollectionPointsCreateManyCampaigsAwarenessInputEnvelope = {
    data: CollectionPointsCreateManyCampaigsAwarenessInput | CollectionPointsCreateManyCampaigsAwarenessInput[]
    skipDuplicates?: boolean
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

  export type CollectionPointsCreateWithoutImpactReportInput = {
    nome: string
    endereco: string
    telefone: string
    horario_de_funcionamento: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    beneficiary: BeneficiaryCreateNestedOneWithoutCollectionPointsInput
    campaigsAwareness: CampaigsAwarenessCreateNestedOneWithoutCollectionPointsInput
  }

  export type CollectionPointsUncheckedCreateWithoutImpactReportInput = {
    id?: number
    beneficiaryId: number
    campaigsAwarenessId: number
    nome: string
    endereco: string
    telefone: string
    horario_de_funcionamento: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CollectionPointsCreateOrConnectWithoutImpactReportInput = {
    where: CollectionPointsWhereUniqueInput
    create: XOR<CollectionPointsCreateWithoutImpactReportInput, CollectionPointsUncheckedCreateWithoutImpactReportInput>
  }

  export type CollectionPointsCreateManyImpactReportInputEnvelope = {
    data: CollectionPointsCreateManyImpactReportInput | CollectionPointsCreateManyImpactReportInput[]
    skipDuplicates?: boolean
  }

  export type CollectionPointsUpsertWithWhereUniqueWithoutImpactReportInput = {
    where: CollectionPointsWhereUniqueInput
    update: XOR<CollectionPointsUpdateWithoutImpactReportInput, CollectionPointsUncheckedUpdateWithoutImpactReportInput>
    create: XOR<CollectionPointsCreateWithoutImpactReportInput, CollectionPointsUncheckedCreateWithoutImpactReportInput>
  }

  export type CollectionPointsUpdateWithWhereUniqueWithoutImpactReportInput = {
    where: CollectionPointsWhereUniqueInput
    data: XOR<CollectionPointsUpdateWithoutImpactReportInput, CollectionPointsUncheckedUpdateWithoutImpactReportInput>
  }

  export type CollectionPointsUpdateManyWithWhereWithoutImpactReportInput = {
    where: CollectionPointsScalarWhereInput
    data: XOR<CollectionPointsUpdateManyMutationInput, CollectionPointsUncheckedUpdateManyWithoutImpactReportInput>
  }

  export type CollectionPointsCreateManyBeneficiaryInput = {
    id?: number
    impactReportId: number
    campaigsAwarenessId: number
    nome: string
    endereco: string
    telefone: string
    horario_de_funcionamento: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CollectionPointsUpdateWithoutBeneficiaryInput = {
    nome?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    horario_de_funcionamento?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    impactReport?: ReportsCampaignUpdateOneRequiredWithoutCollectionPointsNestedInput
    campaigsAwareness?: CampaigsAwarenessUpdateOneRequiredWithoutCollectionPointsNestedInput
  }

  export type CollectionPointsUncheckedUpdateWithoutBeneficiaryInput = {
    id?: IntFieldUpdateOperationsInput | number
    impactReportId?: IntFieldUpdateOperationsInput | number
    campaigsAwarenessId?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    horario_de_funcionamento?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CollectionPointsUncheckedUpdateManyWithoutBeneficiaryInput = {
    id?: IntFieldUpdateOperationsInput | number
    impactReportId?: IntFieldUpdateOperationsInput | number
    campaigsAwarenessId?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    horario_de_funcionamento?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CollectionPointsCreateManyCampaigsAwarenessInput = {
    id?: number
    beneficiaryId: number
    impactReportId: number
    nome: string
    endereco: string
    telefone: string
    horario_de_funcionamento: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CollectionPointsUpdateWithoutCampaigsAwarenessInput = {
    nome?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    horario_de_funcionamento?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    beneficiary?: BeneficiaryUpdateOneRequiredWithoutCollectionPointsNestedInput
    impactReport?: ReportsCampaignUpdateOneRequiredWithoutCollectionPointsNestedInput
  }

  export type CollectionPointsUncheckedUpdateWithoutCampaigsAwarenessInput = {
    id?: IntFieldUpdateOperationsInput | number
    beneficiaryId?: IntFieldUpdateOperationsInput | number
    impactReportId?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    horario_de_funcionamento?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CollectionPointsUncheckedUpdateManyWithoutCampaigsAwarenessInput = {
    id?: IntFieldUpdateOperationsInput | number
    beneficiaryId?: IntFieldUpdateOperationsInput | number
    impactReportId?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    horario_de_funcionamento?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CollectionPointsCreateManyImpactReportInput = {
    id?: number
    beneficiaryId: number
    campaigsAwarenessId: number
    nome: string
    endereco: string
    telefone: string
    horario_de_funcionamento: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CollectionPointsUpdateWithoutImpactReportInput = {
    nome?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    horario_de_funcionamento?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    beneficiary?: BeneficiaryUpdateOneRequiredWithoutCollectionPointsNestedInput
    campaigsAwareness?: CampaigsAwarenessUpdateOneRequiredWithoutCollectionPointsNestedInput
  }

  export type CollectionPointsUncheckedUpdateWithoutImpactReportInput = {
    id?: IntFieldUpdateOperationsInput | number
    beneficiaryId?: IntFieldUpdateOperationsInput | number
    campaigsAwarenessId?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    horario_de_funcionamento?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CollectionPointsUncheckedUpdateManyWithoutImpactReportInput = {
    id?: IntFieldUpdateOperationsInput | number
    beneficiaryId?: IntFieldUpdateOperationsInput | number
    campaigsAwarenessId?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    horario_de_funcionamento?: DateTimeFieldUpdateOperationsInput | Date | string
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
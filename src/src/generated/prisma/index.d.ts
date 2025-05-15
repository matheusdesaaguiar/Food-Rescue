
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
 * Model Donars
 * 
 */
export type Donars = $Result.DefaultSelection<Prisma.$DonarsPayload>
/**
 * Model Beneficiary
 * 
 */
export type Beneficiary = $Result.DefaultSelection<Prisma.$BeneficiaryPayload>
/**
 * Model ColectionPoints
 * 
 */
export type ColectionPoints = $Result.DefaultSelection<Prisma.$ColectionPointsPayload>
/**
 * Model CampaingsAwareness
 * 
 */
export type CampaingsAwareness = $Result.DefaultSelection<Prisma.$CampaingsAwarenessPayload>
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
 * // Fetch zero or more Donars
 * const donars = await prisma.donars.findMany()
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
   * // Fetch zero or more Donars
   * const donars = await prisma.donars.findMany()
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
   * `prisma.donars`: Exposes CRUD operations for the **Donars** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Donars
    * const donars = await prisma.donars.findMany()
    * ```
    */
  get donars(): Prisma.DonarsDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.colectionPoints`: Exposes CRUD operations for the **ColectionPoints** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ColectionPoints
    * const colectionPoints = await prisma.colectionPoints.findMany()
    * ```
    */
  get colectionPoints(): Prisma.ColectionPointsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.campaingsAwareness`: Exposes CRUD operations for the **CampaingsAwareness** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CampaingsAwarenesses
    * const campaingsAwarenesses = await prisma.campaingsAwareness.findMany()
    * ```
    */
  get campaingsAwareness(): Prisma.CampaingsAwarenessDelegate<ExtArgs, ClientOptions>;

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
    Donars: 'Donars',
    Beneficiary: 'Beneficiary',
    ColectionPoints: 'ColectionPoints',
    CampaingsAwareness: 'CampaingsAwareness',
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
      modelProps: "donars" | "beneficiary" | "colectionPoints" | "campaingsAwareness" | "reportsCampaign"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Donars: {
        payload: Prisma.$DonarsPayload<ExtArgs>
        fields: Prisma.DonarsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DonarsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonarsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DonarsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonarsPayload>
          }
          findFirst: {
            args: Prisma.DonarsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonarsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DonarsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonarsPayload>
          }
          findMany: {
            args: Prisma.DonarsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonarsPayload>[]
          }
          create: {
            args: Prisma.DonarsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonarsPayload>
          }
          createMany: {
            args: Prisma.DonarsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DonarsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonarsPayload>[]
          }
          delete: {
            args: Prisma.DonarsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonarsPayload>
          }
          update: {
            args: Prisma.DonarsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonarsPayload>
          }
          deleteMany: {
            args: Prisma.DonarsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DonarsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DonarsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonarsPayload>[]
          }
          upsert: {
            args: Prisma.DonarsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonarsPayload>
          }
          aggregate: {
            args: Prisma.DonarsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDonars>
          }
          groupBy: {
            args: Prisma.DonarsGroupByArgs<ExtArgs>
            result: $Utils.Optional<DonarsGroupByOutputType>[]
          }
          count: {
            args: Prisma.DonarsCountArgs<ExtArgs>
            result: $Utils.Optional<DonarsCountAggregateOutputType> | number
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
      ColectionPoints: {
        payload: Prisma.$ColectionPointsPayload<ExtArgs>
        fields: Prisma.ColectionPointsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ColectionPointsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColectionPointsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ColectionPointsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColectionPointsPayload>
          }
          findFirst: {
            args: Prisma.ColectionPointsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColectionPointsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ColectionPointsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColectionPointsPayload>
          }
          findMany: {
            args: Prisma.ColectionPointsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColectionPointsPayload>[]
          }
          create: {
            args: Prisma.ColectionPointsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColectionPointsPayload>
          }
          createMany: {
            args: Prisma.ColectionPointsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ColectionPointsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColectionPointsPayload>[]
          }
          delete: {
            args: Prisma.ColectionPointsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColectionPointsPayload>
          }
          update: {
            args: Prisma.ColectionPointsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColectionPointsPayload>
          }
          deleteMany: {
            args: Prisma.ColectionPointsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ColectionPointsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ColectionPointsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColectionPointsPayload>[]
          }
          upsert: {
            args: Prisma.ColectionPointsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColectionPointsPayload>
          }
          aggregate: {
            args: Prisma.ColectionPointsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateColectionPoints>
          }
          groupBy: {
            args: Prisma.ColectionPointsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ColectionPointsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ColectionPointsCountArgs<ExtArgs>
            result: $Utils.Optional<ColectionPointsCountAggregateOutputType> | number
          }
        }
      }
      CampaingsAwareness: {
        payload: Prisma.$CampaingsAwarenessPayload<ExtArgs>
        fields: Prisma.CampaingsAwarenessFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CampaingsAwarenessFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaingsAwarenessPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CampaingsAwarenessFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaingsAwarenessPayload>
          }
          findFirst: {
            args: Prisma.CampaingsAwarenessFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaingsAwarenessPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CampaingsAwarenessFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaingsAwarenessPayload>
          }
          findMany: {
            args: Prisma.CampaingsAwarenessFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaingsAwarenessPayload>[]
          }
          create: {
            args: Prisma.CampaingsAwarenessCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaingsAwarenessPayload>
          }
          createMany: {
            args: Prisma.CampaingsAwarenessCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CampaingsAwarenessCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaingsAwarenessPayload>[]
          }
          delete: {
            args: Prisma.CampaingsAwarenessDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaingsAwarenessPayload>
          }
          update: {
            args: Prisma.CampaingsAwarenessUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaingsAwarenessPayload>
          }
          deleteMany: {
            args: Prisma.CampaingsAwarenessDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CampaingsAwarenessUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CampaingsAwarenessUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaingsAwarenessPayload>[]
          }
          upsert: {
            args: Prisma.CampaingsAwarenessUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaingsAwarenessPayload>
          }
          aggregate: {
            args: Prisma.CampaingsAwarenessAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCampaingsAwareness>
          }
          groupBy: {
            args: Prisma.CampaingsAwarenessGroupByArgs<ExtArgs>
            result: $Utils.Optional<CampaingsAwarenessGroupByOutputType>[]
          }
          count: {
            args: Prisma.CampaingsAwarenessCountArgs<ExtArgs>
            result: $Utils.Optional<CampaingsAwarenessCountAggregateOutputType> | number
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
    donars?: DonarsOmit
    beneficiary?: BeneficiaryOmit
    colectionPoints?: ColectionPointsOmit
    campaingsAwareness?: CampaingsAwarenessOmit
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
   * Models
   */

  /**
   * Model Donars
   */

  export type AggregateDonars = {
    _count: DonarsCountAggregateOutputType | null
    _avg: DonarsAvgAggregateOutputType | null
    _sum: DonarsSumAggregateOutputType | null
    _min: DonarsMinAggregateOutputType | null
    _max: DonarsMaxAggregateOutputType | null
  }

  export type DonarsAvgAggregateOutputType = {
    id: number | null
  }

  export type DonarsSumAggregateOutputType = {
    id: number | null
  }

  export type DonarsMinAggregateOutputType = {
    id: number | null
    nome: string | null
    email: string | null
    telefone: string | null
    endereco: string | null
    cnpj: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DonarsMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    email: string | null
    telefone: string | null
    endereco: string | null
    cnpj: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DonarsCountAggregateOutputType = {
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


  export type DonarsAvgAggregateInputType = {
    id?: true
  }

  export type DonarsSumAggregateInputType = {
    id?: true
  }

  export type DonarsMinAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    telefone?: true
    endereco?: true
    cnpj?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DonarsMaxAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    telefone?: true
    endereco?: true
    cnpj?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DonarsCountAggregateInputType = {
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

  export type DonarsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Donars to aggregate.
     */
    where?: DonarsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Donars to fetch.
     */
    orderBy?: DonarsOrderByWithRelationInput | DonarsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DonarsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Donars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Donars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Donars
    **/
    _count?: true | DonarsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DonarsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DonarsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DonarsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DonarsMaxAggregateInputType
  }

  export type GetDonarsAggregateType<T extends DonarsAggregateArgs> = {
        [P in keyof T & keyof AggregateDonars]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDonars[P]>
      : GetScalarType<T[P], AggregateDonars[P]>
  }




  export type DonarsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DonarsWhereInput
    orderBy?: DonarsOrderByWithAggregationInput | DonarsOrderByWithAggregationInput[]
    by: DonarsScalarFieldEnum[] | DonarsScalarFieldEnum
    having?: DonarsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DonarsCountAggregateInputType | true
    _avg?: DonarsAvgAggregateInputType
    _sum?: DonarsSumAggregateInputType
    _min?: DonarsMinAggregateInputType
    _max?: DonarsMaxAggregateInputType
  }

  export type DonarsGroupByOutputType = {
    id: number
    nome: string
    email: string
    telefone: string
    endereco: string
    cnpj: string
    createdAt: Date
    updatedAt: Date
    _count: DonarsCountAggregateOutputType | null
    _avg: DonarsAvgAggregateOutputType | null
    _sum: DonarsSumAggregateOutputType | null
    _min: DonarsMinAggregateOutputType | null
    _max: DonarsMaxAggregateOutputType | null
  }

  type GetDonarsGroupByPayload<T extends DonarsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DonarsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DonarsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DonarsGroupByOutputType[P]>
            : GetScalarType<T[P], DonarsGroupByOutputType[P]>
        }
      >
    >


  export type DonarsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    telefone?: boolean
    endereco?: boolean
    cnpj?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["donars"]>

  export type DonarsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    telefone?: boolean
    endereco?: boolean
    cnpj?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["donars"]>

  export type DonarsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    telefone?: boolean
    endereco?: boolean
    cnpj?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["donars"]>

  export type DonarsSelectScalar = {
    id?: boolean
    nome?: boolean
    email?: boolean
    telefone?: boolean
    endereco?: boolean
    cnpj?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DonarsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "email" | "telefone" | "endereco" | "cnpj" | "createdAt" | "updatedAt", ExtArgs["result"]["donars"]>

  export type $DonarsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Donars"
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
    }, ExtArgs["result"]["donars"]>
    composites: {}
  }

  type DonarsGetPayload<S extends boolean | null | undefined | DonarsDefaultArgs> = $Result.GetResult<Prisma.$DonarsPayload, S>

  type DonarsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DonarsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DonarsCountAggregateInputType | true
    }

  export interface DonarsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Donars'], meta: { name: 'Donars' } }
    /**
     * Find zero or one Donars that matches the filter.
     * @param {DonarsFindUniqueArgs} args - Arguments to find a Donars
     * @example
     * // Get one Donars
     * const donars = await prisma.donars.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DonarsFindUniqueArgs>(args: SelectSubset<T, DonarsFindUniqueArgs<ExtArgs>>): Prisma__DonarsClient<$Result.GetResult<Prisma.$DonarsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Donars that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DonarsFindUniqueOrThrowArgs} args - Arguments to find a Donars
     * @example
     * // Get one Donars
     * const donars = await prisma.donars.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DonarsFindUniqueOrThrowArgs>(args: SelectSubset<T, DonarsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DonarsClient<$Result.GetResult<Prisma.$DonarsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Donars that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonarsFindFirstArgs} args - Arguments to find a Donars
     * @example
     * // Get one Donars
     * const donars = await prisma.donars.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DonarsFindFirstArgs>(args?: SelectSubset<T, DonarsFindFirstArgs<ExtArgs>>): Prisma__DonarsClient<$Result.GetResult<Prisma.$DonarsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Donars that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonarsFindFirstOrThrowArgs} args - Arguments to find a Donars
     * @example
     * // Get one Donars
     * const donars = await prisma.donars.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DonarsFindFirstOrThrowArgs>(args?: SelectSubset<T, DonarsFindFirstOrThrowArgs<ExtArgs>>): Prisma__DonarsClient<$Result.GetResult<Prisma.$DonarsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Donars that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonarsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Donars
     * const donars = await prisma.donars.findMany()
     * 
     * // Get first 10 Donars
     * const donars = await prisma.donars.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const donarsWithIdOnly = await prisma.donars.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DonarsFindManyArgs>(args?: SelectSubset<T, DonarsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DonarsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Donars.
     * @param {DonarsCreateArgs} args - Arguments to create a Donars.
     * @example
     * // Create one Donars
     * const Donars = await prisma.donars.create({
     *   data: {
     *     // ... data to create a Donars
     *   }
     * })
     * 
     */
    create<T extends DonarsCreateArgs>(args: SelectSubset<T, DonarsCreateArgs<ExtArgs>>): Prisma__DonarsClient<$Result.GetResult<Prisma.$DonarsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Donars.
     * @param {DonarsCreateManyArgs} args - Arguments to create many Donars.
     * @example
     * // Create many Donars
     * const donars = await prisma.donars.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DonarsCreateManyArgs>(args?: SelectSubset<T, DonarsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Donars and returns the data saved in the database.
     * @param {DonarsCreateManyAndReturnArgs} args - Arguments to create many Donars.
     * @example
     * // Create many Donars
     * const donars = await prisma.donars.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Donars and only return the `id`
     * const donarsWithIdOnly = await prisma.donars.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DonarsCreateManyAndReturnArgs>(args?: SelectSubset<T, DonarsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DonarsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Donars.
     * @param {DonarsDeleteArgs} args - Arguments to delete one Donars.
     * @example
     * // Delete one Donars
     * const Donars = await prisma.donars.delete({
     *   where: {
     *     // ... filter to delete one Donars
     *   }
     * })
     * 
     */
    delete<T extends DonarsDeleteArgs>(args: SelectSubset<T, DonarsDeleteArgs<ExtArgs>>): Prisma__DonarsClient<$Result.GetResult<Prisma.$DonarsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Donars.
     * @param {DonarsUpdateArgs} args - Arguments to update one Donars.
     * @example
     * // Update one Donars
     * const donars = await prisma.donars.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DonarsUpdateArgs>(args: SelectSubset<T, DonarsUpdateArgs<ExtArgs>>): Prisma__DonarsClient<$Result.GetResult<Prisma.$DonarsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Donars.
     * @param {DonarsDeleteManyArgs} args - Arguments to filter Donars to delete.
     * @example
     * // Delete a few Donars
     * const { count } = await prisma.donars.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DonarsDeleteManyArgs>(args?: SelectSubset<T, DonarsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Donars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonarsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Donars
     * const donars = await prisma.donars.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DonarsUpdateManyArgs>(args: SelectSubset<T, DonarsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Donars and returns the data updated in the database.
     * @param {DonarsUpdateManyAndReturnArgs} args - Arguments to update many Donars.
     * @example
     * // Update many Donars
     * const donars = await prisma.donars.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Donars and only return the `id`
     * const donarsWithIdOnly = await prisma.donars.updateManyAndReturn({
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
    updateManyAndReturn<T extends DonarsUpdateManyAndReturnArgs>(args: SelectSubset<T, DonarsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DonarsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Donars.
     * @param {DonarsUpsertArgs} args - Arguments to update or create a Donars.
     * @example
     * // Update or create a Donars
     * const donars = await prisma.donars.upsert({
     *   create: {
     *     // ... data to create a Donars
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Donars we want to update
     *   }
     * })
     */
    upsert<T extends DonarsUpsertArgs>(args: SelectSubset<T, DonarsUpsertArgs<ExtArgs>>): Prisma__DonarsClient<$Result.GetResult<Prisma.$DonarsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Donars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonarsCountArgs} args - Arguments to filter Donars to count.
     * @example
     * // Count the number of Donars
     * const count = await prisma.donars.count({
     *   where: {
     *     // ... the filter for the Donars we want to count
     *   }
     * })
    **/
    count<T extends DonarsCountArgs>(
      args?: Subset<T, DonarsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DonarsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Donars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonarsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DonarsAggregateArgs>(args: Subset<T, DonarsAggregateArgs>): Prisma.PrismaPromise<GetDonarsAggregateType<T>>

    /**
     * Group by Donars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonarsGroupByArgs} args - Group by arguments.
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
      T extends DonarsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DonarsGroupByArgs['orderBy'] }
        : { orderBy?: DonarsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DonarsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDonarsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Donars model
   */
  readonly fields: DonarsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Donars.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DonarsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Donars model
   */
  interface DonarsFieldRefs {
    readonly id: FieldRef<"Donars", 'Int'>
    readonly nome: FieldRef<"Donars", 'String'>
    readonly email: FieldRef<"Donars", 'String'>
    readonly telefone: FieldRef<"Donars", 'String'>
    readonly endereco: FieldRef<"Donars", 'String'>
    readonly cnpj: FieldRef<"Donars", 'String'>
    readonly createdAt: FieldRef<"Donars", 'DateTime'>
    readonly updatedAt: FieldRef<"Donars", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Donars findUnique
   */
  export type DonarsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donars
     */
    select?: DonarsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donars
     */
    omit?: DonarsOmit<ExtArgs> | null
    /**
     * Filter, which Donars to fetch.
     */
    where: DonarsWhereUniqueInput
  }

  /**
   * Donars findUniqueOrThrow
   */
  export type DonarsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donars
     */
    select?: DonarsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donars
     */
    omit?: DonarsOmit<ExtArgs> | null
    /**
     * Filter, which Donars to fetch.
     */
    where: DonarsWhereUniqueInput
  }

  /**
   * Donars findFirst
   */
  export type DonarsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donars
     */
    select?: DonarsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donars
     */
    omit?: DonarsOmit<ExtArgs> | null
    /**
     * Filter, which Donars to fetch.
     */
    where?: DonarsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Donars to fetch.
     */
    orderBy?: DonarsOrderByWithRelationInput | DonarsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Donars.
     */
    cursor?: DonarsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Donars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Donars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Donars.
     */
    distinct?: DonarsScalarFieldEnum | DonarsScalarFieldEnum[]
  }

  /**
   * Donars findFirstOrThrow
   */
  export type DonarsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donars
     */
    select?: DonarsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donars
     */
    omit?: DonarsOmit<ExtArgs> | null
    /**
     * Filter, which Donars to fetch.
     */
    where?: DonarsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Donars to fetch.
     */
    orderBy?: DonarsOrderByWithRelationInput | DonarsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Donars.
     */
    cursor?: DonarsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Donars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Donars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Donars.
     */
    distinct?: DonarsScalarFieldEnum | DonarsScalarFieldEnum[]
  }

  /**
   * Donars findMany
   */
  export type DonarsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donars
     */
    select?: DonarsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donars
     */
    omit?: DonarsOmit<ExtArgs> | null
    /**
     * Filter, which Donars to fetch.
     */
    where?: DonarsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Donars to fetch.
     */
    orderBy?: DonarsOrderByWithRelationInput | DonarsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Donars.
     */
    cursor?: DonarsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Donars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Donars.
     */
    skip?: number
    distinct?: DonarsScalarFieldEnum | DonarsScalarFieldEnum[]
  }

  /**
   * Donars create
   */
  export type DonarsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donars
     */
    select?: DonarsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donars
     */
    omit?: DonarsOmit<ExtArgs> | null
    /**
     * The data needed to create a Donars.
     */
    data: XOR<DonarsCreateInput, DonarsUncheckedCreateInput>
  }

  /**
   * Donars createMany
   */
  export type DonarsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Donars.
     */
    data: DonarsCreateManyInput | DonarsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Donars createManyAndReturn
   */
  export type DonarsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donars
     */
    select?: DonarsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Donars
     */
    omit?: DonarsOmit<ExtArgs> | null
    /**
     * The data used to create many Donars.
     */
    data: DonarsCreateManyInput | DonarsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Donars update
   */
  export type DonarsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donars
     */
    select?: DonarsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donars
     */
    omit?: DonarsOmit<ExtArgs> | null
    /**
     * The data needed to update a Donars.
     */
    data: XOR<DonarsUpdateInput, DonarsUncheckedUpdateInput>
    /**
     * Choose, which Donars to update.
     */
    where: DonarsWhereUniqueInput
  }

  /**
   * Donars updateMany
   */
  export type DonarsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Donars.
     */
    data: XOR<DonarsUpdateManyMutationInput, DonarsUncheckedUpdateManyInput>
    /**
     * Filter which Donars to update
     */
    where?: DonarsWhereInput
    /**
     * Limit how many Donars to update.
     */
    limit?: number
  }

  /**
   * Donars updateManyAndReturn
   */
  export type DonarsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donars
     */
    select?: DonarsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Donars
     */
    omit?: DonarsOmit<ExtArgs> | null
    /**
     * The data used to update Donars.
     */
    data: XOR<DonarsUpdateManyMutationInput, DonarsUncheckedUpdateManyInput>
    /**
     * Filter which Donars to update
     */
    where?: DonarsWhereInput
    /**
     * Limit how many Donars to update.
     */
    limit?: number
  }

  /**
   * Donars upsert
   */
  export type DonarsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donars
     */
    select?: DonarsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donars
     */
    omit?: DonarsOmit<ExtArgs> | null
    /**
     * The filter to search for the Donars to update in case it exists.
     */
    where: DonarsWhereUniqueInput
    /**
     * In case the Donars found by the `where` argument doesn't exist, create a new Donars with this data.
     */
    create: XOR<DonarsCreateInput, DonarsUncheckedCreateInput>
    /**
     * In case the Donars was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DonarsUpdateInput, DonarsUncheckedUpdateInput>
  }

  /**
   * Donars delete
   */
  export type DonarsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donars
     */
    select?: DonarsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donars
     */
    omit?: DonarsOmit<ExtArgs> | null
    /**
     * Filter which Donars to delete.
     */
    where: DonarsWhereUniqueInput
  }

  /**
   * Donars deleteMany
   */
  export type DonarsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Donars to delete
     */
    where?: DonarsWhereInput
    /**
     * Limit how many Donars to delete.
     */
    limit?: number
  }

  /**
   * Donars without action
   */
  export type DonarsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donars
     */
    select?: DonarsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donars
     */
    omit?: DonarsOmit<ExtArgs> | null
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

  export type $BeneficiaryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Beneficiary"
    objects: {}
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
  }


  /**
   * Model ColectionPoints
   */

  export type AggregateColectionPoints = {
    _count: ColectionPointsCountAggregateOutputType | null
    _avg: ColectionPointsAvgAggregateOutputType | null
    _sum: ColectionPointsSumAggregateOutputType | null
    _min: ColectionPointsMinAggregateOutputType | null
    _max: ColectionPointsMaxAggregateOutputType | null
  }

  export type ColectionPointsAvgAggregateOutputType = {
    id: number | null
  }

  export type ColectionPointsSumAggregateOutputType = {
    id: number | null
  }

  export type ColectionPointsMinAggregateOutputType = {
    id: number | null
    nome: string | null
    endereco: string | null
    telefone: string | null
    horario_de_funcionamento: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ColectionPointsMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    endereco: string | null
    telefone: string | null
    horario_de_funcionamento: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ColectionPointsCountAggregateOutputType = {
    id: number
    nome: number
    endereco: number
    telefone: number
    horario_de_funcionamento: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ColectionPointsAvgAggregateInputType = {
    id?: true
  }

  export type ColectionPointsSumAggregateInputType = {
    id?: true
  }

  export type ColectionPointsMinAggregateInputType = {
    id?: true
    nome?: true
    endereco?: true
    telefone?: true
    horario_de_funcionamento?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ColectionPointsMaxAggregateInputType = {
    id?: true
    nome?: true
    endereco?: true
    telefone?: true
    horario_de_funcionamento?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ColectionPointsCountAggregateInputType = {
    id?: true
    nome?: true
    endereco?: true
    telefone?: true
    horario_de_funcionamento?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ColectionPointsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ColectionPoints to aggregate.
     */
    where?: ColectionPointsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ColectionPoints to fetch.
     */
    orderBy?: ColectionPointsOrderByWithRelationInput | ColectionPointsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ColectionPointsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ColectionPoints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ColectionPoints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ColectionPoints
    **/
    _count?: true | ColectionPointsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ColectionPointsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ColectionPointsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ColectionPointsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ColectionPointsMaxAggregateInputType
  }

  export type GetColectionPointsAggregateType<T extends ColectionPointsAggregateArgs> = {
        [P in keyof T & keyof AggregateColectionPoints]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateColectionPoints[P]>
      : GetScalarType<T[P], AggregateColectionPoints[P]>
  }




  export type ColectionPointsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ColectionPointsWhereInput
    orderBy?: ColectionPointsOrderByWithAggregationInput | ColectionPointsOrderByWithAggregationInput[]
    by: ColectionPointsScalarFieldEnum[] | ColectionPointsScalarFieldEnum
    having?: ColectionPointsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ColectionPointsCountAggregateInputType | true
    _avg?: ColectionPointsAvgAggregateInputType
    _sum?: ColectionPointsSumAggregateInputType
    _min?: ColectionPointsMinAggregateInputType
    _max?: ColectionPointsMaxAggregateInputType
  }

  export type ColectionPointsGroupByOutputType = {
    id: number
    nome: string
    endereco: string
    telefone: string
    horario_de_funcionamento: Date
    createdAt: Date
    updatedAt: Date
    _count: ColectionPointsCountAggregateOutputType | null
    _avg: ColectionPointsAvgAggregateOutputType | null
    _sum: ColectionPointsSumAggregateOutputType | null
    _min: ColectionPointsMinAggregateOutputType | null
    _max: ColectionPointsMaxAggregateOutputType | null
  }

  type GetColectionPointsGroupByPayload<T extends ColectionPointsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ColectionPointsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ColectionPointsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ColectionPointsGroupByOutputType[P]>
            : GetScalarType<T[P], ColectionPointsGroupByOutputType[P]>
        }
      >
    >


  export type ColectionPointsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    endereco?: boolean
    telefone?: boolean
    horario_de_funcionamento?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["colectionPoints"]>

  export type ColectionPointsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    endereco?: boolean
    telefone?: boolean
    horario_de_funcionamento?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["colectionPoints"]>

  export type ColectionPointsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    endereco?: boolean
    telefone?: boolean
    horario_de_funcionamento?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["colectionPoints"]>

  export type ColectionPointsSelectScalar = {
    id?: boolean
    nome?: boolean
    endereco?: boolean
    telefone?: boolean
    horario_de_funcionamento?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ColectionPointsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "endereco" | "telefone" | "horario_de_funcionamento" | "createdAt" | "updatedAt", ExtArgs["result"]["colectionPoints"]>

  export type $ColectionPointsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ColectionPoints"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      endereco: string
      telefone: string
      horario_de_funcionamento: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["colectionPoints"]>
    composites: {}
  }

  type ColectionPointsGetPayload<S extends boolean | null | undefined | ColectionPointsDefaultArgs> = $Result.GetResult<Prisma.$ColectionPointsPayload, S>

  type ColectionPointsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ColectionPointsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ColectionPointsCountAggregateInputType | true
    }

  export interface ColectionPointsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ColectionPoints'], meta: { name: 'ColectionPoints' } }
    /**
     * Find zero or one ColectionPoints that matches the filter.
     * @param {ColectionPointsFindUniqueArgs} args - Arguments to find a ColectionPoints
     * @example
     * // Get one ColectionPoints
     * const colectionPoints = await prisma.colectionPoints.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ColectionPointsFindUniqueArgs>(args: SelectSubset<T, ColectionPointsFindUniqueArgs<ExtArgs>>): Prisma__ColectionPointsClient<$Result.GetResult<Prisma.$ColectionPointsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ColectionPoints that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ColectionPointsFindUniqueOrThrowArgs} args - Arguments to find a ColectionPoints
     * @example
     * // Get one ColectionPoints
     * const colectionPoints = await prisma.colectionPoints.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ColectionPointsFindUniqueOrThrowArgs>(args: SelectSubset<T, ColectionPointsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ColectionPointsClient<$Result.GetResult<Prisma.$ColectionPointsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ColectionPoints that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColectionPointsFindFirstArgs} args - Arguments to find a ColectionPoints
     * @example
     * // Get one ColectionPoints
     * const colectionPoints = await prisma.colectionPoints.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ColectionPointsFindFirstArgs>(args?: SelectSubset<T, ColectionPointsFindFirstArgs<ExtArgs>>): Prisma__ColectionPointsClient<$Result.GetResult<Prisma.$ColectionPointsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ColectionPoints that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColectionPointsFindFirstOrThrowArgs} args - Arguments to find a ColectionPoints
     * @example
     * // Get one ColectionPoints
     * const colectionPoints = await prisma.colectionPoints.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ColectionPointsFindFirstOrThrowArgs>(args?: SelectSubset<T, ColectionPointsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ColectionPointsClient<$Result.GetResult<Prisma.$ColectionPointsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ColectionPoints that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColectionPointsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ColectionPoints
     * const colectionPoints = await prisma.colectionPoints.findMany()
     * 
     * // Get first 10 ColectionPoints
     * const colectionPoints = await prisma.colectionPoints.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const colectionPointsWithIdOnly = await prisma.colectionPoints.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ColectionPointsFindManyArgs>(args?: SelectSubset<T, ColectionPointsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ColectionPointsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ColectionPoints.
     * @param {ColectionPointsCreateArgs} args - Arguments to create a ColectionPoints.
     * @example
     * // Create one ColectionPoints
     * const ColectionPoints = await prisma.colectionPoints.create({
     *   data: {
     *     // ... data to create a ColectionPoints
     *   }
     * })
     * 
     */
    create<T extends ColectionPointsCreateArgs>(args: SelectSubset<T, ColectionPointsCreateArgs<ExtArgs>>): Prisma__ColectionPointsClient<$Result.GetResult<Prisma.$ColectionPointsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ColectionPoints.
     * @param {ColectionPointsCreateManyArgs} args - Arguments to create many ColectionPoints.
     * @example
     * // Create many ColectionPoints
     * const colectionPoints = await prisma.colectionPoints.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ColectionPointsCreateManyArgs>(args?: SelectSubset<T, ColectionPointsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ColectionPoints and returns the data saved in the database.
     * @param {ColectionPointsCreateManyAndReturnArgs} args - Arguments to create many ColectionPoints.
     * @example
     * // Create many ColectionPoints
     * const colectionPoints = await prisma.colectionPoints.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ColectionPoints and only return the `id`
     * const colectionPointsWithIdOnly = await prisma.colectionPoints.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ColectionPointsCreateManyAndReturnArgs>(args?: SelectSubset<T, ColectionPointsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ColectionPointsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ColectionPoints.
     * @param {ColectionPointsDeleteArgs} args - Arguments to delete one ColectionPoints.
     * @example
     * // Delete one ColectionPoints
     * const ColectionPoints = await prisma.colectionPoints.delete({
     *   where: {
     *     // ... filter to delete one ColectionPoints
     *   }
     * })
     * 
     */
    delete<T extends ColectionPointsDeleteArgs>(args: SelectSubset<T, ColectionPointsDeleteArgs<ExtArgs>>): Prisma__ColectionPointsClient<$Result.GetResult<Prisma.$ColectionPointsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ColectionPoints.
     * @param {ColectionPointsUpdateArgs} args - Arguments to update one ColectionPoints.
     * @example
     * // Update one ColectionPoints
     * const colectionPoints = await prisma.colectionPoints.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ColectionPointsUpdateArgs>(args: SelectSubset<T, ColectionPointsUpdateArgs<ExtArgs>>): Prisma__ColectionPointsClient<$Result.GetResult<Prisma.$ColectionPointsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ColectionPoints.
     * @param {ColectionPointsDeleteManyArgs} args - Arguments to filter ColectionPoints to delete.
     * @example
     * // Delete a few ColectionPoints
     * const { count } = await prisma.colectionPoints.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ColectionPointsDeleteManyArgs>(args?: SelectSubset<T, ColectionPointsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ColectionPoints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColectionPointsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ColectionPoints
     * const colectionPoints = await prisma.colectionPoints.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ColectionPointsUpdateManyArgs>(args: SelectSubset<T, ColectionPointsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ColectionPoints and returns the data updated in the database.
     * @param {ColectionPointsUpdateManyAndReturnArgs} args - Arguments to update many ColectionPoints.
     * @example
     * // Update many ColectionPoints
     * const colectionPoints = await prisma.colectionPoints.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ColectionPoints and only return the `id`
     * const colectionPointsWithIdOnly = await prisma.colectionPoints.updateManyAndReturn({
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
    updateManyAndReturn<T extends ColectionPointsUpdateManyAndReturnArgs>(args: SelectSubset<T, ColectionPointsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ColectionPointsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ColectionPoints.
     * @param {ColectionPointsUpsertArgs} args - Arguments to update or create a ColectionPoints.
     * @example
     * // Update or create a ColectionPoints
     * const colectionPoints = await prisma.colectionPoints.upsert({
     *   create: {
     *     // ... data to create a ColectionPoints
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ColectionPoints we want to update
     *   }
     * })
     */
    upsert<T extends ColectionPointsUpsertArgs>(args: SelectSubset<T, ColectionPointsUpsertArgs<ExtArgs>>): Prisma__ColectionPointsClient<$Result.GetResult<Prisma.$ColectionPointsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ColectionPoints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColectionPointsCountArgs} args - Arguments to filter ColectionPoints to count.
     * @example
     * // Count the number of ColectionPoints
     * const count = await prisma.colectionPoints.count({
     *   where: {
     *     // ... the filter for the ColectionPoints we want to count
     *   }
     * })
    **/
    count<T extends ColectionPointsCountArgs>(
      args?: Subset<T, ColectionPointsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ColectionPointsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ColectionPoints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColectionPointsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ColectionPointsAggregateArgs>(args: Subset<T, ColectionPointsAggregateArgs>): Prisma.PrismaPromise<GetColectionPointsAggregateType<T>>

    /**
     * Group by ColectionPoints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColectionPointsGroupByArgs} args - Group by arguments.
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
      T extends ColectionPointsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ColectionPointsGroupByArgs['orderBy'] }
        : { orderBy?: ColectionPointsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ColectionPointsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetColectionPointsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ColectionPoints model
   */
  readonly fields: ColectionPointsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ColectionPoints.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ColectionPointsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the ColectionPoints model
   */
  interface ColectionPointsFieldRefs {
    readonly id: FieldRef<"ColectionPoints", 'Int'>
    readonly nome: FieldRef<"ColectionPoints", 'String'>
    readonly endereco: FieldRef<"ColectionPoints", 'String'>
    readonly telefone: FieldRef<"ColectionPoints", 'String'>
    readonly horario_de_funcionamento: FieldRef<"ColectionPoints", 'DateTime'>
    readonly createdAt: FieldRef<"ColectionPoints", 'DateTime'>
    readonly updatedAt: FieldRef<"ColectionPoints", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ColectionPoints findUnique
   */
  export type ColectionPointsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ColectionPoints
     */
    select?: ColectionPointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ColectionPoints
     */
    omit?: ColectionPointsOmit<ExtArgs> | null
    /**
     * Filter, which ColectionPoints to fetch.
     */
    where: ColectionPointsWhereUniqueInput
  }

  /**
   * ColectionPoints findUniqueOrThrow
   */
  export type ColectionPointsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ColectionPoints
     */
    select?: ColectionPointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ColectionPoints
     */
    omit?: ColectionPointsOmit<ExtArgs> | null
    /**
     * Filter, which ColectionPoints to fetch.
     */
    where: ColectionPointsWhereUniqueInput
  }

  /**
   * ColectionPoints findFirst
   */
  export type ColectionPointsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ColectionPoints
     */
    select?: ColectionPointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ColectionPoints
     */
    omit?: ColectionPointsOmit<ExtArgs> | null
    /**
     * Filter, which ColectionPoints to fetch.
     */
    where?: ColectionPointsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ColectionPoints to fetch.
     */
    orderBy?: ColectionPointsOrderByWithRelationInput | ColectionPointsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ColectionPoints.
     */
    cursor?: ColectionPointsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ColectionPoints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ColectionPoints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ColectionPoints.
     */
    distinct?: ColectionPointsScalarFieldEnum | ColectionPointsScalarFieldEnum[]
  }

  /**
   * ColectionPoints findFirstOrThrow
   */
  export type ColectionPointsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ColectionPoints
     */
    select?: ColectionPointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ColectionPoints
     */
    omit?: ColectionPointsOmit<ExtArgs> | null
    /**
     * Filter, which ColectionPoints to fetch.
     */
    where?: ColectionPointsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ColectionPoints to fetch.
     */
    orderBy?: ColectionPointsOrderByWithRelationInput | ColectionPointsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ColectionPoints.
     */
    cursor?: ColectionPointsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ColectionPoints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ColectionPoints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ColectionPoints.
     */
    distinct?: ColectionPointsScalarFieldEnum | ColectionPointsScalarFieldEnum[]
  }

  /**
   * ColectionPoints findMany
   */
  export type ColectionPointsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ColectionPoints
     */
    select?: ColectionPointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ColectionPoints
     */
    omit?: ColectionPointsOmit<ExtArgs> | null
    /**
     * Filter, which ColectionPoints to fetch.
     */
    where?: ColectionPointsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ColectionPoints to fetch.
     */
    orderBy?: ColectionPointsOrderByWithRelationInput | ColectionPointsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ColectionPoints.
     */
    cursor?: ColectionPointsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ColectionPoints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ColectionPoints.
     */
    skip?: number
    distinct?: ColectionPointsScalarFieldEnum | ColectionPointsScalarFieldEnum[]
  }

  /**
   * ColectionPoints create
   */
  export type ColectionPointsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ColectionPoints
     */
    select?: ColectionPointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ColectionPoints
     */
    omit?: ColectionPointsOmit<ExtArgs> | null
    /**
     * The data needed to create a ColectionPoints.
     */
    data: XOR<ColectionPointsCreateInput, ColectionPointsUncheckedCreateInput>
  }

  /**
   * ColectionPoints createMany
   */
  export type ColectionPointsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ColectionPoints.
     */
    data: ColectionPointsCreateManyInput | ColectionPointsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ColectionPoints createManyAndReturn
   */
  export type ColectionPointsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ColectionPoints
     */
    select?: ColectionPointsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ColectionPoints
     */
    omit?: ColectionPointsOmit<ExtArgs> | null
    /**
     * The data used to create many ColectionPoints.
     */
    data: ColectionPointsCreateManyInput | ColectionPointsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ColectionPoints update
   */
  export type ColectionPointsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ColectionPoints
     */
    select?: ColectionPointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ColectionPoints
     */
    omit?: ColectionPointsOmit<ExtArgs> | null
    /**
     * The data needed to update a ColectionPoints.
     */
    data: XOR<ColectionPointsUpdateInput, ColectionPointsUncheckedUpdateInput>
    /**
     * Choose, which ColectionPoints to update.
     */
    where: ColectionPointsWhereUniqueInput
  }

  /**
   * ColectionPoints updateMany
   */
  export type ColectionPointsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ColectionPoints.
     */
    data: XOR<ColectionPointsUpdateManyMutationInput, ColectionPointsUncheckedUpdateManyInput>
    /**
     * Filter which ColectionPoints to update
     */
    where?: ColectionPointsWhereInput
    /**
     * Limit how many ColectionPoints to update.
     */
    limit?: number
  }

  /**
   * ColectionPoints updateManyAndReturn
   */
  export type ColectionPointsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ColectionPoints
     */
    select?: ColectionPointsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ColectionPoints
     */
    omit?: ColectionPointsOmit<ExtArgs> | null
    /**
     * The data used to update ColectionPoints.
     */
    data: XOR<ColectionPointsUpdateManyMutationInput, ColectionPointsUncheckedUpdateManyInput>
    /**
     * Filter which ColectionPoints to update
     */
    where?: ColectionPointsWhereInput
    /**
     * Limit how many ColectionPoints to update.
     */
    limit?: number
  }

  /**
   * ColectionPoints upsert
   */
  export type ColectionPointsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ColectionPoints
     */
    select?: ColectionPointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ColectionPoints
     */
    omit?: ColectionPointsOmit<ExtArgs> | null
    /**
     * The filter to search for the ColectionPoints to update in case it exists.
     */
    where: ColectionPointsWhereUniqueInput
    /**
     * In case the ColectionPoints found by the `where` argument doesn't exist, create a new ColectionPoints with this data.
     */
    create: XOR<ColectionPointsCreateInput, ColectionPointsUncheckedCreateInput>
    /**
     * In case the ColectionPoints was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ColectionPointsUpdateInput, ColectionPointsUncheckedUpdateInput>
  }

  /**
   * ColectionPoints delete
   */
  export type ColectionPointsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ColectionPoints
     */
    select?: ColectionPointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ColectionPoints
     */
    omit?: ColectionPointsOmit<ExtArgs> | null
    /**
     * Filter which ColectionPoints to delete.
     */
    where: ColectionPointsWhereUniqueInput
  }

  /**
   * ColectionPoints deleteMany
   */
  export type ColectionPointsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ColectionPoints to delete
     */
    where?: ColectionPointsWhereInput
    /**
     * Limit how many ColectionPoints to delete.
     */
    limit?: number
  }

  /**
   * ColectionPoints without action
   */
  export type ColectionPointsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ColectionPoints
     */
    select?: ColectionPointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ColectionPoints
     */
    omit?: ColectionPointsOmit<ExtArgs> | null
  }


  /**
   * Model CampaingsAwareness
   */

  export type AggregateCampaingsAwareness = {
    _count: CampaingsAwarenessCountAggregateOutputType | null
    _avg: CampaingsAwarenessAvgAggregateOutputType | null
    _sum: CampaingsAwarenessSumAggregateOutputType | null
    _min: CampaingsAwarenessMinAggregateOutputType | null
    _max: CampaingsAwarenessMaxAggregateOutputType | null
  }

  export type CampaingsAwarenessAvgAggregateOutputType = {
    id: number | null
  }

  export type CampaingsAwarenessSumAggregateOutputType = {
    id: number | null
  }

  export type CampaingsAwarenessMinAggregateOutputType = {
    id: number | null
    nome: string | null
    descricao: string | null
    data_inicio: Date | null
    data_fim: Date | null
    localizacao: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CampaingsAwarenessMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    descricao: string | null
    data_inicio: Date | null
    data_fim: Date | null
    localizacao: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CampaingsAwarenessCountAggregateOutputType = {
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


  export type CampaingsAwarenessAvgAggregateInputType = {
    id?: true
  }

  export type CampaingsAwarenessSumAggregateInputType = {
    id?: true
  }

  export type CampaingsAwarenessMinAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    data_inicio?: true
    data_fim?: true
    localizacao?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CampaingsAwarenessMaxAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    data_inicio?: true
    data_fim?: true
    localizacao?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CampaingsAwarenessCountAggregateInputType = {
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

  export type CampaingsAwarenessAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CampaingsAwareness to aggregate.
     */
    where?: CampaingsAwarenessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CampaingsAwarenesses to fetch.
     */
    orderBy?: CampaingsAwarenessOrderByWithRelationInput | CampaingsAwarenessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CampaingsAwarenessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CampaingsAwarenesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CampaingsAwarenesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CampaingsAwarenesses
    **/
    _count?: true | CampaingsAwarenessCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CampaingsAwarenessAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CampaingsAwarenessSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CampaingsAwarenessMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CampaingsAwarenessMaxAggregateInputType
  }

  export type GetCampaingsAwarenessAggregateType<T extends CampaingsAwarenessAggregateArgs> = {
        [P in keyof T & keyof AggregateCampaingsAwareness]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCampaingsAwareness[P]>
      : GetScalarType<T[P], AggregateCampaingsAwareness[P]>
  }




  export type CampaingsAwarenessGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CampaingsAwarenessWhereInput
    orderBy?: CampaingsAwarenessOrderByWithAggregationInput | CampaingsAwarenessOrderByWithAggregationInput[]
    by: CampaingsAwarenessScalarFieldEnum[] | CampaingsAwarenessScalarFieldEnum
    having?: CampaingsAwarenessScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CampaingsAwarenessCountAggregateInputType | true
    _avg?: CampaingsAwarenessAvgAggregateInputType
    _sum?: CampaingsAwarenessSumAggregateInputType
    _min?: CampaingsAwarenessMinAggregateInputType
    _max?: CampaingsAwarenessMaxAggregateInputType
  }

  export type CampaingsAwarenessGroupByOutputType = {
    id: number
    nome: string
    descricao: string
    data_inicio: Date
    data_fim: Date
    localizacao: string
    createdAt: Date
    updatedAt: Date
    _count: CampaingsAwarenessCountAggregateOutputType | null
    _avg: CampaingsAwarenessAvgAggregateOutputType | null
    _sum: CampaingsAwarenessSumAggregateOutputType | null
    _min: CampaingsAwarenessMinAggregateOutputType | null
    _max: CampaingsAwarenessMaxAggregateOutputType | null
  }

  type GetCampaingsAwarenessGroupByPayload<T extends CampaingsAwarenessGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CampaingsAwarenessGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CampaingsAwarenessGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CampaingsAwarenessGroupByOutputType[P]>
            : GetScalarType<T[P], CampaingsAwarenessGroupByOutputType[P]>
        }
      >
    >


  export type CampaingsAwarenessSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
    data_inicio?: boolean
    data_fim?: boolean
    localizacao?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["campaingsAwareness"]>

  export type CampaingsAwarenessSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
    data_inicio?: boolean
    data_fim?: boolean
    localizacao?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["campaingsAwareness"]>

  export type CampaingsAwarenessSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
    data_inicio?: boolean
    data_fim?: boolean
    localizacao?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["campaingsAwareness"]>

  export type CampaingsAwarenessSelectScalar = {
    id?: boolean
    nome?: boolean
    descricao?: boolean
    data_inicio?: boolean
    data_fim?: boolean
    localizacao?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CampaingsAwarenessOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "descricao" | "data_inicio" | "data_fim" | "localizacao" | "createdAt" | "updatedAt", ExtArgs["result"]["campaingsAwareness"]>

  export type $CampaingsAwarenessPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CampaingsAwareness"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      descricao: string
      data_inicio: Date
      data_fim: Date
      localizacao: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["campaingsAwareness"]>
    composites: {}
  }

  type CampaingsAwarenessGetPayload<S extends boolean | null | undefined | CampaingsAwarenessDefaultArgs> = $Result.GetResult<Prisma.$CampaingsAwarenessPayload, S>

  type CampaingsAwarenessCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CampaingsAwarenessFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CampaingsAwarenessCountAggregateInputType | true
    }

  export interface CampaingsAwarenessDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CampaingsAwareness'], meta: { name: 'CampaingsAwareness' } }
    /**
     * Find zero or one CampaingsAwareness that matches the filter.
     * @param {CampaingsAwarenessFindUniqueArgs} args - Arguments to find a CampaingsAwareness
     * @example
     * // Get one CampaingsAwareness
     * const campaingsAwareness = await prisma.campaingsAwareness.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CampaingsAwarenessFindUniqueArgs>(args: SelectSubset<T, CampaingsAwarenessFindUniqueArgs<ExtArgs>>): Prisma__CampaingsAwarenessClient<$Result.GetResult<Prisma.$CampaingsAwarenessPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CampaingsAwareness that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CampaingsAwarenessFindUniqueOrThrowArgs} args - Arguments to find a CampaingsAwareness
     * @example
     * // Get one CampaingsAwareness
     * const campaingsAwareness = await prisma.campaingsAwareness.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CampaingsAwarenessFindUniqueOrThrowArgs>(args: SelectSubset<T, CampaingsAwarenessFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CampaingsAwarenessClient<$Result.GetResult<Prisma.$CampaingsAwarenessPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CampaingsAwareness that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaingsAwarenessFindFirstArgs} args - Arguments to find a CampaingsAwareness
     * @example
     * // Get one CampaingsAwareness
     * const campaingsAwareness = await prisma.campaingsAwareness.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CampaingsAwarenessFindFirstArgs>(args?: SelectSubset<T, CampaingsAwarenessFindFirstArgs<ExtArgs>>): Prisma__CampaingsAwarenessClient<$Result.GetResult<Prisma.$CampaingsAwarenessPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CampaingsAwareness that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaingsAwarenessFindFirstOrThrowArgs} args - Arguments to find a CampaingsAwareness
     * @example
     * // Get one CampaingsAwareness
     * const campaingsAwareness = await prisma.campaingsAwareness.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CampaingsAwarenessFindFirstOrThrowArgs>(args?: SelectSubset<T, CampaingsAwarenessFindFirstOrThrowArgs<ExtArgs>>): Prisma__CampaingsAwarenessClient<$Result.GetResult<Prisma.$CampaingsAwarenessPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CampaingsAwarenesses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaingsAwarenessFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CampaingsAwarenesses
     * const campaingsAwarenesses = await prisma.campaingsAwareness.findMany()
     * 
     * // Get first 10 CampaingsAwarenesses
     * const campaingsAwarenesses = await prisma.campaingsAwareness.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const campaingsAwarenessWithIdOnly = await prisma.campaingsAwareness.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CampaingsAwarenessFindManyArgs>(args?: SelectSubset<T, CampaingsAwarenessFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaingsAwarenessPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CampaingsAwareness.
     * @param {CampaingsAwarenessCreateArgs} args - Arguments to create a CampaingsAwareness.
     * @example
     * // Create one CampaingsAwareness
     * const CampaingsAwareness = await prisma.campaingsAwareness.create({
     *   data: {
     *     // ... data to create a CampaingsAwareness
     *   }
     * })
     * 
     */
    create<T extends CampaingsAwarenessCreateArgs>(args: SelectSubset<T, CampaingsAwarenessCreateArgs<ExtArgs>>): Prisma__CampaingsAwarenessClient<$Result.GetResult<Prisma.$CampaingsAwarenessPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CampaingsAwarenesses.
     * @param {CampaingsAwarenessCreateManyArgs} args - Arguments to create many CampaingsAwarenesses.
     * @example
     * // Create many CampaingsAwarenesses
     * const campaingsAwareness = await prisma.campaingsAwareness.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CampaingsAwarenessCreateManyArgs>(args?: SelectSubset<T, CampaingsAwarenessCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CampaingsAwarenesses and returns the data saved in the database.
     * @param {CampaingsAwarenessCreateManyAndReturnArgs} args - Arguments to create many CampaingsAwarenesses.
     * @example
     * // Create many CampaingsAwarenesses
     * const campaingsAwareness = await prisma.campaingsAwareness.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CampaingsAwarenesses and only return the `id`
     * const campaingsAwarenessWithIdOnly = await prisma.campaingsAwareness.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CampaingsAwarenessCreateManyAndReturnArgs>(args?: SelectSubset<T, CampaingsAwarenessCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaingsAwarenessPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CampaingsAwareness.
     * @param {CampaingsAwarenessDeleteArgs} args - Arguments to delete one CampaingsAwareness.
     * @example
     * // Delete one CampaingsAwareness
     * const CampaingsAwareness = await prisma.campaingsAwareness.delete({
     *   where: {
     *     // ... filter to delete one CampaingsAwareness
     *   }
     * })
     * 
     */
    delete<T extends CampaingsAwarenessDeleteArgs>(args: SelectSubset<T, CampaingsAwarenessDeleteArgs<ExtArgs>>): Prisma__CampaingsAwarenessClient<$Result.GetResult<Prisma.$CampaingsAwarenessPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CampaingsAwareness.
     * @param {CampaingsAwarenessUpdateArgs} args - Arguments to update one CampaingsAwareness.
     * @example
     * // Update one CampaingsAwareness
     * const campaingsAwareness = await prisma.campaingsAwareness.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CampaingsAwarenessUpdateArgs>(args: SelectSubset<T, CampaingsAwarenessUpdateArgs<ExtArgs>>): Prisma__CampaingsAwarenessClient<$Result.GetResult<Prisma.$CampaingsAwarenessPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CampaingsAwarenesses.
     * @param {CampaingsAwarenessDeleteManyArgs} args - Arguments to filter CampaingsAwarenesses to delete.
     * @example
     * // Delete a few CampaingsAwarenesses
     * const { count } = await prisma.campaingsAwareness.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CampaingsAwarenessDeleteManyArgs>(args?: SelectSubset<T, CampaingsAwarenessDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CampaingsAwarenesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaingsAwarenessUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CampaingsAwarenesses
     * const campaingsAwareness = await prisma.campaingsAwareness.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CampaingsAwarenessUpdateManyArgs>(args: SelectSubset<T, CampaingsAwarenessUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CampaingsAwarenesses and returns the data updated in the database.
     * @param {CampaingsAwarenessUpdateManyAndReturnArgs} args - Arguments to update many CampaingsAwarenesses.
     * @example
     * // Update many CampaingsAwarenesses
     * const campaingsAwareness = await prisma.campaingsAwareness.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CampaingsAwarenesses and only return the `id`
     * const campaingsAwarenessWithIdOnly = await prisma.campaingsAwareness.updateManyAndReturn({
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
    updateManyAndReturn<T extends CampaingsAwarenessUpdateManyAndReturnArgs>(args: SelectSubset<T, CampaingsAwarenessUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaingsAwarenessPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CampaingsAwareness.
     * @param {CampaingsAwarenessUpsertArgs} args - Arguments to update or create a CampaingsAwareness.
     * @example
     * // Update or create a CampaingsAwareness
     * const campaingsAwareness = await prisma.campaingsAwareness.upsert({
     *   create: {
     *     // ... data to create a CampaingsAwareness
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CampaingsAwareness we want to update
     *   }
     * })
     */
    upsert<T extends CampaingsAwarenessUpsertArgs>(args: SelectSubset<T, CampaingsAwarenessUpsertArgs<ExtArgs>>): Prisma__CampaingsAwarenessClient<$Result.GetResult<Prisma.$CampaingsAwarenessPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CampaingsAwarenesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaingsAwarenessCountArgs} args - Arguments to filter CampaingsAwarenesses to count.
     * @example
     * // Count the number of CampaingsAwarenesses
     * const count = await prisma.campaingsAwareness.count({
     *   where: {
     *     // ... the filter for the CampaingsAwarenesses we want to count
     *   }
     * })
    **/
    count<T extends CampaingsAwarenessCountArgs>(
      args?: Subset<T, CampaingsAwarenessCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CampaingsAwarenessCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CampaingsAwareness.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaingsAwarenessAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CampaingsAwarenessAggregateArgs>(args: Subset<T, CampaingsAwarenessAggregateArgs>): Prisma.PrismaPromise<GetCampaingsAwarenessAggregateType<T>>

    /**
     * Group by CampaingsAwareness.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaingsAwarenessGroupByArgs} args - Group by arguments.
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
      T extends CampaingsAwarenessGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CampaingsAwarenessGroupByArgs['orderBy'] }
        : { orderBy?: CampaingsAwarenessGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CampaingsAwarenessGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCampaingsAwarenessGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CampaingsAwareness model
   */
  readonly fields: CampaingsAwarenessFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CampaingsAwareness.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CampaingsAwarenessClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the CampaingsAwareness model
   */
  interface CampaingsAwarenessFieldRefs {
    readonly id: FieldRef<"CampaingsAwareness", 'Int'>
    readonly nome: FieldRef<"CampaingsAwareness", 'String'>
    readonly descricao: FieldRef<"CampaingsAwareness", 'String'>
    readonly data_inicio: FieldRef<"CampaingsAwareness", 'DateTime'>
    readonly data_fim: FieldRef<"CampaingsAwareness", 'DateTime'>
    readonly localizacao: FieldRef<"CampaingsAwareness", 'String'>
    readonly createdAt: FieldRef<"CampaingsAwareness", 'DateTime'>
    readonly updatedAt: FieldRef<"CampaingsAwareness", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CampaingsAwareness findUnique
   */
  export type CampaingsAwarenessFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaingsAwareness
     */
    select?: CampaingsAwarenessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaingsAwareness
     */
    omit?: CampaingsAwarenessOmit<ExtArgs> | null
    /**
     * Filter, which CampaingsAwareness to fetch.
     */
    where: CampaingsAwarenessWhereUniqueInput
  }

  /**
   * CampaingsAwareness findUniqueOrThrow
   */
  export type CampaingsAwarenessFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaingsAwareness
     */
    select?: CampaingsAwarenessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaingsAwareness
     */
    omit?: CampaingsAwarenessOmit<ExtArgs> | null
    /**
     * Filter, which CampaingsAwareness to fetch.
     */
    where: CampaingsAwarenessWhereUniqueInput
  }

  /**
   * CampaingsAwareness findFirst
   */
  export type CampaingsAwarenessFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaingsAwareness
     */
    select?: CampaingsAwarenessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaingsAwareness
     */
    omit?: CampaingsAwarenessOmit<ExtArgs> | null
    /**
     * Filter, which CampaingsAwareness to fetch.
     */
    where?: CampaingsAwarenessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CampaingsAwarenesses to fetch.
     */
    orderBy?: CampaingsAwarenessOrderByWithRelationInput | CampaingsAwarenessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CampaingsAwarenesses.
     */
    cursor?: CampaingsAwarenessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CampaingsAwarenesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CampaingsAwarenesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CampaingsAwarenesses.
     */
    distinct?: CampaingsAwarenessScalarFieldEnum | CampaingsAwarenessScalarFieldEnum[]
  }

  /**
   * CampaingsAwareness findFirstOrThrow
   */
  export type CampaingsAwarenessFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaingsAwareness
     */
    select?: CampaingsAwarenessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaingsAwareness
     */
    omit?: CampaingsAwarenessOmit<ExtArgs> | null
    /**
     * Filter, which CampaingsAwareness to fetch.
     */
    where?: CampaingsAwarenessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CampaingsAwarenesses to fetch.
     */
    orderBy?: CampaingsAwarenessOrderByWithRelationInput | CampaingsAwarenessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CampaingsAwarenesses.
     */
    cursor?: CampaingsAwarenessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CampaingsAwarenesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CampaingsAwarenesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CampaingsAwarenesses.
     */
    distinct?: CampaingsAwarenessScalarFieldEnum | CampaingsAwarenessScalarFieldEnum[]
  }

  /**
   * CampaingsAwareness findMany
   */
  export type CampaingsAwarenessFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaingsAwareness
     */
    select?: CampaingsAwarenessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaingsAwareness
     */
    omit?: CampaingsAwarenessOmit<ExtArgs> | null
    /**
     * Filter, which CampaingsAwarenesses to fetch.
     */
    where?: CampaingsAwarenessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CampaingsAwarenesses to fetch.
     */
    orderBy?: CampaingsAwarenessOrderByWithRelationInput | CampaingsAwarenessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CampaingsAwarenesses.
     */
    cursor?: CampaingsAwarenessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CampaingsAwarenesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CampaingsAwarenesses.
     */
    skip?: number
    distinct?: CampaingsAwarenessScalarFieldEnum | CampaingsAwarenessScalarFieldEnum[]
  }

  /**
   * CampaingsAwareness create
   */
  export type CampaingsAwarenessCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaingsAwareness
     */
    select?: CampaingsAwarenessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaingsAwareness
     */
    omit?: CampaingsAwarenessOmit<ExtArgs> | null
    /**
     * The data needed to create a CampaingsAwareness.
     */
    data: XOR<CampaingsAwarenessCreateInput, CampaingsAwarenessUncheckedCreateInput>
  }

  /**
   * CampaingsAwareness createMany
   */
  export type CampaingsAwarenessCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CampaingsAwarenesses.
     */
    data: CampaingsAwarenessCreateManyInput | CampaingsAwarenessCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CampaingsAwareness createManyAndReturn
   */
  export type CampaingsAwarenessCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaingsAwareness
     */
    select?: CampaingsAwarenessSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CampaingsAwareness
     */
    omit?: CampaingsAwarenessOmit<ExtArgs> | null
    /**
     * The data used to create many CampaingsAwarenesses.
     */
    data: CampaingsAwarenessCreateManyInput | CampaingsAwarenessCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CampaingsAwareness update
   */
  export type CampaingsAwarenessUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaingsAwareness
     */
    select?: CampaingsAwarenessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaingsAwareness
     */
    omit?: CampaingsAwarenessOmit<ExtArgs> | null
    /**
     * The data needed to update a CampaingsAwareness.
     */
    data: XOR<CampaingsAwarenessUpdateInput, CampaingsAwarenessUncheckedUpdateInput>
    /**
     * Choose, which CampaingsAwareness to update.
     */
    where: CampaingsAwarenessWhereUniqueInput
  }

  /**
   * CampaingsAwareness updateMany
   */
  export type CampaingsAwarenessUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CampaingsAwarenesses.
     */
    data: XOR<CampaingsAwarenessUpdateManyMutationInput, CampaingsAwarenessUncheckedUpdateManyInput>
    /**
     * Filter which CampaingsAwarenesses to update
     */
    where?: CampaingsAwarenessWhereInput
    /**
     * Limit how many CampaingsAwarenesses to update.
     */
    limit?: number
  }

  /**
   * CampaingsAwareness updateManyAndReturn
   */
  export type CampaingsAwarenessUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaingsAwareness
     */
    select?: CampaingsAwarenessSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CampaingsAwareness
     */
    omit?: CampaingsAwarenessOmit<ExtArgs> | null
    /**
     * The data used to update CampaingsAwarenesses.
     */
    data: XOR<CampaingsAwarenessUpdateManyMutationInput, CampaingsAwarenessUncheckedUpdateManyInput>
    /**
     * Filter which CampaingsAwarenesses to update
     */
    where?: CampaingsAwarenessWhereInput
    /**
     * Limit how many CampaingsAwarenesses to update.
     */
    limit?: number
  }

  /**
   * CampaingsAwareness upsert
   */
  export type CampaingsAwarenessUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaingsAwareness
     */
    select?: CampaingsAwarenessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaingsAwareness
     */
    omit?: CampaingsAwarenessOmit<ExtArgs> | null
    /**
     * The filter to search for the CampaingsAwareness to update in case it exists.
     */
    where: CampaingsAwarenessWhereUniqueInput
    /**
     * In case the CampaingsAwareness found by the `where` argument doesn't exist, create a new CampaingsAwareness with this data.
     */
    create: XOR<CampaingsAwarenessCreateInput, CampaingsAwarenessUncheckedCreateInput>
    /**
     * In case the CampaingsAwareness was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CampaingsAwarenessUpdateInput, CampaingsAwarenessUncheckedUpdateInput>
  }

  /**
   * CampaingsAwareness delete
   */
  export type CampaingsAwarenessDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaingsAwareness
     */
    select?: CampaingsAwarenessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaingsAwareness
     */
    omit?: CampaingsAwarenessOmit<ExtArgs> | null
    /**
     * Filter which CampaingsAwareness to delete.
     */
    where: CampaingsAwarenessWhereUniqueInput
  }

  /**
   * CampaingsAwareness deleteMany
   */
  export type CampaingsAwarenessDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CampaingsAwarenesses to delete
     */
    where?: CampaingsAwarenessWhereInput
    /**
     * Limit how many CampaingsAwarenesses to delete.
     */
    limit?: number
  }

  /**
   * CampaingsAwareness without action
   */
  export type CampaingsAwarenessDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaingsAwareness
     */
    select?: CampaingsAwarenessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaingsAwareness
     */
    omit?: CampaingsAwarenessOmit<ExtArgs> | null
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

  export type $ReportsCampaignPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ReportsCampaign"
    objects: {}
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


  export const DonarsScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    email: 'email',
    telefone: 'telefone',
    endereco: 'endereco',
    cnpj: 'cnpj',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DonarsScalarFieldEnum = (typeof DonarsScalarFieldEnum)[keyof typeof DonarsScalarFieldEnum]


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


  export const ColectionPointsScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    endereco: 'endereco',
    telefone: 'telefone',
    horario_de_funcionamento: 'horario_de_funcionamento',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ColectionPointsScalarFieldEnum = (typeof ColectionPointsScalarFieldEnum)[keyof typeof ColectionPointsScalarFieldEnum]


  export const CampaingsAwarenessScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    descricao: 'descricao',
    data_inicio: 'data_inicio',
    data_fim: 'data_fim',
    localizacao: 'localizacao',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CampaingsAwarenessScalarFieldEnum = (typeof CampaingsAwarenessScalarFieldEnum)[keyof typeof CampaingsAwarenessScalarFieldEnum]


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


  export type DonarsWhereInput = {
    AND?: DonarsWhereInput | DonarsWhereInput[]
    OR?: DonarsWhereInput[]
    NOT?: DonarsWhereInput | DonarsWhereInput[]
    id?: IntFilter<"Donars"> | number
    nome?: StringFilter<"Donars"> | string
    email?: StringFilter<"Donars"> | string
    telefone?: StringFilter<"Donars"> | string
    endereco?: StringFilter<"Donars"> | string
    cnpj?: StringFilter<"Donars"> | string
    createdAt?: DateTimeFilter<"Donars"> | Date | string
    updatedAt?: DateTimeFilter<"Donars"> | Date | string
  }

  export type DonarsOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
    endereco?: SortOrder
    cnpj?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DonarsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DonarsWhereInput | DonarsWhereInput[]
    OR?: DonarsWhereInput[]
    NOT?: DonarsWhereInput | DonarsWhereInput[]
    nome?: StringFilter<"Donars"> | string
    email?: StringFilter<"Donars"> | string
    telefone?: StringFilter<"Donars"> | string
    endereco?: StringFilter<"Donars"> | string
    cnpj?: StringFilter<"Donars"> | string
    createdAt?: DateTimeFilter<"Donars"> | Date | string
    updatedAt?: DateTimeFilter<"Donars"> | Date | string
  }, "id">

  export type DonarsOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
    endereco?: SortOrder
    cnpj?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DonarsCountOrderByAggregateInput
    _avg?: DonarsAvgOrderByAggregateInput
    _max?: DonarsMaxOrderByAggregateInput
    _min?: DonarsMinOrderByAggregateInput
    _sum?: DonarsSumOrderByAggregateInput
  }

  export type DonarsScalarWhereWithAggregatesInput = {
    AND?: DonarsScalarWhereWithAggregatesInput | DonarsScalarWhereWithAggregatesInput[]
    OR?: DonarsScalarWhereWithAggregatesInput[]
    NOT?: DonarsScalarWhereWithAggregatesInput | DonarsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Donars"> | number
    nome?: StringWithAggregatesFilter<"Donars"> | string
    email?: StringWithAggregatesFilter<"Donars"> | string
    telefone?: StringWithAggregatesFilter<"Donars"> | string
    endereco?: StringWithAggregatesFilter<"Donars"> | string
    cnpj?: StringWithAggregatesFilter<"Donars"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Donars"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Donars"> | Date | string
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

  export type ColectionPointsWhereInput = {
    AND?: ColectionPointsWhereInput | ColectionPointsWhereInput[]
    OR?: ColectionPointsWhereInput[]
    NOT?: ColectionPointsWhereInput | ColectionPointsWhereInput[]
    id?: IntFilter<"ColectionPoints"> | number
    nome?: StringFilter<"ColectionPoints"> | string
    endereco?: StringFilter<"ColectionPoints"> | string
    telefone?: StringFilter<"ColectionPoints"> | string
    horario_de_funcionamento?: DateTimeFilter<"ColectionPoints"> | Date | string
    createdAt?: DateTimeFilter<"ColectionPoints"> | Date | string
    updatedAt?: DateTimeFilter<"ColectionPoints"> | Date | string
  }

  export type ColectionPointsOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    endereco?: SortOrder
    telefone?: SortOrder
    horario_de_funcionamento?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ColectionPointsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ColectionPointsWhereInput | ColectionPointsWhereInput[]
    OR?: ColectionPointsWhereInput[]
    NOT?: ColectionPointsWhereInput | ColectionPointsWhereInput[]
    nome?: StringFilter<"ColectionPoints"> | string
    endereco?: StringFilter<"ColectionPoints"> | string
    telefone?: StringFilter<"ColectionPoints"> | string
    horario_de_funcionamento?: DateTimeFilter<"ColectionPoints"> | Date | string
    createdAt?: DateTimeFilter<"ColectionPoints"> | Date | string
    updatedAt?: DateTimeFilter<"ColectionPoints"> | Date | string
  }, "id">

  export type ColectionPointsOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    endereco?: SortOrder
    telefone?: SortOrder
    horario_de_funcionamento?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ColectionPointsCountOrderByAggregateInput
    _avg?: ColectionPointsAvgOrderByAggregateInput
    _max?: ColectionPointsMaxOrderByAggregateInput
    _min?: ColectionPointsMinOrderByAggregateInput
    _sum?: ColectionPointsSumOrderByAggregateInput
  }

  export type ColectionPointsScalarWhereWithAggregatesInput = {
    AND?: ColectionPointsScalarWhereWithAggregatesInput | ColectionPointsScalarWhereWithAggregatesInput[]
    OR?: ColectionPointsScalarWhereWithAggregatesInput[]
    NOT?: ColectionPointsScalarWhereWithAggregatesInput | ColectionPointsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ColectionPoints"> | number
    nome?: StringWithAggregatesFilter<"ColectionPoints"> | string
    endereco?: StringWithAggregatesFilter<"ColectionPoints"> | string
    telefone?: StringWithAggregatesFilter<"ColectionPoints"> | string
    horario_de_funcionamento?: DateTimeWithAggregatesFilter<"ColectionPoints"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"ColectionPoints"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ColectionPoints"> | Date | string
  }

  export type CampaingsAwarenessWhereInput = {
    AND?: CampaingsAwarenessWhereInput | CampaingsAwarenessWhereInput[]
    OR?: CampaingsAwarenessWhereInput[]
    NOT?: CampaingsAwarenessWhereInput | CampaingsAwarenessWhereInput[]
    id?: IntFilter<"CampaingsAwareness"> | number
    nome?: StringFilter<"CampaingsAwareness"> | string
    descricao?: StringFilter<"CampaingsAwareness"> | string
    data_inicio?: DateTimeFilter<"CampaingsAwareness"> | Date | string
    data_fim?: DateTimeFilter<"CampaingsAwareness"> | Date | string
    localizacao?: StringFilter<"CampaingsAwareness"> | string
    createdAt?: DateTimeFilter<"CampaingsAwareness"> | Date | string
    updatedAt?: DateTimeFilter<"CampaingsAwareness"> | Date | string
  }

  export type CampaingsAwarenessOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    data_inicio?: SortOrder
    data_fim?: SortOrder
    localizacao?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CampaingsAwarenessWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CampaingsAwarenessWhereInput | CampaingsAwarenessWhereInput[]
    OR?: CampaingsAwarenessWhereInput[]
    NOT?: CampaingsAwarenessWhereInput | CampaingsAwarenessWhereInput[]
    nome?: StringFilter<"CampaingsAwareness"> | string
    descricao?: StringFilter<"CampaingsAwareness"> | string
    data_inicio?: DateTimeFilter<"CampaingsAwareness"> | Date | string
    data_fim?: DateTimeFilter<"CampaingsAwareness"> | Date | string
    localizacao?: StringFilter<"CampaingsAwareness"> | string
    createdAt?: DateTimeFilter<"CampaingsAwareness"> | Date | string
    updatedAt?: DateTimeFilter<"CampaingsAwareness"> | Date | string
  }, "id">

  export type CampaingsAwarenessOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    data_inicio?: SortOrder
    data_fim?: SortOrder
    localizacao?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CampaingsAwarenessCountOrderByAggregateInput
    _avg?: CampaingsAwarenessAvgOrderByAggregateInput
    _max?: CampaingsAwarenessMaxOrderByAggregateInput
    _min?: CampaingsAwarenessMinOrderByAggregateInput
    _sum?: CampaingsAwarenessSumOrderByAggregateInput
  }

  export type CampaingsAwarenessScalarWhereWithAggregatesInput = {
    AND?: CampaingsAwarenessScalarWhereWithAggregatesInput | CampaingsAwarenessScalarWhereWithAggregatesInput[]
    OR?: CampaingsAwarenessScalarWhereWithAggregatesInput[]
    NOT?: CampaingsAwarenessScalarWhereWithAggregatesInput | CampaingsAwarenessScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CampaingsAwareness"> | number
    nome?: StringWithAggregatesFilter<"CampaingsAwareness"> | string
    descricao?: StringWithAggregatesFilter<"CampaingsAwareness"> | string
    data_inicio?: DateTimeWithAggregatesFilter<"CampaingsAwareness"> | Date | string
    data_fim?: DateTimeWithAggregatesFilter<"CampaingsAwareness"> | Date | string
    localizacao?: StringWithAggregatesFilter<"CampaingsAwareness"> | string
    createdAt?: DateTimeWithAggregatesFilter<"CampaingsAwareness"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CampaingsAwareness"> | Date | string
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

  export type DonarsCreateInput = {
    nome: string
    email: string
    telefone: string
    endereco: string
    cnpj: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DonarsUncheckedCreateInput = {
    id?: number
    nome: string
    email: string
    telefone: string
    endereco: string
    cnpj: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DonarsUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DonarsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DonarsCreateManyInput = {
    id?: number
    nome: string
    email: string
    telefone: string
    endereco: string
    cnpj: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DonarsUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DonarsUncheckedUpdateManyInput = {
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
  }

  export type BeneficiaryUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type ColectionPointsCreateInput = {
    nome: string
    endereco: string
    telefone: string
    horario_de_funcionamento: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ColectionPointsUncheckedCreateInput = {
    id?: number
    nome: string
    endereco: string
    telefone: string
    horario_de_funcionamento: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ColectionPointsUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    horario_de_funcionamento?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ColectionPointsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    horario_de_funcionamento?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ColectionPointsCreateManyInput = {
    id?: number
    nome: string
    endereco: string
    telefone: string
    horario_de_funcionamento: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ColectionPointsUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    horario_de_funcionamento?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ColectionPointsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    horario_de_funcionamento?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CampaingsAwarenessCreateInput = {
    nome: string
    descricao: string
    data_inicio: Date | string
    data_fim: Date | string
    localizacao: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CampaingsAwarenessUncheckedCreateInput = {
    id?: number
    nome: string
    descricao: string
    data_inicio: Date | string
    data_fim: Date | string
    localizacao: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CampaingsAwarenessUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    data_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    data_fim?: DateTimeFieldUpdateOperationsInput | Date | string
    localizacao?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CampaingsAwarenessUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    data_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    data_fim?: DateTimeFieldUpdateOperationsInput | Date | string
    localizacao?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CampaingsAwarenessCreateManyInput = {
    id?: number
    nome: string
    descricao: string
    data_inicio: Date | string
    data_fim: Date | string
    localizacao: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CampaingsAwarenessUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    data_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    data_fim?: DateTimeFieldUpdateOperationsInput | Date | string
    localizacao?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CampaingsAwarenessUncheckedUpdateManyInput = {
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
  }

  export type ReportsCampaignUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    localizacao?: StringFieldUpdateOperationsInput | string
    quantidade_alimentos?: IntFieldUpdateOperationsInput | number
    quantidade_beneficiarios?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type DonarsCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
    endereco?: SortOrder
    cnpj?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DonarsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DonarsMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
    endereco?: SortOrder
    cnpj?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DonarsMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
    endereco?: SortOrder
    cnpj?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DonarsSumOrderByAggregateInput = {
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

  export type ColectionPointsCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    endereco?: SortOrder
    telefone?: SortOrder
    horario_de_funcionamento?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ColectionPointsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ColectionPointsMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    endereco?: SortOrder
    telefone?: SortOrder
    horario_de_funcionamento?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ColectionPointsMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    endereco?: SortOrder
    telefone?: SortOrder
    horario_de_funcionamento?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ColectionPointsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CampaingsAwarenessCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    data_inicio?: SortOrder
    data_fim?: SortOrder
    localizacao?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CampaingsAwarenessAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CampaingsAwarenessMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    data_inicio?: SortOrder
    data_fim?: SortOrder
    localizacao?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CampaingsAwarenessMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    data_inicio?: SortOrder
    data_fim?: SortOrder
    localizacao?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CampaingsAwarenessSumOrderByAggregateInput = {
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
namespace App

[<RequireQualifiedAccess>]
type Msg =
    | Increment

type Model =
    { Count: int }
namespace App

open Elmish

module State =
    let init () =
        { Count = 0 }, Cmd.none

    let update msg model =
        match msg with
        | Msg.Increment ->
            { model with Count = model.Count + 1 },
            Cmd.none
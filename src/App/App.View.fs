module App.View

open Feliz

let View model dispatch =
    React.fragment [
        Html.button [
            prop.text
                (match model.Count with
                 | 0 -> "Click me"
                 | count -> sprintf "count: %i" count)

            prop.onClick (fun _ -> Msg.Increment |> dispatch)
        ]
    ]
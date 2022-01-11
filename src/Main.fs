module Main

open Elmish
open Elmish.React
#if DEBUG
open Elmish.Debug
#endif

open Fable.Core.JsInterop

importAll "./sass/main.sass" // import default style


Program.mkProgram App.State.init App.State.update App.View.View
|> Program.withReactSynchronous "app"
#if DEBUG
|> Program.withDebugger
#endif
|> Program.run
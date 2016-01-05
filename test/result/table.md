| Name | Description | Type | Required | Default Value |
| :--- | :----- | :--- | :---: | :---: |
| optionalArray | Description of optionalArray. | Array |  | `[]` |
| optionalBool | Description of optionalBool. | Boolean |  | `false` |
| optionalFunc | Description of optionalFunc. | Function |  | `() => {}` |
| optionalNumber | Description of optionalNumber. | Number |  | `123` |
| optionalObject | Description of optionalObject. | Object |  | `{}` |
| optionalString | Description of optionalString. | String |  | `'abc'` |
| optionalNode | Description of optionalNode. | Node |  | `null` |
| optionalElement | Description of optionalElement. | Element |  | `null` |
| optionalMessage | Description of optionalMessage. | Class(Message) |  | `null` |
| optionalEnum | Description of optionalEnum. | 'News'│'Photos' |  | `'News'` |
| optionalUnion | Description of optionalUnion. | String│Number│Class(Message) |  | `null` |
| optionalArrayOf | Description of optionalArrayOf. | Array(Number) |  | `[  1, 2, 3]` |
| optionalObjectOf | Description of optionalObjectOf. | ObjectOf(Number) |  | `{}` |
| optionalObjectWithShape | Description of optionalObjectWithShape. | {"color":"String","fontSize":"Number"} |  | `{  color: 'red',  fontSize: 14}` |
| └─ optionalObjectWithShape.color |  | String | √ | `red` |
| └─ optionalObjectWithShape.fontSize |  | Number |  | `14` |
| requiredFunc | Description of requiredFunc. | Function | √ | `() => {}` |
| requiredAny | Description of requiredAny. | Any | √ | `false` |
| customProp | Description of customProp. | Custom(Function) |  | `null` |
| noDefaultValueProp | Description of noDefaultValueProp. | String |  |  |
| notDefinedProp |  |  |  | `null` |

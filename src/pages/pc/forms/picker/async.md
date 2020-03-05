当数据量比较大时，一般会采用异步加载，要实现异步加载子级，你需要通过 picker 组件的 `dataProvide` 属性传入一个函数，该函数返回`PickerCell[]` 或者 `Promise<PickerCell[]>` 或者 `Observable<PickerCell[]>`。

当 picker 组件检测到某选中项没有子级的时候，则会调用该函数，并把当前选中项作为函数参数，并根据返回值自动渲染，**当值为 null 时，将视为没有更多子级可选，即选择完成**。

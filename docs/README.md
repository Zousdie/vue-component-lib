# Hello vue-component-lib

## Vue component library template.

_Work in process_

## Icon

SVG 图标

<v-icon name="loading" />

```vue
<v-icon name="loading" />
```

## Steps

步骤条

<v-steps style="background:#fff">
  <v-step title="first" description="第一部分" />
  <v-step title="second" description="第二部分" />
  <v-step title="thrid" description="第三部分" />
  <v-step title="fourth">第三部分</v-step>
</v-steps>

```vue
<v-steps style="background:#fff">
  <v-step title="second" description="第二部分" />
  <v-step title="second" description="第二部分" />
  <v-step title="thrid" description="第三部分" />
  <v-step title="fourth">第三部分</v-step>
</v-steps>
```

## Row Col

```vue
<v-row :gutter="10">
  <v-col :span="3" :xl=4>1</v-col>
  <v-col :span="3" :xl=4>2</v-col>
  <v-col :span="3" :xl=2>3</v-col>
  <v-col :span="3" :xl=2>4</v-col>
</v-row>
```

<v-row :gutter="10">
  <v-col :span="3" :xl=4>1</v-col>
  <v-col :span="3" :xl=4>2</v-col>
  <v-col :span="3" :xl=2>3</v-col>
  <v-col :span="3" :xl=2>4</v-col>
</v-row>

```vue
<v-row>
  <v-col :span="4">
    span4
  </v-col>
  <v-col :span="4" :offset="6">
    span4 and offset6
  </v-col>
</v-row>
```

<v-row>
  <v-col :span="4">
    span4
  </v-col>
  <v-col :span="4" :offset="6">
    span4 and offset6
  </v-col>
</v-row>

```vue
<v-row>
  <v-col :xll="4">
    xll4
  </v-col>
</v-row>
```

<v-row>
  <v-col :xll="4">
    xll4
  </v-col>
</v-row>

```vue
<v-row>
  <v-col :xll="{span:4, offset: 2}">
    xll obj 4 and offset 2
  </v-col>
  <v-col :xll="{span:4, offset: 2}">
    xll obj 4 and offset 2
  </v-col>
</v-row>
```

<v-row>
  <v-col :xll="{span:4, offset: 2}">
    xll obj 4 and offset 2
  </v-col>
  <v-col :xll="{span:4, offset: 2}">
    xll obj 4 and offset 2
  </v-col>
</v-row>

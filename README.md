# nest-commander-exemplar

Created to highlight issue found with required params

## Installation

```bash
$ npm install
```

## Build the app

```bash
$ nestjs build
```

## Run the app

```bash
$ node dist/main basic
```

## Commands

there are two commands below - according to the docs 

`--string` should be optional when executing the `basic` command as is is surrounded by []


`--number` should be mandatory when executing the `basic` command as is is surrounded by <>

```javascript

  @Option({
    flags: '-s, --string [string]',
    description: 'A string return'
  })
  parseString(val: string): string {
    return val;
  }

  @Option({
    flags: '-n, --number <number>',
    description: 'A basic number parser'
  })
  parseNumber(val: string): number {
    return Number(val);
  }


```

example
```
node .\dist\main basic
```


Expected Response
```
Error required option `-n` not found
```

Actual Behaviour
```
LOG:{"param":[]}
```
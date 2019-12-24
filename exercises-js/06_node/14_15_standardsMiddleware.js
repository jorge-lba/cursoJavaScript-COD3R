// Middleware pattern (Chain of Responsibility)
// O padrão de projeto é uma solução para problemas recorrentes

const pass1 = (ctx, next) =>{
    ctx.value1 = 'mid1'
    next()
}

const pass2 = (ctx, next) =>{
    ctx.value2 = 'mid2'
    next()
}

const pass3 = ctx => ctx.value3 = 'mid3'

const exec = (ctx, ...middlewares) =>{
    const execPass = index =>{
        middlewares && index < middlewares.length &&
            middlewares[index](ctx,()=> execPass(index+1));
    }
    execPass(0);
}

const ctx = {};
exec(ctx, pass1, pass2, pass3);

console.log(ctx)
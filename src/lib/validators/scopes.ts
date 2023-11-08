interface ClientPlans {
    plan: "free" | "hobby" | "pro" 
}


interface ServerAccess {
    access?: "admin" | "non-admin"; 

}

interface UserMapper{
    server: ServerAccess,
    client:ClientPlans,  
}

export function scopesSetter<Event extends keyof UserMapper>(e: Event, data: UserMapper[Event]):Record<Event, UserMapper[Event]>{
    return {[e]: data} as Record<Event, UserMapper[Event]>;}




console.log(scopesSetter('client',{"plan":'free'})); 
console.log(scopesSetter('server',{'access':'admin'})); 


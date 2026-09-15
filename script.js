const wait = (sec) => new Promise((res, rej) => setTimeout(res, sec * 1000));

for (let i = 0; i < 10; i++) {

    console.log("Sending request....");

    let res = await fetch("http://localhost:5678/webhook/dec6b4dc-7bcd-491a-9664-7e2b7607d098");
    let status = res.status;
    res = await res.json();
    
    console.log(status, res);
    await wait(5);
}
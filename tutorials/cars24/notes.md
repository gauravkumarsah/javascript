<!-- 
===========================

CALL BIND APPLY

===========================

POLYFILL FOR BIND


there are 3 functions in the polyfill of myBind 
1. is the myBind function itself
2. is the function that myBind returns
3. is the function that that we a binding with the new object

myBind will  BIND THE FUNCTION WITH OBJ
myBound will be returned when myBind is called ( to make it callable)
actual function: THIS WILL DO EXECUTE ON THE CONTEXT 

===========================

DEBOUNCE, THROTTLE

===========================

DEBOUNCE: is called based on the duration of the events
THROTTLE: is called based on the duration of the last callback execution


why are we not clearing timeout in throttle
ANS: because we are not creating multiple timeout. We are waiting for
    the last timeout to resolve before creating a  new timeout.







===========================

EVENT PROPOGATION, BUBBLING, CAPTURE

===========================

CAPTURE takes precedence over PROPOGATION: ie first the capture elements will finish 
then propogation will start immediately

CAPTURE: is from top to e.target
PROPGATION: is from e.target to top
















-->


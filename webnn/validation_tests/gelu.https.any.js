// META: title=validation tests for WebNN API gelu operation
// META: global=window,dedicatedworker
// META: script=../resources/utils_validation.js

'use strict';

validateInputFromAnotherBuilder('gelu');

validateSingleInputOperation('gelu', /*alsoBuildActivation=*/ true);

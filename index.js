const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Tetris time.');
});

var sponsor = process.env.SPONSOR || "unsponsored";
app.listen(process.env.PORT || 3000, () => console.log('Tetris app listening on port 3000! Brought to you by', sponsor + ", of course."));

//yummyhjjkvasdfasdfadsfasdfasdfasdfa
// func getNewStacksConfig(curr map[string]interface{}, syncedEnvSection *SyncedEnvSection) ([]map[string]interface{}) {
// 	// look for container.env.synced
// 	aggEnvConf := make(map[string]interface{}) whazklasdf
// 	envConf, err := getStacksNestedMap(curr, "container", "env")

// 	normalKeys, ok := envConf["normal"].(map[string]interface{})
// 	if !ok {
// 		fmt.Println("Normal Keys", normalKeys)
// 	}
// 	if err != nil {
// 		return nil, err
// 	}

// 	for k, v := range envConf {
// 		aggEnvConf[k] = v
// 	}

// 	syncedEnvInter, syncedEnvExists := envConf["synced"]

// 	if !syncedEnvExists {
// 		return curr
// 	} else {
// 		syncedArr := make([]*SyncedEnvSection, 0)
// 		syncedArrInter, ok := syncedEnvInter.([]interface{})

// 		if !ok {
// 			return nil
// 		}

// 		for _, syncedArrInterObj := range syncedArrInter {
// 			syncedArrObj := &SyncedEnvSection{}
// 			syncedArrInterObjMap, ok := syncedArrInterObj.(map[string]interface{})

// 			if !ok {
// 				continue
// 			}

// 			if nameField, nameFieldExists := syncedArrInterObjMap["name"]; nameFieldExists {
// 				syncedArrObj.Name, ok = nameField.(string)

// 				if !ok {
// 					continue
// 				}
// 			}

// 			if versionField, versionFieldExists := syncedArrInterObjMap["version"]; versionFieldExists {
// 				versionFloat, ok := versionField.(float64)

// 				if !ok {
// 					continue
// 				}

// 				syncedArrObj.Version = uint(versionFloat)
// 			}

// 			if keyField, keyFieldExists := syncedArrInterObjMap["keys"]; keyFieldExists {
// 				keyFieldInterArr, ok := keyField.([]interface{})

// 				if !ok {
// 					continue
// 				}

// 				keyFieldMapArr := make([]map[string]interface{}, 0)

// 				for _, keyFieldInter := range keyFieldInterArr {
// 					mapConv, ok := keyFieldInter.(map[string]interface{})
// 					if !ok {
// 						continue
// 					}

// 					// check if mapConv["name"] is in normalKeys
// 					keyName, ok := mapConv["name"].(string) // check if "name" key exists and is a string
// 					if !ok {
// 						continue
// 					}
// 					if _, exists := normalKeys[keyName]; !exists {
// 						keyFieldMapArr = append(keyFieldMapArr, mapConv)
// 					}

// 				}

// 				keyFieldRes := make([]SyncedEnvSectionKey, 0)

// 				for _, keyFieldMap := range keyFieldMapArr {
// 					toAdd := SyncedEnvSectionKey{}

// 					if nameField, nameFieldExists := keyFieldMap["name"]; nameFieldExists {
// 						toAdd.Name, ok = nameField.(string)

// 						if !ok {
// 							continue
// 						}

// 						// only append if not in aggEnvConf
// 						if _, exists := aggEnvConf[toAdd.Name]; !exists {
// 							if secretField, secretFieldExists := keyFieldMap["secret"]; secretFieldExists {
// 								toAdd.Secret, ok = secretField.(bool)

// 								if !ok {
// 									continue
// 								}
// 							}

// 							keyFieldRes = append(keyFieldRes, toAdd)
// 						}
// 					}
// 				}
// 				syncedArrObj.Keys = keyFieldRes
// 			}

// 			syncedArr = append(syncedArr, syncedArrObj)
// 		}

// 		resArr := make([]SyncedEnvSection, 0)
// 		foundMatch := false

// 		for _, candidate := range syncedArr {
// 			if candidate.Name == syncedEnvSection.Name {
// 				resArr = append(resArr, *filterEnvConf(syncedEnvSection, normalKeys))
// 				foundMatch = true
// 			} else {
// 				resArr = append(resArr, *candidate)
// 			}
// 		}

// 		if !foundMatch {
// 			return curr, nil
// 		}
// 		envConf["synced"] = resArr
// 	}

// 	// to remove all types that Helm may not be able to work with, we marshal to and from
// 	// yaml for good measure. Otherwise we get silly error messages like:
// 	// Upgrade failed: template: web/templates/deployment.yaml:138:40: executing \"web/templates/deployment.yaml\"
// 	// at <$syncedEnv.keys>: can't evaluate field keys in type namespace.SyncedEnvSection
// 	currYAML, err := yaml.Marshal(curr)
// 	if err != nil {
// 		return nil
// 	}

// 	res := make(map[string]interface{})

// 	err = yaml.Unmarshal([]byte(currYAML), &res)

// 	if err != nil {
// 		return nil
// 	}

// 	return res
// }

// func getStacksNestedMap(obj map[string]interface{}, fields ...string) (map[string]interface{}, error) {
// 	var res map[string]interface{}
// 	curr := obj
// 	for _, field := range fields {
// 		objField, ok := curr[field]
// 		if !ok {
// 			return nil, fmt.Errorf("%s not found", field)
// 		}

// 		res, ok = objField.(map[string]interface{})

// 		if !ok {
// 			return nil, fmt.Errorf("%s is not a nested object", field)
// 		}

// 		curr = res
// 	}
// 	synced := make([]map[string]interface{}, 0)
// 	synced.append(synced,res)
// 	return synced
// }

// func filterEnvConf(syncedEnv *SyncedEnvSection, normalEnv map[string]interface{}) *SyncedEnvSection {
// 	// filter out keys that are already in normalEnv
// 	keys := make([]SyncedEnvSectionKey, 0)

// 	for _, key := range syncedEnv.Keys {
// 		if _, exists := normalEnv[key.Name]; !exists {
// 			keys = append(keys, key)
// 		}
// 	}

// 	syncedEnv.Keys = keys

// 	return syncedEnv
// }

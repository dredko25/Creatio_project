define("UsrPage_x8cn9cb", /**SCHEMA_DEPS*/["@creatio-devkit/common"]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/(sdk)/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "insert",
				"name": "ComboBox_h92q4cf",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.UsrLotsVisitFreedomUIDS_UsrParentLots_dvou38h",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "above",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$UsrLotsVisitFreedomUIDS_UsrParentLots_dvou38h"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "addRecord_7dtctge",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_7dtctge_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_h92q4cf",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_aon3gi6",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.UsrLotsVisitFreedomUIDS_UsrLotsRealty_sv1fepu",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "above",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$UsrLotsVisitFreedomUIDS_UsrLotsRealty_sv1fepu"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "addRecord_r3l20co",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_r3l20co_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_aon3gi6",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DateTimePicker_wcajmrr",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 3,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"label": "$Resources.Strings.UsrLotsVisitFreedomUIDS_UsrVisitDateTime_x5qjgkk",
					"placeholder": "",
					"readonly": false,
					"labelPosition": "above",
					"tooltip": "",
					"pickerType": "datetime",
					"control": "$UsrLotsVisitFreedomUIDS_UsrVisitDateTime_x5qjgkk"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "ComboBox_ujdg7pf",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 4,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.UsrLotsVisitFreedomUIDS_UsrState_cf6lzml",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "above",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$UsrLotsVisitFreedomUIDS_UsrState_cf6lzml"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "addRecord_inwa04v",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_inwa04v_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_ujdg7pf",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_i9e2fjc",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 5,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.UsrLotsVisitFreedomUIDS_UsrClient_l3bu60c",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "above",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$UsrLotsVisitFreedomUIDS_UsrClient_l3bu60c"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "addRecord_ux453s7",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_ux453s7_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_i9e2fjc",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_ign3bcb",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 6,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.UsrLotsVisitFreedomUIDS_UsrResponsibleManager_6ly756c",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "above",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$UsrLotsVisitFreedomUIDS_UsrResponsibleManager_6ly756c"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "addRecord_dxysspv",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_dxysspv_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_ign3bcb",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Input_xfec8fp",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 7,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.UsrLotsVisitFreedomUIDS_UsrClientComment_sj8767z",
					"control": "$UsrLotsVisitFreedomUIDS_UsrClientComment_sj8767z",
					"placeholder": "",
					"tooltip": "",
					"readonly": false,
					"multiline": false,
					"labelPosition": "above"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "Input_xzttzw5",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 8,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.UsrLotsVisitFreedomUIDS_UsrRealtorsComment_xtx42o7",
					"control": "$UsrLotsVisitFreedomUIDS_UsrRealtorsComment_xtx42o7",
					"placeholder": "",
					"tooltip": "",
					"readonly": false,
					"multiline": false,
					"labelPosition": "above"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "ComboBox_6otds3i",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 9,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.UsrLotsVisitFreedomUIDS_UsrResult_6mq5p08",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "above",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$UsrLotsVisitFreedomUIDS_UsrResult_6mq5p08"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 8
			},
			{
				"operation": "insert",
				"name": "addRecord_7vp4xpn",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_7vp4xpn_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_6otds3i",
				"propertyName": "listActions",
				"index": 0
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					
					"UsrLotsVisitFreedomUIDS_UsrVisitDateTime_x5qjgkk": {
						"modelConfig": {
							"path": "UsrLotsVisitFreedomUIDS.UsrVisitDateTime"
						}
					},
					"UsrLotsVisitFreedomUIDS_UsrClient_l3bu60c": {
						"modelConfig": {
							"path": "UsrLotsVisitFreedomUIDS.UsrClient"
						}
					},
					"UsrLotsVisitFreedomUIDS_UsrClient_l3bu60c_List": {
						"isCollection": true,
						"modelConfig": {
							"sortingConfig": {
								"default": [
									{
										"columnName": "Name",
										"direction": "asc"
									}
								]
							}
						}
					},
					"UsrLotsVisitFreedomUIDS_UsrResponsibleManager_6ly756c": {
						"modelConfig": {
							"path": "UsrLotsVisitFreedomUIDS.UsrResponsibleManager"
						}
					},
					"UsrLotsVisitFreedomUIDS_UsrResponsibleManager_6ly756c_List": {
						"isCollection": true,
						"modelConfig": {
							"sortingConfig": {
								"default": [
									{
										"columnName": "Name",
										"direction": "asc"
									}
								]
							}
						}
					},
					"UsrLotsVisitFreedomUIDS_UsrClientComment_sj8767z": {
						"modelConfig": {
							"path": "UsrLotsVisitFreedomUIDS.UsrClientComment"
						}
					},
					"UsrLotsVisitFreedomUIDS_UsrRealtorsComment_xtx42o7": {
						"modelConfig": {
							"path": "UsrLotsVisitFreedomUIDS.UsrRealtorsComment"
						}
					},
					"UsrLotsVisitFreedomUIDS_UsrParentLots_dvou38h": {
						"modelConfig": {
							"path": "UsrLotsVisitFreedomUIDS.UsrParentLots"
						}
					},
					"UsrLotsVisitFreedomUIDS_UsrParentLots_dvou38h_List": {
						"isCollection": true,
						"modelConfig": {
							"sortingConfig": {
								"default": [
									{
										"columnName": "UsrName",
										"direction": "asc"
									}
								]
							}
						}
					},
					"UsrLotsVisitFreedomUIDS_UsrLotsRealty_sv1fepu": {
						"modelConfig": {
							"path": "UsrLotsVisitFreedomUIDS.UsrLotsRealty"
						}
					},
					"UsrLotsVisitFreedomUIDS_UsrLotsRealty_sv1fepu_List": {
						"isCollection": true,
						"modelConfig": {
							"sortingConfig": {
								"default": [
									{
										"columnName": "UsrName",
										"direction": "asc"
									}
								]
							}
						}
					},
					"UsrLotsVisitFreedomUIDS_UsrResult_6mq5p08": {
						"modelConfig": {
							"path": "UsrLotsVisitFreedomUIDS.UsrResult"
						}
					},
					"UsrLotsVisitFreedomUIDS_UsrResult_6mq5p08_List": {
						"isCollection": true,
						"modelConfig": {
							"sortingConfig": {
								"default": [
									{
										"columnName": "Name",
										"direction": "asc"
									}
								]
							}
						}
					},
					"UsrLotsVisitFreedomUIDS_UsrState_cf6lzml": {
						"modelConfig": {
							"path": "UsrLotsVisitFreedomUIDS.UsrState"
						}
					},
					"UsrLotsVisitFreedomUIDS_UsrState_cf6lzml_List": {
						"isCollection": true,
						"modelConfig": {
							"sortingConfig": {
								"default": [
									{
										"columnName": "Name",
										"direction": "asc"
									}
								]
							}
						}
					}
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"dataSources": {
						"UsrLotsVisitFreedomUIDS": {
							"type": "crt.EntityDataSource",
							"scope": "page",
							"config": {
								"entitySchemaName": "UsrLotsVisitFreedomUI",
								"loadParameters": {
									"options": {
										"pagingConfig": {
											"rowCount": 1,
											"rowsOffset": -1
										},
										"sortingConfig": {
											"columns": []
										}
									}
								},
								"allowCopyingRecords": false
							}
						}
					},
					"primaryDataSourceName": "UsrLotsVisitFreedomUIDS"
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[
			{
				request: "crt.SaveRecordRequest",
		        handler: async (request, next) => {
		            const context = request.$context;

					const sysSettingsService = new sdk.SysSettingsService();
		            const UsrMinTimeBetweenVisits = await sysSettingsService.getByCode('UsrMinTimeBetweenVisits');
					const minBreakMinutes = UsrMinTimeBetweenVisits.value;
					
		            const realtyIdObject = await context.UsrLotsVisitFreedomUIDS_UsrLotsRealty_sv1fepu;
					const realtyId = realtyIdObject.value;
		            const visitDateTime = await context.UsrLotsVisitFreedomUIDS_UsrVisitDateTime_x5qjgkk;
		            const currentVisitIdObject = await context.UsrLotsVisitFreedomUIDS_UsrParentLots_dvou38h;
					const currentVisitId = currentVisitIdObject.value;
		            
		            var esq = this.Ext.create("Terrasoft.EntitySchemaQuery", {
					    rootSchemaName: "UsrLotsVisitFreedomUI"
					});
					esq.addColumn("UsrVisitDateTime");

					esq.addColumn("UsrLotsRealty");

					const realtyFilter = esq.createColumnFilterWithParameter(Terrasoft.ComparisonType.EQUAL, "UsrLotsRealty", realtyId);
					esq.filters.addItem(realtyFilter);

					const currentVisitDate = new Date(visitDateTime);
					
					const result = await new Promise((resolve) => {
						esq.getEntityCollection(resolve);
					});

					console.log("realtyId:", realtyId);
					console.log("currentVisitDate:", currentVisitDate);
					console.log("currentVisitId:", currentVisitId);
					
					console.log(result.collection.collection);

					if (result.success && result.collection && result.collection.getCount() > 0) {
						const dates = [];
						result.collection.each((item) => {
							const UsrVisitDateTime = item.get("UsrVisitDateTime");
							if (UsrVisitDateTime) {
								dates.push(new Date(UsrVisitDateTime));
							}
						});
						
						dates.sort((a, b) => b - a);

						const lastVisitDate = dates.find(d => d < currentVisitDate);
						console.log("lastVisitDate:", lastVisitDate);
						const diffMs = currentVisitDate.getTime() - new Date(lastVisitDate).getTime();
						const diffMinutes = Math.floor(diffMs / (1000 * 60));
						console.log("diffMinutes:", diffMinutes, "minBreakMinutes:", minBreakMinutes);
						
						if (diffMinutes < minBreakMinutes) {
							/* Create an instance of the dialog service from "@creatio-devkit/common." */
							const dialogService = new sdk.DialogService();
							const result = await dialogService.open({
								message: `Перерва між переглядами має бути не менше ${minBreakMinutes} хв. Поточний інтервал: ${diffMinutes} хв.`,
								actions: [
									{
										key: 'Yes',
										config: {
											color: 'primary',
											caption: 'Close',
										}
									},
								]
							});

							return false;
						}
					}

					return next?.handle(request);
				}
			}
			
		]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});
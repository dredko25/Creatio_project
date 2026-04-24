define("UsrClientsFreedomUI_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "Tabs",
				"values": {
					"styleType": "default",
					"mode": "tab",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto",
					"allowToggleClose": true
				}
			},
			{
				"operation": "merge",
				"name": "Feed",
				"values": {
					"dataSourceName": "PDS",
					"entitySchemaName": "UsrClientsFreedomUI"
				}
			},
			{
				"operation": "merge",
				"name": "AttachmentList",
				"values": {
					"columns": [
						{
							"id": "0138700d-e7cd-474a-904c-fe008b50456e",
							"code": "AttachmentListDS_Name",
							"caption": "#ResourceString(AttachmentListDS_Name)#",
							"dataValueType": 28,
							"width": 200
						}
					]
				}
			},
			{
				"operation": "insert",
				"name": "UsrName",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.UsrName",
					"control": "$UsrName",
					"labelPosition": "auto",
					"multiline": false
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrClientsCode",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrClientsCode_nybxhkl",
					"control": "$PDS_UsrClientsCode_nybxhkl",
					"readonly": false,
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "UsrClientsType",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 3,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrClientsType_iz4pahp",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_UsrClientsType_iz4pahp",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"valueDetails": null
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "addRecord_glq5xm0",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_glq5xm0_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "UsrClientsType",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrClientsManager",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 4,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrClientsManager_2hwa2d5",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_UsrClientsManager_2hwa2d5",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"valueDetails": null
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "addRecord_kxp3j6d",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_kxp3j6d_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "UsrClientsManager",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrClientsPhone",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 5,
						"rowSpan": 1
					},
					"type": "crt.PhoneInput",
					"label": "$Resources.Strings.PDS_UsrClientsPhone_hvbqsqy",
					"control": "$PDS_UsrClientsPhone_hvbqsqy",
					"labelPosition": "auto",
					"placeholder": "",
					"tooltip": "",
					"needHandleSave": false
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_umvp7mv",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_umvp7mv_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "small",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"fitContent": true
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_o7f73b0",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_umvp7mv",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_swvt0fl",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"gap": "none",
					"alignItems": "center",
					"items": [],
					"layoutConfig": {
						"colSpan": 1,
						"column": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_o7f73b0",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_ktnt78y",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_ktnt78y_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "UsrLotsVisitFreedomUI",
							"defaultValues": [
								{
									"attributeName": "UsrClient",
									"value": "$Id"
								}
							]
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "FlexContainer_swvt0fl",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_bpbtl13",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_bpbtl13_caption)#",
					"icon": "reload-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload"
							},
							"dataSourceName": "GridDetail_2nay3twDS"
						}
					}
				},
				"parentName": "FlexContainer_swvt0fl",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_lxehgwj",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_lxehgwj_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_swvt0fl",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_6krrf9q",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_6krrf9q_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_2nay3tw"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_lxehgwj",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_adte27u",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_adte27u_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "UsrLotsVisitFreedomUI"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_lxehgwj",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_93d1lrj",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_93d1lrj_placeholder)#",
					"iconOnly": true,
					"_filterOptions": {
						"expose": [
							{
								"attribute": "GridDetailSearchFilter_93d1lrj_GridDetail_2nay3tw",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"GridDetail_2nay3tw"
										]
									}
								]
							}
						],
						"from": [
							"GridDetailSearchFilter_93d1lrj_SearchValue",
							"GridDetailSearchFilter_93d1lrj_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "FlexContainer_swvt0fl",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_oti4q42",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_umvp7mv",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_2nay3tw",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							}
						}
					},
					"items": "$GridDetail_2nay3tw",
					"primaryColumnName": "GridDetail_2nay3twDS_Id",
					"columns": [
						{
							"id": "9d69c6dd-3425-3b32-fdbb-958caf392e25",
							"code": "GridDetail_2nay3twDS_UsrClientComment",
							"caption": "#ResourceString(GridDetail_2nay3twDS_UsrClientComment)#",
							"dataValueType": 28
						},
						{
							"id": "bed520bb-7c6f-e647-726a-f04eb7d3c3e7",
							"code": "GridDetail_2nay3twDS_UsrVisitDateTime",
							"caption": "#ResourceString(GridDetail_2nay3twDS_UsrVisitDateTime)#",
							"dataValueType": 7
						},
						{
							"id": "8e660a4f-a366-2791-a9f0-a657b460463a",
							"code": "GridDetail_2nay3twDS_UsrResponsibleManager",
							"caption": "#ResourceString(GridDetail_2nay3twDS_UsrResponsibleManager)#",
							"dataValueType": 10
						},
						{
							"id": "83413087-5e20-07fc-d6b7-beae3e6a524f",
							"code": "GridDetail_2nay3twDS_UsrClient",
							"caption": "#ResourceString(GridDetail_2nay3twDS_UsrClient)#",
							"dataValueType": 10
						},
						{
							"id": "ec164769-830c-94cc-f371-fb480d6e1bf1",
							"code": "GridDetail_2nay3twDS_UsrClientComment",
							"caption": "#ResourceString(GridDetail_2nay3twDS_UsrClientComment)#",
							"dataValueType": 28
						},
						{
							"id": "609e38a4-2d21-36a2-3413-697192d96c87",
							"code": "GridDetail_2nay3twDS_UsrRealtorsComment",
							"caption": "#ResourceString(GridDetail_2nay3twDS_UsrRealtorsComment)#",
							"dataValueType": 28
						},
						{
							"id": "819b2b02-fc17-8e27-8235-15c93acde7c6",
							"code": "GridDetail_2nay3twDS_UsrLotsRealty",
							"caption": "#ResourceString(GridDetail_2nay3twDS_UsrLotsRealty)#",
							"dataValueType": 10
						},
						{
							"id": "0991d1fa-65e4-16cc-e845-c92645967f87",
							"code": "GridDetail_2nay3twDS_UsrResult",
							"caption": "#ResourceString(GridDetail_2nay3twDS_UsrResult)#",
							"dataValueType": 10
						},
						{
							"id": "40e5b73d-207b-1df8-8e19-f8ddb78705a4",
							"code": "GridDetail_2nay3twDS_UsrState",
							"caption": "#ResourceString(GridDetail_2nay3twDS_UsrState)#",
							"dataValueType": 10
						}
					],
					"placeholder": false
				},
				"parentName": "GridContainer_oti4q42",
				"propertyName": "items",
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
					"UsrName": {
						"modelConfig": {
							"path": "PDS.UsrName"
						}
					},
					"PDS_UsrClientsCode_nybxhkl": {
						"modelConfig": {
							"path": "PDS.UsrClientsCode"
						}
					},
					"PDS_UsrClientsType_iz4pahp": {
						"modelConfig": {
							"path": "PDS.UsrClientsType"
						}
					},
					"PDS_UsrClientsType_iz4pahp_List": {
						"isCollection": true,
						"modelConfig": {}
					},
					"PDS_UsrClientsManager_2hwa2d5": {
						"modelConfig": {
							"path": "PDS.UsrClientsManager"
						}
					},
					"PDS_UsrClientsManager_2hwa2d5_List": {
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
					"PDS_UsrClientsPhone_hvbqsqy": {
						"modelConfig": {
							"path": "PDS.UsrClientsPhone"
						}
					},
					"GridDetail_2nay3tw": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_2nay3twDS",
							"filterAttributes": [
								{
									"name": "GridDetailSearchFilter_93d1lrj_GridDetail_2nay3tw",
									"loadOnChange": true
								},
								{
									"loadOnChange": true,
									"name": "GridDetail_2nay3tw_PredefinedFilter"
								}
							]
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_2nay3twDS_UsrClientComment": {
									"modelConfig": {
										"path": "GridDetail_2nay3twDS.UsrClientComment"
									}
								},
								"GridDetail_2nay3twDS_UsrVisitDateTime": {
									"modelConfig": {
										"path": "GridDetail_2nay3twDS.UsrVisitDateTime"
									}
								},
								"GridDetail_2nay3twDS_UsrResponsibleManager": {
									"modelConfig": {
										"path": "GridDetail_2nay3twDS.UsrResponsibleManager"
									}
								},
								"GridDetail_2nay3twDS_UsrClient": {
									"modelConfig": {
										"path": "GridDetail_2nay3twDS.UsrClient"
									}
								},
								"GridDetail_2nay3twDS_UsrRealtorsComment": {
									"modelConfig": {
										"path": "GridDetail_2nay3twDS.UsrRealtorsComment"
									}
								},
								"GridDetail_2nay3twDS_UsrLotsRealty": {
									"modelConfig": {
										"path": "GridDetail_2nay3twDS.UsrLotsRealty"
									}
								},
								"GridDetail_2nay3twDS_UsrResult": {
									"modelConfig": {
										"path": "GridDetail_2nay3twDS.UsrResult"
									}
								},
								"GridDetail_2nay3twDS_UsrState": {
									"modelConfig": {
										"path": "GridDetail_2nay3twDS.UsrState"
									}
								},
								"GridDetail_2nay3twDS_Id": {
									"modelConfig": {
										"path": "GridDetail_2nay3twDS.Id"
									}
								}
							}
						}
					},
					"GridDetail_2nay3tw_PredefinedFilter": {
						"value": null
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Id",
					"modelConfig"
				],
				"values": {
					"path": "PDS.Id"
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"primaryDataSourceName": "PDS",
					"dependencies": {
						"GridDetail_2nay3twDS": [
							{
								"attributePath": "UsrClient",
								"relationPath": "PDS.Id"
							}
						]
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"dataSources"
				],
				"values": {
					"PDS": {
						"type": "crt.EntityDataSource",
						"config": {
							"entitySchemaName": "UsrClientsFreedomUI"
						},
						"scope": "page"
					},
					"GridDetail_2nay3twDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "UsrLotsVisitFreedomUI",
							"attributes": {
								"UsrClientComment": {
									"path": "UsrClientComment"
								},
								"UsrVisitDateTime": {
									"path": "UsrVisitDateTime"
								},
								"UsrResponsibleManager": {
									"path": "UsrResponsibleManager"
								},
								"UsrClient": {
									"path": "UsrClient"
								},
								"UsrRealtorsComment": {
									"path": "UsrRealtorsComment"
								},
								"UsrLotsRealty": {
									"path": "UsrLotsRealty"
								},
								"UsrResult": {
									"path": "UsrResult"
								},
								"UsrState": {
									"path": "UsrState"
								}
							}
						}
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});
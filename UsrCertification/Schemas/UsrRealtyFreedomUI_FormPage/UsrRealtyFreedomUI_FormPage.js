define("UsrRealtyFreedomUI_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
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
					"entitySchemaName": "UsrRealtyFreedomUI"
				}
			},
			{
				"operation": "merge",
				"name": "AttachmentList",
				"values": {
					"columns": [
						{
							"id": "08e42a9c-5702-4e2d-a2e3-becd394a38f7",
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
				"name": "UsrRealtyType",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrRealtyType_c0b47rv",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_UsrRealtyType_c0b47rv",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"valueDetails": null
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "addRecord_rus2qf0",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_rus2qf0_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "UsrRealtyType",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrManager",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 3,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrManager_pklihbb",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_UsrManager_pklihbb",
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
				"name": "addRecord_j0ld06l",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_j0ld06l_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "UsrManager",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrRealtyAddress",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_UsrRealtyAddress_1asmnur",
					"control": "$PDS_UsrRealtyAddress_1asmnur",
					"placeholder": "",
					"tooltip": "",
					"readonly": false,
					"multiline": false,
					"labelPosition": "auto"
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrRealtyNumbersOfRooms",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrRealtyNumbersOfRooms_p4x4dvt",
					"control": "$PDS_UsrRealtyNumbersOfRooms_p4x4dvt",
					"readonly": false,
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "UsrRealtyArea",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrRealtyArea_0cjtey6",
					"control": "$PDS_UsrRealtyArea_0cjtey6",
					"readonly": false,
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "UsrRealtyFloor",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrRealtyFloor_did75tq",
					"control": "$PDS_UsrRealtyFloor_did75tq",
					"readonly": false,
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "UsrRealtyLivingArea",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 3,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrRealtyLivingArea_i30rmna",
					"control": "$PDS_UsrRealtyLivingArea_i30rmna",
					"readonly": false,
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "UsrRealtyDescription",
				"values": {
					"type": "crt.RichTextEditor",
					"label": "$Resources.Strings.PDS_UsrRealtyDescription_olfpq5c",
					"control": "$PDS_UsrRealtyDescription_olfpq5c",
					"placeholder": "",
					"tooltip": "",
					"readonly": false,
					"multiline": false,
					"labelPosition": "auto",
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 3,
						"rowSpan": 1
					},
					"filesStorage": {
						"masterRecordColumnValue": "$Id",
						"entitySchemaName": "SysFile",
						"recordColumnName": "RecordId"
					}
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_3qtpihp",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_3qtpihp_title)#",
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
				"name": "GridContainer_3jp2mw5",
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
				"parentName": "ExpansionPanel_3qtpihp",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_wslz7yy",
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
				"parentName": "GridContainer_3jp2mw5",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_v1mxlea",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_v1mxlea_caption)#",
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
									"attributeName": "UsrParentLots",
									"value": "$Id"
								}
							]
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "FlexContainer_wslz7yy",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_ktsi4a2",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_ktsi4a2_caption)#",
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
							"dataSourceName": "GridDetail_hjnaus3DS"
						}
					}
				},
				"parentName": "FlexContainer_wslz7yy",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_4j5kw3m",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_4j5kw3m_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_wslz7yy",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_dfm8xlt",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_dfm8xlt_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "RealtyVisitGridDetail"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_4j5kw3m",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_egptps1",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_egptps1_caption)#",
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
				"parentName": "GridDetailSettingsBtn_4j5kw3m",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_c32e8dj",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_c32e8dj_placeholder)#",
					"iconOnly": true,
					"_filterOptions": {
						"expose": [
							{
								"attribute": "GridDetailSearchFilter_c32e8dj_GridDetail_hjnaus3",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"GridDetail_hjnaus3"
										]
									}
								]
							}
						],
						"from": [
							"GridDetailSearchFilter_c32e8dj_SearchValue",
							"GridDetailSearchFilter_c32e8dj_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "FlexContainer_wslz7yy",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_dody196",
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
				"parentName": "ExpansionPanel_3qtpihp",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "RealtyVisitGridDetail",
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
					"items": "$GridDetail_hjnaus3",
					"primaryColumnName": "GridDetail_hjnaus3DS_Id",
					"columns": [
						{
							"id": "0e2ffb30-03ff-92a1-5504-d30c52d03034",
							"code": "GridDetail_hjnaus3DS_UsrLotsRealty",
							"caption": "#ResourceString(GridDetail_hjnaus3DS_UsrLotsRealty)#",
							"dataValueType": 10
						},
						{
							"id": "6a7441aa-8150-412a-7d48-477d8d7f35df",
							"code": "GridDetail_hjnaus3DS_UsrClientComment",
							"caption": "#ResourceString(GridDetail_hjnaus3DS_UsrClientComment)#",
							"dataValueType": 28
						},
						{
							"id": "27563e7d-7887-72ba-ba16-20a071a93d86",
							"code": "GridDetail_hjnaus3DS_UsrVisitDateTime",
							"caption": "#ResourceString(GridDetail_hjnaus3DS_UsrVisitDateTime)#",
							"dataValueType": 7
						},
						{
							"id": "1fa9a724-f2a9-ca48-5d3a-29fe3c3777ec",
							"code": "GridDetail_hjnaus3DS_UsrResponsibleManager",
							"caption": "#ResourceString(GridDetail_hjnaus3DS_UsrResponsibleManager)#",
							"dataValueType": 10
						},
						{
							"id": "0ddc7fae-0d89-f55a-5e9b-d49babb376ed",
							"code": "GridDetail_hjnaus3DS_UsrClient",
							"caption": "#ResourceString(GridDetail_hjnaus3DS_UsrClient)#",
							"dataValueType": 10
						},
						{
							"id": "a4116067-de20-331f-4ec0-4e3d6c77c0d0",
							"code": "GridDetail_hjnaus3DS_UsrClientComment",
							"caption": "#ResourceString(GridDetail_hjnaus3DS_UsrClientComment)#",
							"dataValueType": 28
						},
						{
							"id": "865a08da-829a-2a92-0c8d-7abccd14bfa5",
							"code": "GridDetail_hjnaus3DS_UsrRealtorsComment",
							"caption": "#ResourceString(GridDetail_hjnaus3DS_UsrRealtorsComment)#",
							"dataValueType": 28
						},
						{
							"id": "5ae90379-5ca3-2a98-098d-23821473ea93",
							"code": "GridDetail_hjnaus3DS_UsrResult",
							"caption": "#ResourceString(GridDetail_hjnaus3DS_UsrResult)#",
							"dataValueType": 10
						},
						{
							"id": "2d945d4f-05fe-7d66-3667-66104ad09a39",
							"code": "GridDetail_hjnaus3DS_UsrState",
							"caption": "#ResourceString(GridDetail_hjnaus3DS_UsrState)#",
							"dataValueType": 10
						}
					],
					"placeholder": false,
					"activeRow": "$GridDetail_hjnaus3_ActiveRow",
					"selectionState": "$GridDetail_hjnaus3_SelectionState",
					"_selectionOptions": {
						"attribute": "GridDetail_hjnaus3_SelectionState"
					},
					"bulkActions": []
				},
				"parentName": "GridContainer_dody196",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_hjnaus3_AddTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Add tag",
					"icon": "tag-icon",
					"clicked": {
						"request": "crt.AddTagsInRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_hjnaus3DS",
							"filters": "$GridDetail_hjnaus3 | crt.ToCollectionFilters : 'GridDetail_hjnaus3' : $GridDetail_hjnaus3_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_hjnaus3_SelectionState"
						}
					},
					"items": []
				},
				"parentName": "RealtyVisitGridDetail",
				"propertyName": "bulkActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_hjnaus3_RemoveTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Remove tag",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.RemoveTagsInRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_hjnaus3DS",
							"filters": "$GridDetail_hjnaus3 | crt.ToCollectionFilters : 'GridDetail_hjnaus3' : $GridDetail_hjnaus3_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_hjnaus3_SelectionState"
						}
					}
				},
				"parentName": "GridDetail_hjnaus3_AddTagsBulkAction",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_hjnaus3_ExportToExcelBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Export to Excel",
					"icon": "export-button-icon",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "RealtyVisitGridDetail",
							"filters": "$GridDetail_hjnaus3 | crt.ToCollectionFilters : 'GridDetail_hjnaus3' : $GridDetail_hjnaus3_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_hjnaus3_SelectionState"
						}
					}
				},
				"parentName": "RealtyVisitGridDetail",
				"propertyName": "bulkActions",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetail_hjnaus3_MergeBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Merge",
					"icon": "merge-icon",
					"clicked": {
						"request": "crt.MergeRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_hjnaus3DS",
							"selectionState": "$GridDetail_hjnaus3_SelectionState"
						}
					}
				},
				"parentName": "RealtyVisitGridDetail",
				"propertyName": "bulkActions",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetail_hjnaus3_DeleteBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Delete",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.DeleteRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_hjnaus3DS",
							"filters": "$GridDetail_hjnaus3 | crt.ToCollectionFilters : 'GridDetail_hjnaus3' : $GridDetail_hjnaus3_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_hjnaus3_SelectionState"
						}
					}
				},
				"parentName": "RealtyVisitGridDetail",
				"propertyName": "bulkActions",
				"index": 3
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
					"PDS_UsrRealtyType_c0b47rv": {
						"modelConfig": {
							"path": "PDS.UsrRealtyType"
						}
					},
					"PDS_UsrRealtyType_c0b47rv_List": {
						"isCollection": true,
						"modelConfig": {}
					},
					"PDS_UsrRealtyAddress_1asmnur": {
						"modelConfig": {
							"path": "PDS.UsrRealtyAddress"
						}
					},
					"PDS_UsrRealtyArea_0cjtey6": {
						"modelConfig": {
							"path": "PDS.UsrRealtyArea"
						}
					},
					"PDS_UsrRealtyLivingArea_i30rmna": {
						"modelConfig": {
							"path": "PDS.UsrRealtyLivingArea"
						}
					},
					"PDS_UsrRealtyNumbersOfRooms_p4x4dvt": {
						"modelConfig": {
							"path": "PDS.UsrRealtyNumbersOfRooms"
						}
					},
					"PDS_UsrRealtyFloor_did75tq": {
						"modelConfig": {
							"path": "PDS.UsrRealtyFloor"
						}
					},
					"PDS_UsrRealtyDescription_olfpq5c": {
						"modelConfig": {
							"path": "PDS.UsrRealtyDescription"
						}
					},
					"PDS_UsrManager_pklihbb": {
						"modelConfig": {
							"path": "PDS.UsrManager"
						}
					},
					"PDS_UsrManager_pklihbb_List": {
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
					"GridDetail_hjnaus3": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_hjnaus3DS",
							"filterAttributes": [
								{
									"name": "GridDetailSearchFilter_c32e8dj_GridDetail_hjnaus3",
									"loadOnChange": true
								},
								{
									"loadOnChange": true,
									"name": "GridDetail_hjnaus3_PredefinedFilter"
								}
							],
							"sortingConfig": {
								"default": [
									{
										"direction": "asc",
										"columnName": "UsrVisitDateTime"
									}
								]
							}
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_hjnaus3DS_UsrLotsRealty": {
									"modelConfig": {
										"path": "GridDetail_hjnaus3DS.UsrLotsRealty"
									}
								},
								"GridDetail_hjnaus3DS_UsrClientComment": {
									"modelConfig": {
										"path": "GridDetail_hjnaus3DS.UsrClientComment"
									}
								},
								"GridDetail_hjnaus3DS_UsrVisitDateTime": {
									"modelConfig": {
										"path": "GridDetail_hjnaus3DS.UsrVisitDateTime"
									}
								},
								"GridDetail_hjnaus3DS_UsrResponsibleManager": {
									"modelConfig": {
										"path": "GridDetail_hjnaus3DS.UsrResponsibleManager"
									}
								},
								"GridDetail_hjnaus3DS_UsrClient": {
									"modelConfig": {
										"path": "GridDetail_hjnaus3DS.UsrClient"
									}
								},
								"GridDetail_hjnaus3DS_UsrRealtorsComment": {
									"modelConfig": {
										"path": "GridDetail_hjnaus3DS.UsrRealtorsComment"
									}
								},
								"GridDetail_hjnaus3DS_UsrResult": {
									"modelConfig": {
										"path": "GridDetail_hjnaus3DS.UsrResult"
									}
								},
								"GridDetail_hjnaus3DS_UsrState": {
									"modelConfig": {
										"path": "GridDetail_hjnaus3DS.UsrState"
									}
								},
								"GridDetail_hjnaus3DS_Id": {
									"modelConfig": {
										"path": "GridDetail_hjnaus3DS.Id"
									}
								}
							}
						}
					},
					"GridDetail_hjnaus3_PredefinedFilter": {
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
						"GridDetail_hjnaus3DS": [
							{
								"attributePath": "UsrLotsRealty",
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
							"entitySchemaName": "UsrRealtyFreedomUI"
						},
						"scope": "page"
					},
					"GridDetail_hjnaus3DS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "UsrLotsVisitFreedomUI",
							"attributes": {
								"UsrLotsRealty": {
									"path": "UsrLotsRealty"
								},
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
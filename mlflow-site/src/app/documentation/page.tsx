// import type { Metadata } from "next";
// import localFont from "next/font/local";
import './documentation.css';
// import { Viewport } from "next";
import Method from '../components/Method';
import MethodBarIndividual from '../components/MethodBar';
import Image from 'next/image';

export default function Documentation() {
  // const methodArr = [
  //   { name: 'Create Experiment' },
  //   { name: 'Search Experiments' },
  //   { name: 'Get Experiment' },
  //   { name: 'Get Experiment By Name' },
  //   { name: 'Delete Experiment' },
  //   { name: 'Restore Experiment' },
  //   {
  //     name: 'Update Experiment',
  //     description: 'Update experiment name.',
  //     requestProps: [
  //       {
  //         name: 'experiment_id',
  //         type: 'STRING',
  //         description: 'ID of the associated experiment. (required)',
  //       },
  //       {
  //         name: 'new_name',
  //         type: 'STRING',
  //         description:
  //           'The experiment’s name is changed to the new name. The new name must be unique. (required)',
  //       },
  //     ],
  //     response: 'Promise<void>',
  //   },
  // ];

  const methodArr = [
    {
      name: 'Create Experiment',
      description:
        'Create an experiment with a name. Returns the ID of the newly created experiment.',
      requestProps: [
        {
          name: 'name',
          type: 'STRING',
          description: 'Experiment name. (required)',
        },
        {
          name: 'artifact_location',
          type: 'STRING',
          description:
            'Optional location where all artifacts for the experiment are stored.',
        },
        {
          name: 'tags',
          type: 'ARRAY<{key: string, value: string}>',
          description: 'Optional collection of tags to set on the experiment.',
        },
      ],
      responseType: 'Promise<string>',
      responseDescription:
        'Returns the ID of the newly created experiment in an object.',
    },
    {
      name: 'Search Experiments',
      description:
        'Search experiments using a filter expression over experiment attributes and tags.',
      requestProps: [
        {
          name: 'filter',
          type: 'STRING',
          description:
            'A filter expression over experiment attributes and tags that allows returning a subset of experiments. (required)',
        },
        {
          name: 'max_results',
          type: 'NUMBER',
          description: 'Maximum number of experiments desired. (required)',
        },
        {
          name: 'page_token',
          type: 'STRING',
          description:
            'Optional token indicating the page of experiments to fetch.',
        },
        {
          name: 'order_by',
          type: 'ARRAY<STRING>',
          description: 'Optional list of columns for ordering search results.',
        },
        {
          name: 'view_type',
          type: 'STRING',
          description:
            'Optional qualifier for type of experiments to be returned.',
        },
      ],
      responseType: 'Promise<Object>',
      responseDescription:
        'Returns object containing an array of experiment objects matching the filter, and optionally a next_page_token that can be used to retrieve the next page of experiments.',
    },
    {
      name: 'Get Experiment',
      description:
        'Get metadata for an experiment, querying by experiment ID. This method works on deleted experiments.',
      requestProps: [
        {
          name: 'experiment_id',
          type: 'STRING',
          description: 'ID of the associated experiment. (required)',
        },
      ],
      responseType: 'Promise<Object>',
      responseDescription: 'Returns object containing the matched experiment.',
    },
    {
      name: 'Get Experiment By Name',
      description:
        'Get metadata for an experiment, querying by experiment name. This endpoint will return deleted experiments, but prefers the active experiment if an active and deleted experiment share the same name.',
      requestProps: [
        {
          name: 'experiment_name',
          type: 'STRING',
          description: 'ID of the associated experiment. (required)',
        },
      ],
      responseType: 'Promise<Object>',
      responseDescription: 'Returns object containing the matched experiment.',
    },
    {
      name: 'Delete Experiment',
      description: 'Mark an experiment for deletion.',
      requestProps: [
        {
          name: 'experiment_id',
          type: 'STRING',
          description: 'ID of the associated experiment. (required)',
        },
      ],
      responseType: 'Promise<void>',
      responseDescription: 'No response.',
    },
    {
      name: 'Restore Experiment',
      description: 'Restore an experiment marked for deletion.',
      requestProps: [
        {
          name: 'experiment_id',
          type: 'STRING',
          description: 'ID of the associated experiment. (required)',
        },
      ],
      responseType: 'Promise<void>',
      responseDescription: 'No response.',
    },
    {
      name: 'Update Experiment',
      description: 'Update experiment name.',
      requestProps: [
        {
          name: 'experiment_id',
          type: 'STRING',
          description: 'ID of the associated experiment. (required)',
        },
        {
          name: 'new_name',
          type: 'STRING',
          description:
            'The experiment’s name is changed to the new name. The new name must be unique. (required)',
        },
      ],
      responseType: 'Promise<void>',
      responseDescription: 'No response.',
    },
    {
      name: 'Set Experiment Tag',
      description: 'Set a tag on an experiment.',
      requestProps: [
        {
          name: 'experiment_id',
          type: 'STRING',
          description:
            'ID of the experiment under which to log the tag. (required)',
        },
        {
          name: 'key',
          type: 'STRING',
          description: 'Name of the tag. (required)',
        },
        {
          name: 'value',
          type: 'STRING',
          description: 'String value of the tag being logged. (required)',
        },
      ],
      responseType: 'Promise<void>',
      responseDescription: 'No response.',
    },
    {
      name: 'Create Run',
      description:
        'Create a new run within an experiment. A run is usually a single execution of a machine learning or data ETL pipeline.',
      requestProps: [
        {
          name: 'experiment_id',
          type: 'STRING',
          description: 'ID of the associated experiment. (required)',
        },
        {
          name: 'run_name',
          type: 'STRING',
          description: 'Name of the run.',
        },
        {
          name: 'start_time',
          type: 'NUMBER',
          description:
            'Unix timestamp in milliseconds of when the run started.',
        },
        {
          name: 'tags',
          type: 'ARRAY',
          description: 'Additional metadata for the run.',
        },
      ],
      responseType: 'Promise<Object>',
      responseDescription:
        'A promise that resolves with the created run object.',
    },
    {
      name: 'Delete Run',
      description: 'Mark a run for deletion.',
      requestProps: [
        {
          name: 'run_id',
          type: 'STRING',
          description: 'ID of the run to delete. (required)',
        },
      ],
      responseType: 'Promise<void>',
      responseDescription: 'No response.',
    },
    {
      name: 'Restore Run',
      description: 'Restore a deleted run.',
      requestProps: [
        {
          name: 'run_id',
          type: 'STRING',
          description: 'ID of the run to restore. (required)',
        },
      ],
      responseType: 'Promise<void>',
      responseDescription: 'No response.',
    },
    {
      name: 'Get Run',
      description: 'Get metadata, metrics, params, and tags for a run.',
      requestProps: [
        {
          name: 'run_id',
          type: 'STRING',
          description: 'ID of the run to fetch. (required)',
        },
      ],
      responseType: 'Promise<Object>',
      responseDescription:
        'A promise that resolves with the fetched run object.',
    },
    {
      name: 'Update Run',
      description: 'Update run metadata.',
      requestProps: [
        {
          name: 'run_id',
          type: 'STRING',
          description: 'ID of the run to update. (required)',
        },
        {
          name: 'status',
          type: 'STRING',
          description: 'Updated status of the run.',
        },
        {
          name: 'end_time',
          type: 'NUMBER',
          description: 'Unix timestamp in milliseconds of when the run ended.',
        },
        {
          name: 'run_name',
          type: 'STRING',
          description: 'Updated name of the run.',
        },
      ],
      responseType: 'Promise<Object>',
      responseDescription:
        'A promise that resolves with the updated metadata of the run.',
    },
    {
      name: 'Log Metric',
      description: 'Log a metric for a run.',
      requestProps: [
        {
          name: 'run_id',
          type: 'STRING',
          description:
            'ID of the run under which to log the metric. (required)',
        },
        {
          name: 'key',
          type: 'STRING',
          description: 'Name of the metric. (required)',
        },
        {
          name: 'value',
          type: 'NUMBER',
          description: 'Double value of the metric being logged. (required)',
        },
        {
          name: 'timestamp',
          type: 'NUMBER',
          description:
            'Unix timestamp in milliseconds at the time metric was logged. (required)',
        },
        {
          name: 'step',
          type: 'NUMBER',
          description: 'Step at which to log the metric.',
        },
      ],
      responseType: 'Promise<void>',
      responseDescription: 'No response.',
    },
    {
      name: 'Log Batch',
      description: 'Log a batch of metrics, params, and tags for a run.',
      requestProps: [
        {
          name: 'run_id',
          type: 'STRING',
          description: 'ID of the run to log under. (required)',
        },
        {
          name: 'metrics',
          type: 'ARRAY',
          description:
            'Metrics to log. A single request can contain up to 1000 metrics.',
        },
        {
          name: 'params',
          type: 'ARRAY',
          description:
            'Params to log. A single request can contain up to 100 params.',
        },
        {
          name: 'tags',
          type: 'ARRAY',
          description:
            'Tags to log. A single request can contain up to 100 tags.',
        },
      ],
      responseType: 'Promise<void>',
      responseDescription: 'No response.',
    },
    {
      name: 'Log Model',
      description: 'Logs a model.',
      requestProps: [
        {
          name: 'run_id',
          type: 'STRING',
          description: 'ID of the run to log under. (required)',
        },
        {
          name: 'model_json',
          type: 'STRING',
          description:
            'MLmodel file in json format. Should conform to the MLflow model format. (required)',
        },
      ],
      responseType: 'Promise<void>',
      responseDescription: 'No response.',
    },
    {
      name: 'Log Inputs',
      description: 'Logs inputs for a run.',
      requestProps: [
        {
          name: 'run_id',
          type: 'STRING',
          description: 'ID of the run to log under. (required)',
        },
        {
          name: 'datasets',
          type: 'ARRAY',
          description:
            "Dataset inputs. Each object should have a 'dataset' property.",
        },
      ],
      responseType: 'Promise<void>',
      responseDescription: 'No response.',
    },
    {
      name: 'Set Tag',
      description: 'Set a tag on a run.',
      requestProps: [
        {
          name: 'run_id',
          type: 'STRING',
          description: 'ID of the run under which to log the tag. (required)',
        },
        {
          name: 'key',
          type: 'STRING',
          description: 'Name of the tag. (required)',
        },
        {
          name: 'value',
          type: 'STRING',
          description: 'String value of the tag being logged. (required)',
        },
      ],
      responseType: 'Promise<void>',
      responseDescription: 'No response.',
    },
    {
      name: 'Delete Tag',
      description: 'Delete a tag on a run.',
      requestProps: [
        {
          name: 'run_id',
          type: 'STRING',
          description:
            'ID of the run that the tag was logged under. (required)',
        },
        {
          name: 'key',
          type: 'STRING',
          description: 'Name of the tag. (required)',
        },
      ],
      responseType: 'Promise<void>',
      responseDescription: 'No response.',
    },
    {
      name: 'Log Param',
      description: 'Log a param used for a run.',
      requestProps: [
        {
          name: 'run_id',
          type: 'STRING',
          description: 'ID of the run under which to log the param. (required)',
        },
        {
          name: 'key',
          type: 'STRING',
          description: 'Name of the param. (required)',
        },
        {
          name: 'value',
          type: 'STRING',
          description: 'String value of the param being logged. (required)',
        },
      ],
      responseType: 'Promise<void>',
      responseDescription: 'No response.',
    },
    {
      name: 'Get Metric History',
      description:
        'Get a list of all values for the specified metric for a given run.',
      requestProps: [
        {
          name: 'run_id',
          type: 'STRING',
          description:
            'ID of the run from which to fetch metric values. (required)',
        },
        {
          name: 'metric_key',
          type: 'STRING',
          description: 'Name of the metric. (required)',
        },
        {
          name: 'page_token',
          type: 'STRING',
          description: 'Token indicating the page of metric history to fetch.',
        },
        {
          name: 'max_results',
          type: 'NUMBER',
          description:
            'Maximum number of logged instances of a metric for a run to return per call.',
        },
      ],
      responseType: 'Promise<Object>',
      responseDescription:
        'A promise that resolves with the values for the specified metric.',
    },
    {
      name: 'Search Runs',
      description: 'Search for runs that satisfy expressions.',
      requestProps: [
        {
          name: 'experiment_ids',
          type: 'ARRAY',
          description: 'List of experiment IDs to search over.',
        },
        {
          name: 'filter',
          type: 'STRING',
          description: 'A filter expression over params, metrics, and tags.',
        },
        {
          name: 'run_view_type',
          type: 'STRING',
          description:
            'Whether to display only active, only deleted, or all runs.',
        },
        {
          name: 'max_results',
          type: 'NUMBER',
          description: 'Maximum number of runs desired.',
        },
        {
          name: 'order_by',
          type: 'ARRAY',
          description: 'List of columns to be ordered by.',
        },
        {
          name: 'page_token',
          type: 'STRING',
          description:
            'Token that can be used to retrieve the next page of run results.',
        },
      ],
      responseType: 'Promise<Object>',
      responseDescription:
        'A promise that resolves with the runs that match the search criteria.',
    },
    {
      name: 'Get Runs',
      description: 'Get metadata, metrics, params, and tags for multiple runs.',
      requestProps: [
        {
          name: 'run_ids',
          type: 'ARRAY',
          description: 'IDs of the runs to fetch. (required)',
        },
      ],
      responseType: 'Promise<Object>',
      responseDescription:
        'A promise that resolves with the fetched run objects.',
    },
    {
      name: 'Create Registered Model',
      description: 'Creates a new registered model.',
      requestProps: [
        {
          name: 'name',
          type: 'STRING',
          description: 'The name of the model to register. (required)',
        },
        {
          name: 'tags',
          type: 'ARRAY<{key: string, value: string}>',
          description: 'Optional tags for the model.',
        },
        {
          name: 'description',
          type: 'STRING',
          description: 'Optional description for the model.',
        },
      ],
      responseType: 'Promise<object>',
      responseDescription: 'The created registered model object.',
    },
    {
      name: 'Get Registered Model',
      description: 'Retrieves a registered model by name.',
      requestProps: [
        {
          name: 'name',
          type: 'STRING',
          description:
            'The name of the registered model to retrieve. (required)',
        },
      ],
      responseType: 'Promise<object>',
      responseDescription: 'The registered model object.',
    },
    {
      name: 'Rename Registered Model',
      description: 'Renames a registered model.',
      requestProps: [
        {
          name: 'name',
          type: 'STRING',
          description: 'The current name of the registered model. (required)',
        },
        {
          name: 'newName',
          type: 'STRING',
          description: 'The new name for the registered model. (required)',
        },
      ],
      responseType: 'Promise<object>',
      responseDescription: 'The updated registered model object.',
    },
    {
      name: 'Update Registered Model',
      description: "Updates a registered model's description.",
      requestProps: [
        {
          name: 'name',
          type: 'STRING',
          description: 'The name of the registered model to update. (required)',
        },
        {
          name: 'description',
          type: 'STRING',
          description: 'The new description for the model.',
        },
      ],
      responseType: 'Promise<object>',
      responseDescription: 'The updated registered model object.',
    },
    {
      name: 'Delete Registered Model',
      description: 'Deletes a registered model.',
      requestProps: [
        {
          name: 'name',
          type: 'STRING',
          description: 'The name of the registered model to delete. (required)',
        },
      ],
      responseType: 'Promise<void>',
      responseDescription: 'No response.',
    },
    {
      name: 'Get Latest Model Versions',
      description: 'Gets the latest versions of a registered model.',
      requestProps: [
        {
          name: 'name',
          type: 'STRING',
          description: 'The name of the registered model. (required)',
        },
        {
          name: 'stages',
          type: 'ARRAY<STRING>',
          description: 'Optional array of stages to filter the versions by.',
        },
      ],
      responseType: 'Promise<Array<object>>',
      responseDescription: 'An array of the latest model versions.',
    },
    {
      name: 'Search Registered Models',
      description: 'Searches for registered models based on filter criteria.',
      requestProps: [
        {
          name: 'filter',
          type: 'STRING',
          description: 'Optional filter string to apply to the search.',
        },
        {
          name: 'maxResults',
          type: 'NUMBER',
          description: 'Optional maximum number of results to return.',
        },
        {
          name: 'orderBy',
          type: 'ARRAY<STRING>',
          description: 'Optional array of fields to order the results by.',
        },
        {
          name: 'pageToken',
          type: 'STRING',
          description: 'Optional token for pagination.',
        },
      ],
      responseType: 'Promise<object>',
      responseDescription:
        'An object containing the search results and pagination information.',
    },
    {
      name: 'Set Registered Model Tag',
      description: 'Sets a tag on a registered model.',
      requestProps: [
        {
          name: 'name',
          type: 'STRING',
          description: 'The name of the registered model. (required)',
        },
        {
          name: 'key',
          type: 'STRING',
          description: 'The key of the tag. (required)',
        },
        {
          name: 'value',
          type: 'STRING',
          description: 'The value of the tag. (required)',
        },
      ],
      responseType: 'Promise<void>',
      responseDescription: 'No response.',
    },
    {
      name: 'Delete Registered Model Tag',
      description: 'Deletes a tag from a registered model.',
      requestProps: [
        {
          name: 'name',
          type: 'STRING',
          description: 'The name of the registered model. (required)',
        },
        {
          name: 'key',
          type: 'STRING',
          description: 'The key of the tag to delete. (required)',
        },
      ],
      responseType: 'Promise<void>',
      responseDescription: 'No response.',
    },
    {
      name: 'Set Registered Model Alias',
      description:
        'Sets an alias for a specific version of a registered model.',
      requestProps: [
        {
          name: 'name',
          type: 'STRING',
          description: 'The name of the registered model. (required)',
        },
        {
          name: 'alias',
          type: 'STRING',
          description: 'The alias to set. (required)',
        },
        {
          name: 'version',
          type: 'STRING',
          description:
            'The version number to associate with the alias. (required)',
        },
      ],
      responseType: 'Promise<void>',
      responseDescription: 'No response.',
    },
    {
      name: 'Delete Registered Model Alias',
      description: 'Deletes an alias from a registered model.',
      requestProps: [
        {
          name: 'name',
          type: 'STRING',
          description: 'The name of the registered model. (required)',
        },
        {
          name: 'alias',
          type: 'STRING',
          description: 'The alias to delete. (required)',
        },
      ],
      responseType: 'Promise<void>',
      responseDescription: 'No response.',
    },
    {
      name: 'Get Model Version By Alias',
      description: 'Retrieves a model version using its alias.',
      requestProps: [
        {
          name: 'name',
          type: 'STRING',
          description: 'The name of the registered model. (required)',
        },
        {
          name: 'alias',
          type: 'STRING',
          description: 'The alias of the model version to retrieve. (required)',
        },
      ],
      responseType: 'Promise<object>',
      responseDescription: 'The model version object.',
    },
    {
      name: 'Create Model Version',
      description: 'Creates a new version of a model.',
      requestProps: [
        {
          name: 'modelName',
          type: 'STRING',
          description: 'The name of the registered model. (required)',
        },
        {
          name: 'source',
          type: 'STRING',
          description: 'The source path where the model artifacts are stored. (required)',
        },
        {
          name: 'run_id',
          type: 'STRING',
          description: 'The id of the run that generated this version. (optional)',
        },
        {
          name: 'tags',
          type: 'ARRAY',
          description: 'Tags of key/value pairs for the model version. (optional)',
        },
        {
          name: 'run_link',
          type: 'STRING',
          description: 'MLflow run link for the run that generated this model version. (optional)',
        },
        {
          name: 'description',
          type: 'STRING',
          description: 'Description of the model version. (optional)',
        },
      ],
      responseType: 'Promise<object>',
      responseDescription: 'The created model version object.',
    },
    {
      name: 'Get Model Version',
      description: 'Gets the specified version of the model.',
      requestProps: [
        {
          name: 'modelName',
          type: 'STRING',
          description: 'The name of the registered model. (required)',
        },
        {
          name: 'version',
          type: 'STRING',
          description: 'The version number of the model to fetch. (required)',
        },
      ],
      responseType: 'Promise<object>',
      responseDescription: 'The model version object.',
    },
    {
      name: 'Update Model Version',
      description: 'Updates a specific model version.',
      requestProps: [
        {
          name: 'modelName',
          type: 'STRING',
          description: 'The name of the registered model. (required)',
        },
        {
          name: 'version',
          type: 'STRING',
          description: 'The version number of the model to update. (required)',
        },
        {
          name: 'description',
          type: 'STRING',
          description: 'The description of the model version. (optional)',
        },
      ],
      responseType: 'Promise<object>',
      responseDescription: 'The updated model version object.',
    },
    {
      name: 'Search Model Versions',
      description: 'Searches for model versions based on provided filters.',
      requestProps: [
        {
          name: 'filter',
          type: 'STRING',
          description: 'The filter criteria for searching model versions. (optional)',
        },
        {
          name: 'maxResults',
          type: 'NUMBER',
          description: 'The maximum number of results to return. (optional)',
        },
        {
          name: 'order_by',
          type: 'ARRAY',
          description: 'List of columns to be ordered by. (optional)',
        },
        {
          name: 'page_token',
          type: 'STRING',
          description: 'Pagination token to go to the next page based on previous search query. (optional)',
        },
      ],
      responseType: 'Promise<Array<object>>',
      responseDescription: 'An array of model versions that match the search criteria.',
    },
    {
      name: 'Get Download URI for Model Version Artifacts',
      description: 'Retrieves the download uri for model version artifacts.',
      requestProps: [
        {
          name: 'modelName',
          type: 'STRING',
          description: 'The name of the registered model. (required)',
        },
        {
          name: 'version',
          type: 'STRING',
          description: 'The version number of the model to fetch the uri for. (required)',
        },
      ],
      responseType: 'Promise<string>',
      responseDescription: 'The uri for downloading the model version artifacts.',
    },
    {
      name: 'Transition Model Version Stage',
      description: 'Transitions a model version to a different stage.',
      requestProps: [
        {
          name: 'modelName',
          type: 'STRING',
          description: 'The name of the registered model. (required)',
        },
        {
          name: 'version',
          type: 'STRING',
          description: 'The version number of the model to transition. (required)',
        },
        {
          name: 'stage',
          type: 'STRING',
          description: 'The stage to transition the model version to (e.g., "staging", "production"). (required)',
        },
        {
          name: 'archive_existing_versions',
          type: 'BOOLEAN',
          description: 'Flag to archive existing versions in that stage. (required)',
        },
      ],
      responseType: 'Promise<object>',
      responseDescription: 'The updated model version object after the stage transition.',
    },
    {
      name: 'Set Model Version Tag',
      description: 'Sets a tag on a specific model version.',
      requestProps: [
        {
          name: 'modelName',
          type: 'STRING',
          description: 'The name of the registered model. (required)',
        },
        {
          name: 'version',
          type: 'STRING',
          description: 'The version number of the model to tag. (required)',
        },
        {
          name: 'key',
          type: 'STRING',
          description: 'The key of the tag. (required)',
        },
        {
          name: 'value',
          type: 'STRING',
          description: 'The value of the tag. (required)',
        },
      ],
      responseType: 'Promise<void>',
      responseDescription: 'No response.',
    },
    {
      name: 'Delete Model Version Tag',
      description: 'Deletes a tag from a specific model version.',
      requestProps: [
        {
          name: 'modelName',
          type: 'STRING',
          description: 'The name of the registered model. (required)',
        },
        {
          name: 'version',
          type: 'STRING',
          description: 'The version number of the model to untag. (required)',
        },
        {
          name: 'key',
          type: 'STRING',
          description: 'The key of the tag to delete. (required)',
        },
      ],
      responseType: 'Promise<void>',
      responseDescription: 'No response.',
    },
    {
      name: 'Delete Model Version',
      description: 'Deletes a specific model version.',
      requestProps: [
        {
          name: 'modelName',
          type: 'STRING',
          description: 'The name of the registered model. (required)',
        },
        {
          name: 'version',
          type: 'STRING',
          description: 'The version number of the model to delete. (required)',
        },
      ],
      responseType: 'Promise<void>',
      responseDescription: 'No response.',
    }
  ];

  return (
    <div className='documentationWrapper'>
      <div className='documentationHeader'>
        <Image
          src={'/assets/MLflow-js-logo.png'}
          width={144}
          height={38.4}
          alt='G'
          className='documentationImage'
        />
      </div>
      <div className='documentationLeftSideBar'>
        <div className='documentationLeftHeader'>
          <span>Mlflow.js Methods</span>
        </div>
        {methodArr.map((method, index) => (
          <MethodBarIndividual
            key={`methodBarIndividual:${index}`}
            name={method.name}
          />
        ))}
        {/* <div>Left SideBar 770px seems to be when the mlflow site hides/shows the left sidebar</div>
        <div>Left SideBar Open/close on click, the left side bar is like 300px wide on teh mlflow site</div> */}
      </div>
      <div className='documentationMainWrapper'>
        <div className='documentationMain'>
          <div className='methodsHeader'>Methods</div>
          {methodArr.map((method, index) => (
            <Method
              key={`methodIndividual:${index}`}
              name={method.name}
              description={method.description}
              requestProps={method.requestProps}
              responseType={method.responseType}
              responseDescription={method.responseDescription}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

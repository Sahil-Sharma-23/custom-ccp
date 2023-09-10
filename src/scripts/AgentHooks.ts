import 'amazon-connect-streams';

const getAgentDetails = () => {
  connect.agent(agent => {
    console.log("Agent Name: ", agent.getName());
    console.log("Agent Contacts: ", agent.getContacts());
    console.log("Agent Permissions: ", agent.getPermissions());
  })
}

const changeAgentStatusToAvailable = () => {
  connect.agent(function (agent) {
    var avail = agent.getAgentStates().filter(function (state) {
      return state.type === connect.AgentStateType.ROUTABLE;
    })[0];
    agent.setState(avail, {
      success: function () {
        console.log("Agent status successfully changes to Available");
      },
      failure: function () {
        console.log("Agent status failed set to Available");
      }
    });
  });
}

const changeAgentStatusToOffline = () => {
  connect.agent(function (agent) {
    var offlineState = agent.getAgentStates().filter(function (state) {
      return state.type === connect.AgentStateType.OFFLINE;
    })[0];
    agent.setState(offlineState, {
      success: function () {
        console.log("Agent status successfully changes to Offline");
      },
      failure: function () {
        console.log("Agent status failed set to Offline");
      }
    });
  });
}

const getAgentConfiguration = () => {
  connect.agent(function (agent) {
    var config = agent.getConfiguration();
    console.log("here is your configuration: " + JSON.stringify(config));
  });
}

const onAuthSuccess = () => {
  connect.core.onAuthorizeSuccess(() => {
    console.log("authorization succeeded! Hooray");
  });
}

const terminateSession = () => {
  connect.core.terminate();
}

export {
  getAgentDetails,
  changeAgentStatusToAvailable,
  changeAgentStatusToOffline,
  onAuthSuccess,
  getAgentConfiguration,
  terminateSession,
};
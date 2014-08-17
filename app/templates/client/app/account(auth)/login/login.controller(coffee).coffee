'use strict'

angular.module '<%= scriptAppName %>'
.controller 'LoginCtrl', ($scope, Auth, $location<% if(filters.oauth) {%>, $window<% } %>) ->
  $scope.user = {}
  $scope.errors = {}
  $scope.login = (form) ->
    $scope.submitted = true

    if form.$valid
      # Logged in, redirect to home
      Auth.login
        email: $scope.user.email
        password: $scope.user.password

      .then ->
        $location.path '/'

      .catch (err) ->
        $scope.errors.other = err.message
<% if(filters.oauth) {%>
  $scope.loginOauth = (provider) ->
    $window.location.href = '/auth/' + provider<% } %>

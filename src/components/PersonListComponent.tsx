const ListComponent = () => {
  return (
    <>
      <main className="flex-grow container mx-auto px-4 py-8">


        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Άτομα</h1>
            <p className="text-gray-600">Διαχείριση και προβολή</p>
          </div>

            <a href="${pageContext.request.contextPath}/school-app/teachers/insert"
               className="inline-flex items-center px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-lg transition-colors duration-200 shadow-sm">
              <i className="fas fa-plus mr-2"></i>
              Εισαγωγή
            </a>
        </div>


        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden mb-8">
          <div className="p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Αναζήτηση</h2>
            <form id="filterForm" method="GET" action="${pageContext.request.contextPath}/school-app/teachers/view"
                  className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label htmlFor="firstname" className="block text-sm font-medium text-gray-700 mb-1">Όνομα</label>
                <input type="text" name="firstname" id="firstname" placeholder="Όνομα"
                       className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition duration-150"/>
              </div>
              <div>
                <label htmlFor="lastname" className="block text-sm font-medium text-gray-700 mb-1">Επώνυμο</label>
                <input type="text" name="lastname" id="lastname" placeholder="Επώνυμο"
                       className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition duration-150"/>
              </div>
              <div className="flex items-end space-x-2 md:col-span-2">
                <button id="submitBtn" type="submit"
                        className="flex-1 inline-flex justify-center items-center px-4 py-2 bg-success-500 hover:bg-success-600 font-medium rounded-lg transition-colors duration-200 shadow-sm">

                  Αναζήτηση
                </button>
                <button id="resetBtn" type="button"
                        className="flex-1 inline-flex justify-center items-center px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium rounded-lg transition-colors duration-200 shadow-sm">

                  Επαναφορά
                </button>
              </div>
            </form>
          </div>
        </div>


        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
              <tr>
                <th scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Κωδικος
                </th>
                <th scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ονομα
                </th>
                <th scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Επωνυμο
                </th>
                <th scope="col"
                    className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Πραξεις
                </th>
              </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">

                    <tr className="hover:bg-gray-50 transition-colors duration-150">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"></td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"></td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"></td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">
                        <div className="flex justify-end space-x-3">
                          <a
                             className="text-primary-500 hover:text-primary-600 p-1 rounded-full hover:bg-primary-50 transition-colors duration-200"
                             title="Προβολή">
                            <i className="fas fa-eye w-5 h-5"></i>
                          </a>
                          <a
                             className="text-warning-500 hover:text-warning-600 p-1 rounded-full hover:bg-warning-50 transition-colors duration-200"
                             title="Επεξεργασία">
                            <i className="fas fa-pen-to-square w-5 h-5"></i>
                          </a>
                          <a
                             className="text-danger-500 hover:text-danger-600 p-1 rounded-full hover:bg-danger-50 transition-colors duration-200"
                             title="Διαγραφή">
                            <i className="fas fa-trash-can w-5 h-5"></i>
                          </a>
                        </div>
                      </td>
                    </tr>

                  <tr>
                    <td className="px-6 py-4 text-center text-sm text-gray-500">
                      Δεν βρέθηκαν καθηγητές
                    </td>
                  </tr>

              </tbody>
            </table>
          </div>
        </div>


          <div className="mt-6">
            <div
              className="${requestScope.message.contains('επιτυχ') ? 'bg-success-50 border-success-200 text-success-700' : 'bg-danger-50 border-danger-200 text-danger-700'} border rounded-lg p-4">
              <div className="flex items-center">
                <i
                  className="${requestScope.message.contains('επιτυχ') ? 'fas fa-check-circle text-success-500' : 'fas fa-exclamation-circle text-danger-500'} mr-2"></i>

              </div>
            </div>
          </div>

      </main>
    </>
  )
}

export default ListComponent
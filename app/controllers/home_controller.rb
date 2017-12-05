class HomeController < ApplicationController
  def index
    if params[:id] == ""
      @error = "Please enter a stock ticker symbol."
    elsif if params[:id]
            begin
              @stock = StockQuote::Stock.quote(params[:id])
            rescue StandardError
              @error = "That stock symbol does not exist."
            end
          end
    end
  end
end

def about

end

class Api::V1::HolidaysController < ApplicationController
  before_action :set_holiday, only: %i[ show update destroy ]

  # GET /holidays
  def index
    @holidays = Holiday.all

    render json: @holidays
  end

  # GET /holidays/1
  def show
    render json: @holiday
  end

  # POST /holidays
  def create
    @holiday = Holiday.new(holiday_params)

    if @holiday.save
      render json: @holiday, status: :created, location: @holiday
    else
      render json: @holiday.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /holidays/1
  def update
    if @holiday.update(holiday_params)
      render json: @holiday
    else
      render json: @holiday.errors, status: :unprocessable_entity
    end
  end

  # DELETE /holidays/1
  def destroy
    @holiday.destroy
  end

  private

    # Use callbacks to share common setup or constraints between actions.
    def set_holiday
      @holiday = Holiday.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def holiday_params
      params.require(:holiday).permit(:title, :location, :google_map_url, :start_date, :end_date, :description)
    end
end
